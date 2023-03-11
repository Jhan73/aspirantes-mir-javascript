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
