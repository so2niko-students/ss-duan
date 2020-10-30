//DOCUMENT OBJECT MODEL -- DOM
console.dir(document);

//Look for   DOM element
//id
const liRed = document.getElementById('li_red');//li

// liRed.innerHTML = '<strong>Blue</strong>';
liRed.innerText = '<strong>Blue</strong>';
liRed.style.color = 'red';
liRed.style.backgroundColor = 'blue';

//by tag
const lis = document.getElementsByTagName('li');
console.log(lis);

//by class
const redLines = document.getElementsByClassName('red-line');
console.log(redLines);

//Поиск по запросу
// Query selector
const olLis = document.querySelectorAll('ol li');
const redLines2 = document.querySelectorAll('.red-line');

console.log(olLis);
console.log(redLines2);

const ol = document.querySelector('ol');
console.dir(ol);

const game = {
    img : document.querySelector('.game-img'),
    step : 15,
    stepFormat : 'px',
    left : 0,
    top : 0,
    move : function(direction){
        switch(direction){
            case 'up' : {
                this.top -= this.step;
                break;
            }
            case 'down' : {
                this.top += this.step;
                break;
            }
            case 'left' : {
                this.left -= this.step;
                break;
            }
            case 'right' : {
                this.left += this.step;
                break;
            }
            default : {
                this.left += this.step;
                break;
            }
        }

        this.img.style.left = this.left + this.stepFormat;
        this.img.style.top = this.top + this.stepFormat;
    }
}

document.querySelectorAll('.btn-control').forEach(el => {
    el.addEventListener('click', ev => {
        game.move(ev.target.dataset.control);
    });
})


