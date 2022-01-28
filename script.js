/*let nomes = ["Nicolas", "Vanessa", "Samira", "Gabriel", "Debora"]
console.log(nomes[0])
for (let i=0; nomes.length > i; i++){
    console.log(`O mais gostoso do grupo e: ${nomes[0]}`)
}
//arr.reverse
//arr.sort
//arr.unshift -> adiciona um valor no começo da lista

let linguagens = ["PHP","Typescript", "JavaScript"]
console.log(linguagens)

console.log(linguagens.unshift("Python"))

console.log(linguagens)

//arr.push() -> adiciona um valor no final da lista 

let cidades = ["Canoas","Recife","Volta Redonda","Florianópolis"]

console.log(cidades.push("Natal","Itaquaquecetuba","Ouro Preto"))

console.log(cidades)

//arr.shift() -> remove o primeiro valor da lista

console.log(cidades.shift())
console.log(cidades)


//arr.pop() -> remove o último valor da lista

console.log(cidades.pop())
console.log(cidades)


//arr.splice(x,y) -> remove, adiciona ou substitui

/*primeiro parâmetro: é o índice do elemento adicionado, removido ou substituído
segundo parâmetro: é o número dos elementos que vão ser adicionados, removidos ou substituídos
terceiro parâmetro: o elemento a ser adicionado ou substituído


//remover
nomes.splice(0,1)
console.log(nomes)

//adicionar
nomes.splice(0,0,"qualquercoisa")
console.log(nomes)

//substituir 
nomes.splice(1,1,"Izabel")
console.log(nomes)
*/

let nomes = ["Nicolas", "Gabriel", "Samira", "Vanessa", "Lais"]
console.log(nomes)

nomes.unshift("Debora")
console.log(nomes)

nomes.pop("Lais")
console.log(nomes)

nomes.push("Pamela", "Izabel")
console.log(nomes)

nomes.shift("Nicolas")
console.log(nomes)

const numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)

numbers.sort()
console.log(numbers)