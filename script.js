// Estrutura de repetição

for(let i=0; i<10; i++){
    //console.log(i);
}

//while

let f = 0;
while (f<10) {
    //console.log(f)
    f++
    
}

let w = 0;
// do while
do{
    //console.log(w);
    w++;
}
while (w<5);

//funções

function Ola(nome){
    //``(sring literal ou template string ${} chama a variavek)
    console.log(`Seja bem vindo a ${nome}`)
    //alert(`Seja bem vindo a ${nome}`)
    document.write(`Seja bem vindo a ${nome}`)
}

//executando a função Ola passando o valor
Ola("fiap")

// Arrow Function

const hello=()=>(console.log("Função arrow function"))

hello()

//ARRAY[], OBJETO {}, METODOS ()

let jogadores = [
    {nome:"Hugo", idade:17},
    {nome:"Zezinho", idade:18},
    {nome:"Luizinho", idade: 19}
]

let listarJogadores = jogadores.map(function(item){
    return item.nome
   
})

console.log(listarJogadores)
