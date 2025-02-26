import { HsvColorManager } from "./HsvColorManager";
import { addColorManager } from "tsparticles-engine";

export function loadHsvColorPlugin(): void {
    addColorManager("hsv", new HsvColorManager());
}
