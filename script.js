function leiaMais(){ //Criação da função "leiaMais"
    let pontos=document.getElementById("pontos");//Criação da variável "pontos", que se relaciona com o elemento do HTML que possui o Id "pontos"
    let maisTexto=document.getElementById("mais");//Criação da variável "maisTexto", que se relaciona com o elemento do HTML que possui o Id "mais"
    let btnLeiaMais=document.getElementById("btnLeiaMais");//Criação da variável "btnLeiaMais", que se relaciona com o elemento do HTML que possui o Id "btnLeiaMais"

    if (pontos.style.display === "none") {//Criação de estrutura condicional. Se o valor da propriedade "display", no estilo/CSS da variável "pontos", for idêntico a "none" :
        pontos.style.display="inline";//O valor da propriedade "display", no estilo/CSS da variável "pontos", será alterada para "inline";
        maisTexto.style.display="none";//O valor da propriedade "display", no estilo/CSS da "maisTexto", será alterada para "none";
        btnLeiaMais.innerHTML='<i class="fas fa-angle-down"></i>';//Troca o conteúdo da variável "btnLeiaMais" por um trecho de html, do qual forma um ícone. 
    } else {//Caso a condição acima não seja atendida:
        pontos.style.display="none";//O valor da propriedade "display", no estilo/CSS da variável "pontos", será alterada para "none";
        maisTexto.style.display="inline";//O valor da propriedade "display", no estilo/CSS da "maisTexto", será alterada para "inline";
        btnLeiaMais.innerHTML='<i class="fas fa-angle-up"></i>';//Troca o conteúdo da variável "btnLeiaMais" por um trecho de html, do qual forma um ícone. 
    }
}
function leiaMais1(){//Função semelhante a função criada acima. Nesta há apenas a troca do nome das variáveis e os elementos que se refere.
    let pontos1=document.getElementById("pontos1");
    let maisTexto1=document.getElementById("mais1");
    let btnLeiaMais1=document.getElementById("btnLeiaMais1");

    if (pontos1.style.display === "none") {
        pontos1.style.display="inline";
        maisTexto1.style.display="none";
        btnLeiaMais1.innerHTML='<i class="fas fa-angle-down"></i>';
    } else {
        pontos1.style.display="none";
        maisTexto1.style.display="inline";
        btnLeiaMais1.innerHTML='<i class="fas fa-angle-up"></i>';
    }
}