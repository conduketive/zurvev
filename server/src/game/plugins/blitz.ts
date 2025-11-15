import { GameObjectDefs } from "../../../../shared/defs/gameObjectDefs";
import { GunDef } from "../../../../shared/defs/gameObjects/gunDefs";
import { UnlockDefs } from "../../../../shared/defs/gameObjects/unlockDefs";
import { MapId } from "../../../../shared/defs/types/misc";
import {
    GameConfig,
    type InventoryItem,
    WeaponSlot,
} from "../../../../shared/gameConfig";
import { ObjectType } from "../../../../shared/net/objectSerializeFns";
import { Config } from "../../config";
import type { Player } from "../objects/player";
import { GamePlugin, PlayerDamageEvent } from "../pluginManager";

const BACKPACK_LEVEL = 3;
export function onPlayerJoin(data: Player) {
    if (data.game.mapName !== "local_main") return;
    const inventory: Partial<Record<InventoryItem, number>> = {
        frag: 3,
        smoke: 1,
        strobe: 1,
        mirv: 1,
        bandage: GameConfig.bagSizes["bandage"][BACKPACK_LEVEL],
        healthkit: GameConfig.bagSizes["healthkit"][BACKPACK_LEVEL],
        soda: GameConfig.bagSizes["soda"][BACKPACK_LEVEL],
        painkiller: GameConfig.bagSizes["painkiller"][BACKPACK_LEVEL],
        "1xscope": 1,
        "2xscope": 1,
        "4xscope": 1,
    };
    data.weaponManager.setWeapon(WeaponSlot.Primary, "mosin", 5);
    data.weaponManager.setWeapon(WeaponSlot.Secondary, "spas12", 9);
    for (const [item, amount] of Object.entries(inventory)) {
        data.invManager.set(item as unknown as InventoryItem, amount);
    }
    data.backpack = "backpack03";
    data.helmet = "helmet03";
    data.chest = "chest03";
    data.scope = "4xscope";
    data.boost = 100;
    data.weaponManager.setCurWeapIndex(WeaponSlot.Primary);
    data.addPerk("endless_ammo", false);
    data.addPerk("self_revive", false);
    if (!data.game.map.perkMode) data.addPerk("takedown", false);
}

export function onPlayerKill(data: Omit<PlayerDamageEvent, "amount">) {
    const perks = data.player.perks;
    for ( const perk of perks) {
        data.player.removePerk(perk.type);
    }

    data.player.weaponManager.setCurWeapIndex(WeaponSlot.Melee);

    {
        const primary = data.player.weapons[WeaponSlot.Primary];
        if (isItemInLoadout(primary.type, "gun")) {
            primary.type = "";
            primary.ammo = 0;
            primary.cooldown = 0;
        }

        const secondary = data.player.weapons[WeaponSlot.Secondary];
        if (isItemInLoadout(secondary.type, "gun")) {
            secondary.type = "";
            secondary.ammo = 0;
            secondary.cooldown = 0;
        }
    }

    // give the killer nades and gun ammo and inventory ammo
    if (data.source?.__type === ObjectType.Player) {
        const killer = data.source;
        if (killer.inventory["frag"] == 0) {
            killer.weapons[WeaponSlot.Throwable].type = "frag";
        }   
        killer.invManager.give("frag", 2);
        killer.invManager.give("mirv", 1);
        killer.inventoryDirty = true;
        killer.weapsDirty = true;

        function loadAmmo(slot: WeaponSlot) {
            const weapon = killer.weapons[slot];
            if (weapon.type) {
                const gunDef = GameObjectDefs[weapon.type] as GunDef;
                killer.weapons[slot] = {
                    ...weapon,
                    ammo: gunDef.maxClip,
                };
            }
        }

        loadAmmo(WeaponSlot.Primary);
        loadAmmo(WeaponSlot.Secondary);
    }
}


export default class DeathMatchPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on("playerJoin", onPlayerJoin);
        this.on("playerKill", onPlayerKill);
    }
}
