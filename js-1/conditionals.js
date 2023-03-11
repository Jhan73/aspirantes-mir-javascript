function calculateColor(num){
    let color;
    if (num === 1) {
        color = "black";
    } else if (num ===2){
        color = "white";
    } else if (num === 3) {
        color = "blue";
    } else {
        color= "green";
    }
    return "El color es " + color;
}
let num = 2.3;
Number.isInteger(num)&&num > 0 ? console.log(calculateColor(2)):console.log("ingrese un numero natural");
