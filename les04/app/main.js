//!map
//!filter
//!find
//!reduce
//!forEach
//every
//some

const arr = [10, 20, 30, 40, 50];

// const pricesNew = [];

// //Формирование нового массива на базе старого
// //Map new array from old
// for(let i = 0; i < arr.length; i++){
//   pricesNew[i] = arr[i] * 2;
// }

function double(element, i, arrLink){
  console.log(`${ i } : ${ element } [${ arrLink }]`);
  return element * 2;
//   return 33;
}

const pricesNew = arr.map((el, i) => `docs-> ${ i } : ${ el }`);

console.log(pricesNew);

//!FILTER
console.clear();

const transactions = [ -100, -13, -5, 1000, -44, -123.25, 1.235];

// const incomings = [];

// //Фильтрация массива по условию
// //Filter array by condition
// for(let i = 0; i < transactions.length; i++){
//     if(transactions[i] > 0){
//         incomings.push(transactions[i]);
//     }
// }

function filterIncoms(element, i, arr){
    console.log(element, i, arr);
    return element > 0;
}

const incomings = transactions.filter(el => el == ~~el);

console.log(incomings);

//!FIND
console.clear();

const workers = [
    { name : 'Mykyta', profession : 'Mage' },
    { name : 'Oleksii', profession : 'Warrior' },
    { name : 'Anastasiia', profession : 'Warrior' },
    { name : 'Vitalii', profession : 'Death Knight' },
    { name : 'Liubov', profession : 'Healer' }
]

const prof = 'Warrior';
// let user;

// //Поиск в массиве по значению
// //Search in array -- Find by condition
// for(let i = 0; i < workers.length; i++){
//     if(workers[i].profession == prof){
//         user = workers[i];

//         break;
//     }
// }

function findProf(el, i, arr){
    console.log(el, i, arr);

    return el.profession == prof;
}

const user = workers.find(({ profession : p }) => p == prof);

//деструктурирующее присваивание
console.log(user);

function minLength(str){
    return str.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

console.log('Consectetur adipisicing elit delectus tempore', minLength('Consectetur adipisicing elit delectus tempore'));


console.log('At dolorum necessitatibus accusamus nobis', minLength('At dolorum necessitatibus accusamus nobis'));

//!FOREACH
console.clear();

// for(let i = 0; i < workers.length; i++){
//     console.log(`${ i + 1 } ${ workers[i].name } : ${ workers[i].profession }`);
// }

function show(el, i, arr){
    console.log(`${ i + 1 } ${ el.name } : ${ el.profession }`);
}

workers.forEach(show);


//!REDUCE
console.clear();

//transactions = [ -100, -13, -5, 1000, -44, -123.25, 1.235];

let sum = 0;
// for(let i = 0; i < transactions.length; i++){
//     sum += transactions[i];
// }

function calcSum(acc, el, i, arr){
    console.log(acc, el, i)

    return acc + el;
}

function statFunc(acc, el){
    if(el > 0){
        acc.in.count++;
        acc.in.sum += el;
    }else{
        acc.out.count++;
        acc.out.sum += el;
    }

    return acc;
}

// sum = transactions.reduce((acc, el) => acc + el);
sum = transactions.reduce(calcSum, 0);

const stat = transactions.reduce(statFunc, 
    { 
        in : {
            count : 0,
            sum : 0
        },
        out : {
            count : 0,
            sum : 0
        }
    });

console.log(stat);
console.log(sum);