import Ball from './ball.js';

export default class Tabloid{
    score = 0;
    balls = [];
    isStarted = false;
    timing = 1000;

    constructor(){
        this.tabScore = document.querySelector('.tabloid-score');
        this.tabMusic = document.querySelector('.tabloid-mus');
        this.game = document.querySelector('.game');
        this.tabStart = document.querySelector('.tabloid-start');

        this.tabStart.addEventListener('click', this.start);
    }

    show(){
        this.tabScore.innerText = this.score;
    }

    addScore = (ball) => {
        this.score++;
        this.show();

        this.balls = this.balls.filter(b => b != ball);
    }

    subtractScore = (ball) => {
        this.score--;
        this.show();
        this.tabMusic.play();

        this.balls = this.balls.filter(b => b != ball);
    }

    get methods(){
        return {
            add : this.addScore,
            sub : this.subtractScore,
            del : this.deleteBall
        }
    }

    start = () => {
        this.isStarted = !this.isStarted;
        this.tabStart.innerText = this.isStarted ? 'STOP' : 'START';

        if(this.isStarted){
            this.balls.forEach(ball => ball.resume());

            this.gameInterval = setInterval(() => {
                this.balls.push(new Ball(this.game, this.methods));
                console.log(this.balls);
            }, this.timing);
        }else{
            clearInterval(this.gameInterval);
            this.balls.forEach(ball => ball.pause());
        }

    }
    
}