function ipsBetween(from, to){
    const between = ipsVal(to) - ipsVal(from);
    return between === 0? 1: between;
}

function ipsVal(ip){
    const multi = [256 ** 3, 256 ** 2, 256, 1];
    const val = ip.split('.').reduce((red, el, i) => red  + el * multi[i], 0);
    return val;
}


console.log('"10.0.0.0", "10.0.0.50"', ipsBetween("10.0.0.0", "10.0.0.50")  ===   50);
console.log('"10.0.0.0", "10.0.1.0"', ipsBetween("10.0.0.0", "10.0.1.0")   ===  256);
console.log('"20.0.0.10", "20.0.1.0"', ipsBetween("20.0.0.10", "20.0.1.0")  ===  246);
console.log('"20.0.0.10", "20.0.0.10"', ipsBetween("20.0.0.10", "20.0.0.10")  ===  1);