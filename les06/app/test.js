function task1() {
    let entered_num = prompt('Enter a number to get a string representation');
    alert(num_to_str_representation(entered_num));
}
 function num_to_str_representation(entered_num){
    if (entered_num.length<1){
       return 'Sorry, you need to enter number from 1 to 99';
    }

    let tens_and_digits_map = new Map();
    tens_and_digits_map.set('1', 'one');
    tens_and_digits_map.set('2', 'two');
    tens_and_digits_map.set('3', 'three');
    tens_and_digits_map.set('4', 'four');
    tens_and_digits_map.set('5', 'five');
    tens_and_digits_map.set('6', 'six');
    tens_and_digits_map.set('7', 'seven');
    tens_and_digits_map.set('8', 'eight');
    tens_and_digits_map.set('9', 'nine');
     tens_and_digits_map.set('10', 'ten');
     tens_and_digits_map.set('11', 'eleven');
     tens_and_digits_map.set('12', 'twelve');
     tens_and_digits_map.set('13', 'thirteen');
     tens_and_digits_map.set('14', 'fourteen');
     tens_and_digits_map.set('15', 'fifteen');
     tens_and_digits_map.set('16', 'sixteen');
     tens_and_digits_map.set('17', 'seventeen');
     tens_and_digits_map.set('18', 'eighteen');
     tens_and_digits_map.set('19', 'nineteen');
     tens_and_digits_map.set('20', 'twenty');
     tens_and_digits_map.set('30', 'thirty');
     tens_and_digits_map.set('40', 'forty');
     tens_and_digits_map.set('50', 'fifty');
     tens_and_digits_map.set('60', 'sixty');
     tens_and_digits_map.set('70', 'seventy');
     tens_and_digits_map.set('80', 'eighty');
     tens_and_digits_map.set('90', 'ninety');
    return tens_and_digits_map.has(entered_num) ? tens_and_digits_map.get(entered_num)
        : tens_and_digits_map.get(entered_num.split('')[0] + '0') + tens_and_digits_map.get(entered_num.split('')[1]);
}


document.querySelector('.btn_task1').addEventListener('click', task1);