class Coin {

    public speed:number;
    public div:HTMLElement;
    private game : Game;
    public x:number;
    public y:number;
    public width: number;
    public height: number;
            
    constructor(parent:HTMLElement, g: Game) {
        this.div = document.createElement("coin");
        parent.appendChild(this.div);
        this.game = g;
        this.speed = -4;
        this.x = 700;
        this.y = 140;

        this.width = 32;
        this.height = 31;
    }

    public draw():void {
        this.x += this.speed;
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";

        if(this.x <= -93){
            this.x = 1561;
        }
    }
}