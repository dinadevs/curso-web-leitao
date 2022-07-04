// Desenvolva uma função JavaScript para que ela receba um valor como 
//0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
function conversao(a) {
    var dinheiro = a.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return dinheiro;
}

console.log(conversao(0.30000000000000004));