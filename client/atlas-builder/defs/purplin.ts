import type { AtlasDef } from "../atlasDefs";
import { BuildingSprites } from "./buildings";

export const PurplinAtlas: AtlasDef = {
    compress: true,
    images: [
        ...BuildingSprites.greenhouse_aged,
        "map/map-tree-01pu.svg",
        "map/map-bush-01pu.svg",
        "map/map-stone-01cb.svg",
        "map/map-barrel-05.svg",
        "map/map-crate-31.svg",
    ],
};
