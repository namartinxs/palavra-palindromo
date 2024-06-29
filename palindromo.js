function palavraPalindromo(){

    var palavra = document.getElementById('caixa-texto').value;
    var separadora = palavra.split("");
    var inversora = separadora.reverse();
    inversora = inversora.join("");

    let comparadora = palavra == inversora ? `A palavra ${palavra} é um palindromo` : `A palavra ${palavra} não é um palindromo`;
    let texto = document.querySelector('p');
    
    
    if(palavra == ""){
        texto.innerHTML = 'Por favor,insira uma palavra antes de verificar'
    }else{
       texto.innerHTML = comparadora
    }

}


function limpar(){
    var palavra = document.getElementById('caixa-texto').value = ""
}