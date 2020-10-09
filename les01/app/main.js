

//Переменная
let color = 'black';
//Константа
const type = {
    name : 'keyboard'
};

const names = [
    [1, 2, 3],
    [4, 5, 6]
];



console.log(color, type);
console.error(type);
console.info(color, type);
console.dir(type);
console.table(names);
console.log("%cNick", "color: red; padding: 15px; background-color: black;");

var name = 'Nick';

//alert -- вывод сообщения, всплывающее
//prompt -- вывод сообщения и запрос на внесение данных(input:text)
//confirm -- вывод сообщения и ок-отмена

// alert('Hello');
// const t = prompt('Hello');

// const t = confirm('Are you ok?');

// console.log(t);

//?Типы данных

//!Число - Number
const n = 23;
let n2 = 23.33;
const n3 = .33;
const n4 = 1.34e9;
console.log(n4);
console.log(3 - 2.9);
console.log(1234567890123456789 * 123456789);
const n5 = 1 / 0;
const n6 = Infinity;
const n7 = -1 / 0;
const n8 = -Infinity;
const n9 = 'wall' * 3;
console.log(typeof n9);

//!Big Int
const bn = 1234567890123456789n;
const bn2 = BigInt(1234567890123456789);

// console.log(bn);

//!String 

const str = 'Hello';
const str2 = "Hello";
const str3 = `Hello`;//backtick

const str4 = `${str}, ${n6 * n7} is ${n9}`;

const str5 = "${str}, ${n6 * n7} is ${n9}";
const str6 = str + ", " + n6 * n7 + " is " + n9;

console.log(str4);
console.log(str5);
console.log(str6);
console.log(str4.length);
console.log(str4[1]);
str4[1] = 3;
console.log(str4);

//!Boolean
const b = true;
const b2 = false;

//!undefined && null

//!Symbol

//!Object

const o = {
    b : true,//свойство
    str : 'Hi',
    n : 111,
    isTiger : undefined,
    isLion : null,
    o2 : {
        name : 'O2'
    }
};

o.isTiger = true;

const bbb = {
    name : 'bb'
};

// o = bbb;

console.log(o.isTiger);

let surname = 'Sotula';
let surname2 = surname;//КОпирование по значению

console.clear();
console.log(surname, surname2);

surname = 'Dnipro';

console.log(surname, surname2);

let cat1 = {
    name : 'Barsik'
};

let cat2 = cat1;//Копирование по ссылке

console.log(cat1, cat2);

cat1.name = 'Anihilator';

console.log(cat1, cat2);

//!Операции

//операнд оператор операнд

console.log(3 + '4');
// + - * / ** % 
//операнд оператор
//оператор операнд

console.log(++n2);
console.log(n2);

console.log(typeof +'1');

console.log(!false);

console.log(~~33.53264574);


if(3 == 3){//условие
    n2 = 3;//Действие ДА
}else{
    n2 = -3;//Действие НЕТ
}

//условие ? действие ДА : действие НЕТ;
3 == 3 ? n2 = 3 : n2 = -3;

n2 = 3 == 3 ? 3 : -3;