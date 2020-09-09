function number(nb, precision){
    return parseFloat("".concat(nb).split(".").map((piece, index)=>(index > 0)? Math.round(parseFloat("0.".concat(piece))*Math.pow(10,precision||2)):piece).join(".")) || 0;
}
