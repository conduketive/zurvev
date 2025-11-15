import { util } from "../../utils/util";
import { type MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import type { PartialMapDef } from "./baseDefs";
import { Cobalt } from "./cobaltDefs";
import { Woods } from "./woodsDefs";
        

const mapDef: PartialMapDef = {
    mapId: MapId.CobaltWoods,
    desc: {
        name: "Cobalt Woods",
    },
    gameConfig: {
        planes: {
            ...Cobalt.gameConfig.planes,
            ...Woods.gameConfig.planes
        },
        roles: {
            ...Cobalt.gameConfig.roles,
        }
    }
};

export const cobaltWoods = util.mergeDeep({}, Cobalt, mapDef) as MapDef;