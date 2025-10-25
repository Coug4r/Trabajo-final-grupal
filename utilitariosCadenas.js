esMayuscula=function(caracter){
    let asciiCode = caracter.charCodeAt(0);
    let valides;
    if (asciiCode>=65 && asciiCode<=90){
        valides = true;
    }
    else{
        valides = false;
    }
    return valides;
}
esDigito=function(caracter){
    let asciiCode = caracter.charCodeAt(0);
    let valides;
    if (asciiCode>=48 && asciiCode<=57){
        valides = true;
    }
    else{
        valides = false;
    }
    return valides;
}
esGuion=function(caracter){
    let asciiCode = caracter.charCodeAt(0);
    let valides;
    if (asciiCode == 45){
        valides = true;
    }
    else{
        valides = false;
    }
    return valides;
}