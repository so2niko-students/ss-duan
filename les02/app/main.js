/*
если(условие[логический тип]){
    действия, если все ДА
    действия, если все ДА
    действия, если все ДА
    действия, если все ДА
    действия, если все ДА
}иначе{
    действия, если НЕТ
    действия, если НЕТ
    действия, если НЕТ
    действия, если НЕТ
    действия, если НЕТ
}


если(условие[логический тип]){
    действия, если все ДА
    действия, если все ДА
    действия, если все ДА
    действия, если все ДА
}

если(условие[логический тип])
    действие, если все ДА(только 1 строка)

если(условие[логический тип]) действие, если все ДА(только 1 строка)


если(условие[логический тип]) действие, если все ДА(только 1 строка) иначе действия, если НЕТ
if(name === 'Nick') console.log('Hello', name) else console.log('Who are you?');


условие ? действие, если все ДА : действие, если все НЕТ
name === 'Nick' ? console.log('Hello', name) : console.log('Who are you?');

*/

//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

//== равенство

// >=   <=   !=   >   <  

console.log('22' == 22);
console.log('22' === 22);

function quiz(){
    const name = prompt('Enter your name', 'Nick');
    const job = prompt('Enter your job', 'Mentor');
    const company = prompt('Enter your company', 'SoftServe');
    const nat = prompt('Enter your nationality', 'UA');


    if(nat == 'UA'){
        if(job == 'Mentor' || job == 'Teacher' || job == 'Science' || job == 'Curator'){
            console.log(`Hello, ${ name }.`);
        }else{
            console.log('Sorry, we work only with science specialists')
        }
    }else{
        console.log('Sorry, we can not work with foreign respondents')
    }

    return 'quiz is done';
}

// const mark = prompt('Enter your mark', 4);
// let depo = 1000;


// if(mark == 5){
//     depo += 1024;
// }else{
//     if(mark == 4){
//         depo += 0;
//     }else{
//         if(mark == 3){
//             depo -= 700;
//         }else{
//             if(mark == 2){
//                 depo -= 1400;
//             }else{
//                 console.log('Sorry, but you are failed!!!');
//             }
//         }
//     }
// }

// let isFail = true;

// if(mark == 5){
//     depo += 1024;
//     isFail = false;
// }

// if(mark == 4){
//     depo += 0;
//     isFail = false;
// }

// if(mark == 3){
//     depo -= 700;
//     isFail = false;
// }

// if(mark == 2){
//     depo -= 1400;
//     isFail = false;
// }

// if(isFail){
//     console.log('Sorry, but you are failed!!!');
// }

// switch(mark){
//     case 5: {
//         depo += 1024;
//         break;
//     }
//     case 4: {
//         depo += 0;
//         break;
//     }
//     case 3: {
//         depo -= 700;
//         break;
//     }
//     case 2: {
//         depo -= 1400;
//         break;
//     }
//     default: {
//         console.log('Sorry, but you are failed!!!');
//     }
// }

// console.log(depo);

//!----------------------------------------------
//1 - скидка 5%
//2-3 скидка 10%
//4 - скидка 15%
//5-6 - скидка 30%

const count = Math.floor(Math.random() * 6 + 1); //1 - 6
let discount = 0;
const price = 1000;


switch(count){
    case 1:{
        discount = .95;
        break;
    }
    case 2:
    case 3:{
        discount = .9;
        break;
    }
    case 4:{
        discount = .85;
        break;
    }
    case 5:
    case 6:{
        discount = .7;
        break;
    }
}

const sum = price * count * discount;
const discountView = `${ Math.round((1 - discount) * 100) }%`;

console.log(`Sum of ${ count } products is: ${ sum }. Discount is: ${ discountView }`);

const mark = Math.floor(Math.random() * 100 + 1); //1 - 100
let namedMark = '';

if(mark >= 90 && mark <= 100){
    namedMark = 'A';
}

if(mark >= 75 && mark < 90){
    namedMark = 'B';
}


if(mark >= 60 && mark < 75){
    namedMark = 'C';
}


if(mark < 60){
    namedMark = 'D';
}

switch(true){
    case mark >= 90 && mark <= 100 :{
        namedMark = 'A';
        break;
    }
    case mark >= 75 && mark < 90: {
        namedMark = 'B';
        break;
    }
    case mark >= 60 && mark < 75 :{
        namedMark = 'C';
        break;
    }
    case mark < 60 :{
        namedMark = 'D';
        break;
    }
}
     
//Неявное преобразование в число
const three = '3';

console.log(+three);
console.log(1 * three);
console.log(three / 1);
console.log(three ** 1);
console.log(three % Infinity);


