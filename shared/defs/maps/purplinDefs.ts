import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { MapId } from "../types/misc";
import { Main, PartialMapDef } from "./baseDefs";

const mapDef:PartialMapDef={
    mapId:MapId.Purplin,
    assets:{
        atlases:["shared","loadout","main","purplin"]
    },
    biome:{
        colors:{
            grass:0x68357d,
            beach:0x1f1178,
            playerGhillie:0x68357d,
            riverbank:0x34196b
        }
    },
    lootTable:{
        tier_ammo: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "22lr", count: 60, weight: 3 },
            { name: "45acp", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
        ],
        tier_ammo_crate: [
            { name: "9mm", count: 60, weight: 12 },
            { name: "22lr", count: 60, weight: 12 },
            { name: "12gauge", count: 10, weight: 12 },
            { name: "45acp", count: 60, weight: 12 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "50AE", count: 21, weight: 1 },
            { name: "308sub", count: 5, weight: 1 },
            { name: "flare", count: 1, weight: 1 },
        ],
        tier_guns:[
            { name: "m9", count: 1, weight: 19 },
            { name: "m1911", count: 1, weight: 18 },
            { name: "mp5", count: 1, weight: 10 },
            { name: "glock", count: 1, weight: 7 },
            { name: "tec22", count: 1, weight: 7 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "m1100", count: 1, weight: 6 },
            { name: "m1a1", count: 1, weight: 5 },
            { name: "m93r", count: 1, weight: 5 },
            { name: "colt45", count: 1, weight: 3.5 },
            { name: "ump9", count: 1, weight: 3 },
            { name: "cbc22", count: 1, weight: 3 },
            { name: "m870", count: 1, weight: 2 },
            { name: "og_m870", count: 1, weight: 2 },
            { name: "model94", count: 1, weight: 2 },
            { name: "mp220", count: 1, weight: 2 },
            { name: "spas12", count: 1, weight: 0.8 },
            { name: "vss", count: 1, weight: 0.7 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "mkg45", count: 1, weight: 0.1 },
            { name: "p30l", count: 1, weight: 0.09 },
            { name: "deagle", count: 1, weight: 0.05 },
            { name: "vector", count: 1, weight: 0.01 },
            { name: "vector45", count: 1, weight: 0.01 },
        ],
        
        tier_ring_case: [
            { name: "helmet03_rg_recon", count: 1, weight: 0.75 }, // ?
        ],
        tier_medical: [
            { name: "bandage", count: 5, weight: 16 },
            { name: "healthkit", count: 1, weight: 4 },
            { name: "soda", count: 2, weight: 15 },
            { name: "painkiller", count: 1, weight: 5 },
        ],
        tier_eye_stone: [
            { name: "vector45", count: 1, weight: 1 },
            { name: "556mm", count: 1, weight: 1 },
            { name: "762mm", count: 1, weight: 1 },
            { name: "garand", count: 1, weight: 1 },
            { name: "strobe", count: 1, weight: 1 },
            { name: "healthkit", count: 1, weight: 1 },
            { name: "painkiller", count: 4, weight: 1 },
            { name: "m4a1", count: 1, weight: 0.7 },
            { name: "m249", count: 1, weight: 0.2 },
            { name: "awc", count: 1, weight: 0.1 },
            { name: "pkp", count: 1, weight: 0.1 },
        ],
        tier_airdrop_uncommon: [
            { name: "mk12", count: 1, weight: 2.5 },
            { name: "scar", count: 1, weight: 0.75 },
            { name: "bar", count: 1, weight: 1 },
            { name: "mosin", count: 1, weight: 2.5 },
            { name: "m39", count: 1, weight: 2.5 },
            { name: "saiga", count: 1, weight: 1 },
            { name: "deagle", count: 1, weight: 1 },
            { name: "vector", count: 1, weight: 1 },
            { name: "sv98", count: 1, weight: 0.5 },
            { name: "qbb97", count: 1, weight: 1.5 },
            { name: "m9", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.5 },
            { name: "scout_elite", count: 1, weight: 1.5 },
            { name: "vss", count: 1, weight: 2.5 }, // !
        ],
        tier_airdrop_rare: [
            { name: "mk12", count: 1, weight: 2.5 },
            { name: "scar", count: 1, weight: 0.75 },
            { name: "bar", count: 1, weight: 1 },
            { name: "mosin", count: 1, weight: 2.5 },
            { name: "m39", count: 1, weight: 2.5 },
            { name: "saiga", count: 1, weight: 1 },
            { name: "deagle", count: 1, weight: 1 },
            { name: "vector", count: 1, weight: 1 },
            { name: "sv98", count: 1, weight: 0.5 },
            { name: "qbb97", count: 1, weight: 1.5 },
            { name: "m9", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.5 },
            { name: "scout_elite", count: 1, weight: 1.5 },
            { name: "vss", count: 1, weight: 2.5 }, // !

            { name: "garand", count: 1, weight: 6 },
            { name: "awc", count: 1, weight: 3 },
            { name: "pkp", count: 1, weight: 0.08 },
            { name: "m249", count: 1, weight: 0.1 },
            { name: "m4a1", count: 1, weight: 4 },
            { name: "scorpion", count: 1, weight: 5 }, // ?
            { name: "ots38_dual", count: 1, weight: 4.5 },
        ],
        tier_sv98: [{ name: "mosin", count: 1, weight: 1 }], //LMAO
        tier_perks: [
            { name: "small_arms", count: 1, weight: 15 },
            { name: "windwalk", count: 1, weight: 10 },
            { name: "takedown", count: 1, weight: 10 },
            { name: "field_medic", count: 1, weight: 1 },
            { name: "tree_climbing", count: 1, weight: 1 },
            { name: "bonus_9mm", count: 1, weight: 1 },
        ],
        tier_scout_crate: [
            { name: "tier_guns", count: 1, weight: 4 }, // ?
            { name: "tier_armor", count: 1, weight: 3 }, // ?
            { name: "tier_packs", count: 1, weight: 2 }, // ?
            { name: "tier_perks", count: 1, weight: 0.5 }, // ?
        ],
        tier_hatchet:[
            { name: "vector", count: 1, weight: 13 },
            { name: "vector45", count: 1, weight: 12 },
            { name: "ots38_dual", count: 1, weight: 10 },
            { name: "scout_elite", count: 1, weight: 3 },
            { name: "sv98", count: 1, weight: 1 },
        ],
        tier_chest: [
            { name: "hk416", count: 1, weight: 40 },
            { name: "scout_elite", count: 1, weight: 5 },
            { name: "helmet01", count: 1, weight: 30 },
            { name: "helmet02", count: 1, weight: 15 },
            { name: "helmet03", count: 1, weight: 5 },
            { name: "chest02", count: 1, weight: 30 },
            { name: "chest02", count: 1, weight: 15 },
            { name: "chest03", count: 1, weight: 5 },
            { name: "4xscope", count: 1, weight: 15 },
            { name: "8xscope", count: 1, weight: 10 },
            { name: "15xscope", count: 1, weight: 0.1 },
        ],
        tier_sledgehammer: [
            { name: "tier_perks", count: 1, weight: 2 }, // ?
            { name: "fireaxe", count: 1, weight: 1 }, // ?
        ],
        tier_chest_04: [
            { name: "m249", count: 1, weight: 40 }, // ?
            { name: "pkp", count: 1, weight: 30 }, // ?
            { name: "awc", count: 1, weight: 1 }, // ?
            { name: "m134", count: 1, weight: 1 }, // ?
        ],
    },
    mapGen:{
        map: {
            baseWidth: 700,
            baseHeight: 700,
            scale: { small: 1.1, large: 1.2 },
            extension: 50,
            shoreInset: 48,
            grassInset: 18,
            rivers: {
                lakes: [
                ],
                weights: [
                    {
                        weight:1,
                        widths:[16,10]
                    },
                    {
                        weight:0.7,
                        widths:[10,10]
                    },
                    {
                        weight:0.1,
                        widths:[15,20]
                    }
                ],
                smoothness: 0.5,
                spawnCabins: false,
                masks: [],
            },
        },
        densitySpawns: [
            {
                tree_01pu:300,
                bush_01pu:250,
                stone_01cb:300,
                oven_01:30,
                barrel_01:60,
                barrel_05:20,
                crate_01:40,
                crate_02:10,
                crate_03:20,
                crate_31:2,

                cache_02pu: 5, // Woodaxe Bloody

                container_01:3,
                container_02:3,
                container_03:3,
                container_04:3,
                container_05:3,
                container_06:1, //Golden Container
            },
        ],
        fixedSpawns:[
            {
                cabin_01:3,

                hut_01: 3,
                hut_03: 1, // scout hut
                
                warehouse_01:5,

                police_01:1,

                house_red_01:2,
                house_red_02:2,

                barn_01:2,
                barn_02:1,

                dead_town_01:1,
                //desert_town_02:1,

                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,

                greenhouse_02pu: 1,
            }
        ],
        customSpawnRules:{
            locationSpawns:[],
            placeSpawns:[]
        },
        randomSpawns:[

        ],
        importantSpawns:["dead_town_01"],
        /*bridgeTypes:{
            medium: "bridge_md_structure_01",
            large: "bridge_lg_structure_01",
            xlarge:undefined
        },*/
        places:[    
            {name:"kaklik",pos:v2.create(0.15,0.1)},
            {name:"dragon fruit",pos:v2.create(0.23,0.731)},
            {name:"namerio",pos:v2.create(0.74,0.452)},
            {name:"roblox",pos:v2.create(0.34,0.395)},
            {name:"suroimd",pos:v2.create(0.573,0.793)},
        ]
    }
}
export const Purplin=util.mergeDeep({},Main,mapDef)