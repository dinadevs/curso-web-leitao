function criarProduto (nome, preco) {
    const desconto = 0.1;
    return {
        nome,
        preco,
        desconto: desconto
    }
}

console.log(criarProduto("Cubo", "45"))

