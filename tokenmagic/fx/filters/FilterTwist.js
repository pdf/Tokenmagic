import { Anime } from "../Anime.js";
import "./proto/FilterProto.js";

export class FilterTwist extends PIXI.filters.TwistFilter {
    constructor(params) {
        super();
        this.enabled = false;
        this.radiusPercent = 50;
        this.angle = 4;
        this.animated = {};
        this.offset = [0, 0];
        this.setTMParams(params);
        this.anime = new Anime(this);
        this.normalizeTMParams();
    }

    handleTransform() {
        this.offset[0] = this.placeableImg.worldTransform.tx;
        this.offset[1] = this.placeableImg.worldTransform.ty;
        this.radius =
            (Math.max(this.placeableImg.width, this.placeableImg.height)
                * this.placeableImg.parent.worldTransform.a
                * this.radiusPercent) / 200;
    }
}