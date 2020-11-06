const box = {
    width : 1000,
    height : 400,
    material : 'wood',
    volume : function(){
        return this.width * this.height / 1000;
    }
};

console.log(box);
console.log(box.volume());

//Функция конструктор
function Box1(width, height, material){
    this.width = width;
    this.height = height;
    this.material = material;
    this.volume = function(){
        return this.width * this.height / 1000;
    }
}

const boxTest1 = new Box1(500, 500, 'paper');
console.log(boxTest1.volume());


const boxTest2 = Box1(500, 500, 'paper');
console.log(boxTest2);

class Box2{
    constructor(width, height, material){
        this.width = width;
        this.height = height;
        this.material = material;
    }
    volume(){
        return this.width * this.height / 1000;
    }
}

class BoxW extends Box2{
    constructor(width, height, material, weight){
        super(width, height, material);
        this.weight = weight;
    }
    show(){
        console.log(this);
    }
}

console.clear();

const boxTest3 = new BoxW(500, 500, 'paper', 2000);
boxTest3.show();