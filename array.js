// Array
var lista = [
                "Maçã",
                "Pera",
                "Laranja",
                "Melância"
]

//console.log(lista[1]) //Pega um item especifico da lista, no caso pera já que maçã é representado pelo número 0

lista.push("uva") //list.push("uva") adicona um elemento a um array mesmo estando de fora.
lista.pop() //list.pop() retira o ultimo item listado no array no caso "uva"

console.log(lista.toString())
console.log(lista.join(" - ")) //Vai adicionar um espaçamento personalizado a lista ou array.

//console.log(lista.lenght) //Vai mostar através de números quantos items tem na lista
//console.log(lista.reverse()) //Vai mostrar a lista ao contrário
 
// Dicionário/Object

/*var fruta = {                   //Dicionário ou object
    nome: "Melão", //Separado por virgula assim como no array.
    cor: "Amarelo"
}*/

var fruta = [
    {
        nome: "Melão",
        cor: "Amarelo"
    },                  //Pode conter diversos objects dentro de um array e devem ser separados por vírgula.

    {
        nome: "Morango",
        cor: "Vermelho"
    }
]

console.log(fruta)
alert(fruta[1].cor) //Vai mostrar a string "Vermelho"