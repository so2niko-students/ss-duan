export default class Ball{
    PX = 'px';
    VW = 'vw';

    constructor(gameContainer){
        this.gameContainer = gameContainer;

        this.length = this.random(20, 100);
        this.color = this.randomColor();
        this.coordX = this.random(0, 99);
        this.coordY = 0;
        this.step = 22;

        this.createNode();

        this.start();
    }

    random(from, to){
        return Math.floor(Math.random() * (to - from) + from + 1);
    }

    randomColor(){
        return `#${Math.random().toString(16).slice(2,8)}`;
    }

    createNode(){
        this.node = document.createElement('div');
        const len = this.length + this.PX;

        this.node.style.width = len;
        this.node.style.height = len;
        this.node.style.backgroundColor = this.color;
        this.node.style.left = this.coordX + this.VW;

        this.node.classList.add('game-ball');

        // this.node.addEventListener('click', this.onClick.bind(this));//!variant for loosing context
        this.node.addEventListener('click', this.onClick);

        this.gameContainer.appendChild(this.node);
    }

    move(){
        this.coordY += this.step;
        this.node.style.top = this.coordY + this.VW;

        if(this.coordY >= 100){
            this.onClick();
        }
    }

    start(){
        this.interval = setInterval(() => {
            this.move()
        }, 1000);
    }

    // onClick(){ //!variant for loosing context
    onClick = () => {
        clearInterval(this.interval);
        this.gameContainer.removeChild(this.node);
    }
}