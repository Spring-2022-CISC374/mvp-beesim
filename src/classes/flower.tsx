export default class FlowerController {
    private hasNectar: boolean;

    constructor() {
        this.hasNectar = true;
    }

    public getHasNectar(): boolean {
        return this.hasNectar;
    }

    public removeNectar(): void {
        this.hasNectar = false;
        return;
    }
}