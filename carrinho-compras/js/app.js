let listaDeCompras = [];
function adicionar() {
let itensNoCarrinho = document.querySelector("#produto").value;
let itensNoValor = itensNoCarrinho.match(/\d+/); 
let carrinho = document.querySelector("#texto-dentro-do-carrinho");
let valorTotal = document.querySelector("#valor-total");
let quantidade = document.querySelector(".quantidade-input").value;

 let itens = quantidade +"x" + " " + itensNoCarrinho;
valorTotal.textContent = itensNoValor * quantidade ;
listaDeCompras.push(itens)
carrinho.innerHTML = listaDeCompras.map(item => `<ul>${item}</ul>`).join('');
if (quantidade == 0){
    alert("Adicione uma quantidade válida");
    listaDeCompras = [];
    carrinho.innerHTML = ("Sem produtos adicionados");
}
}

function limpar(){
    let carrinho = document.querySelector("#texto-dentro-do-carrinho");
  let valorTotal = document.querySelector("#valor-total");
  valorTotal.textContent = ("0");
   carrinho.innerHTML = ("Sem produtos adicionados");
   listaDeCompras = []
}

 