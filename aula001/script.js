// em inspecionar, console, vai aparecer essa mensagem
//console.log("estou aqui!")
//variavel guarda um valor temporariamente, espaço na memoria do pc


// no html e pega o elemento pelo id dele, que é o troca-imagem valor
var imagem = document.getElementById("troca-imagem")

// opacity é nivel de transparencia, vai aparecer a imagem de baixo porque a de cima esta com um nivel de transparencia
// so é executada quando é chamada
function trocaImagem(){
    // se a imagem esta tranparente 
    if(imagem.style.opacity == 0){
        // entao mostra ela
        imagem.style.opacity = 1
    // se nao
    }else{
        // deixar a imagem fica tranparente
        imagem.style.opacity = 0
    }
}

//chamando funcao
//trocaImagem()

// chamado de tempo em tempo
// de 4 em 4 segundos ele chama a funcao
setInterval(function(){
    trocaImagem()
},4000);
