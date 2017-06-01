/// <reference path="miscItems.ts" />


class Coin extends MiscItems {

    public x:number;
    public y:number;
    public width: number;
    public height: number;
            
    constructor(parent:HTMLElement) {
        super("coin", parent);

    // VERBETERING: LongBlock is nu een child van MiscItems. Hierdoor wordt de speed en de draw en het aanmaken daar afgehandeld. 
        this.x = 700;
        this.y = 140;

        this.width = 32;
        this.height = 31;
    }
}