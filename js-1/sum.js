function sum(num){
    return (num*(num+1))/2;
}
let num = 10;
num > 0 && Number.isInteger(num) ? console.log(sum(10)) : console.log("el numero tiene que ser positivo");