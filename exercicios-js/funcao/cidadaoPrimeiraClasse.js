// função em JS  é First-Class Object (Citizens) 
// Higther-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em atributo  de objeto
const obj =  {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passa função param 
function run(fun) {
    fun() 
}
run(function () { console.log('Executando...') })

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

