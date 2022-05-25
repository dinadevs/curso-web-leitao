function ladoDoTriangulo(a, b, c) {
    if(a == b && b == c) {
        return('Equilátero') 
    } else if (a !== b && b !== c) {
        return('Escaleno')
    } else {
        return('Isósceles')
    }
}

let retornoDaFunc = ladoDoTriangulo(30,8,10);
console.log("ret = " + retornoDaFunc);
