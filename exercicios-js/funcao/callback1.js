const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprirmir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprirmir)
fabricantes.forEach(fabricantes => console.log(fabricantes))