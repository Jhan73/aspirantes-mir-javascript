function bim(weight,heigth){
    return (weight/(heigth**2));
}
let weight = 65;
let heigth = 1.8;
if(weight > 0 && heigth > 0){
    console.log(bim(weight,heigth));
}else{
    console.log("los valores no son válidos")
}
