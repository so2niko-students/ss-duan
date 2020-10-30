function sortByNum(str) {
    const arr = str.split(' ');
    return str.split(' ').map((el, i) => arr.find(item => item.includes(i + 1))).join(' ');
}


const strTest1 = 'is2 Thi1s T4est 3a';
const strTest1True = 'Thi1s is2 3a T4est';
const strTest2 = '4of Fo1r pe6ople g3ood th5e the2';
const strTest2True = 'Fo1r the2 g3ood 4of th5e pe6ople';
const strTest3 = '';

console.log(sortByNum(strTest1) === strTest1True, strTest1, sortByNum(strTest1));
console.log(sortByNum(strTest2) === strTest2True, strTest2, sortByNum(strTest2));
console.log(sortByNum(strTest3) === strTest3, strTest3, sortByNum(strTest3));