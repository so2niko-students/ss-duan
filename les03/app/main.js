
//Function declaration
function show2(){
    return 2;
}

//Function Expression
const show3 = function(){
    return 3;
}

// const show4 = () => {
//     return 4;
// }

const show4 = () => 4;

const arr = (new Array(100)).fill(0).map(() => ~~(Math.random() * 101));

console.log(arr);

console.log(arr.filter(el => el >= 90));

console.log(arr.sort((a, b) => a - b));



class Car{
    vehicle = 33;
    constructor(){

    }

    name = () => {
        return this.name;
    }
}


// console.log(show2());
// console.log(show3());
// console.log(show4());

//IIFE

(function(){
    console.log('hahahaha');
})();

function hello(a = 1, b = 2){
    console.log('hello');
    console.log(arguments);
    return;
}

const h = hello();
console.log(h);