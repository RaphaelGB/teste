//Funções de resposta certa

function RespostaCertaA() {
    //Alterando o botão A
    document.getElementById("Icon_RespostaA").innerHTML = "<img src='../IMG/Certo.png' alt='Certo' id='Certo'>";
    document.getElementById("RespostaA").style.background = "#FFFFFF";
    document.getElementById("RespostaA").style.color = "#930009";
    document.getElementById("RespostaA").style.border = "solid 3px #930009";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaB").disabled = true;
    document.getElementById("RespostaC").disabled = true;
    document.getElementById("RespostaD").disabled = true;
}

function RespostaCertaB() {
    //Alterando o botão B
    document.getElementById("Icon_RespostaB").innerHTML = "<img src='../IMG/Certo.png' alt='Certo' id='Certo'>";
    document.getElementById("RespostaB").style.background = "#FFFFFF";
    document.getElementById("RespostaB").style.color = "#930009";
    document.getElementById("RespostaB").style.border = "solid 3px #930009";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaA").disabled = true;
    document.getElementById("RespostaC").disabled = true;
    document.getElementById("RespostaD").disabled = true;
}

function RespostaCertaC() {
    //Alterando o botão C
    document.getElementById("Icon_RespostaC").innerHTML = "<img src='../IMG/Certo.png' alt='Certo' id='Certo'>";
    document.getElementById("RespostaC").style.background = "#FFFFFF";
    document.getElementById("RespostaC").style.color = "#930009";
    document.getElementById("RespostaC").style.border = "solid 3px #930009";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaA").disabled = true;
    document.getElementById("RespostaB").disabled = true;
    document.getElementById("RespostaD").disabled = true;
}

function RespostaCertaD() {
    //Alterando o botão B
    document.getElementById("Icon_RespostaD").innerHTML = "<img src='../IMG/Certo.png' alt='Certo' id='Certo'>";
    document.getElementById("RespostaD").style.background = "#FFFFFF";
    document.getElementById("RespostaD").style.color = "#930009";
    document.getElementById("RespostaD").style.border = "solid 3px #930009";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaA").disabled = true;
    document.getElementById("RespostaB").disabled = true;
    document.getElementById("RespostaC").disabled = true;
}

//Funções de resposta errada
function RespostaErradaA() {
    document.getElementById("Icon_RespostaA").innerHTML = "<img src='../IMG/Errado.png' alt='Errado' id='Errado'>";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaB").disabled = true;
    document.getElementById("RespostaC").disabled = true;
    document.getElementById("RespostaD").disabled = true;

    //Alterando o botão C 
    document.getElementById("RespostaC").style.background = "#474747";
    document.getElementById("RespostaC").style.border = "4px solid #2828280";

    //O botão B
    document.getElementById("RespostaB").style.background = "#474747";
    document.getElementById("RespostaB").style.border = "4px solid #2828280";

    //O botão D 
    document.getElementById("RespostaD").style.background = "#474747";
    document.getElementById("RespostaD").style.border = "4px solid #2828280";

    //Colocando o botão de retorno
    document.getElementById("Return").innerHTML = "<div class='row' id='Row_Return'> <center> <button class='m-3 text-center Options' id='Button_Return'> <a href='/index.html' id='Link_Return'> Voltar </a></button> </center> </div> "

}
function RespostaErradaC() {

    //Colocando o ícone de erro
    document.getElementById("Icon_RespostaC").innerHTML = "<img src='../IMG/Errado.png' alt='Errado' id='Errado'>";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaA").disabled = true;
    document.getElementById("RespostaB").disabled = true;
    document.getElementById("RespostaD").disabled = true;

    //Alterando o botão A
    document.getElementById("RespostaA").style.background = "#474747";
    document.getElementById("RespostaA").style.border = "4px solid #2828280";

    //O botão B
    document.getElementById("RespostaB").style.background = "#474747";
    document.getElementById("RespostaB").style.border = "4px solid #2828280";

    //O botão D
    document.getElementById("RespostaD").style.background = "#474747";
    document.getElementById("RespostaD").style.border = "4px solid #2828280";

    //Colocando o botão de retorno
    document.getElementById("Return").innerHTML = "<div class='row' id='Row_Return'> <center> <button class='m-3 text-center Options' id='Button_Return'> <a href='/index.html' id='Link_Return'> Voltar </a></button> </center> </div> "

}
function RespostaErradaD() {

    //Colocando o ícone de erro
    document.getElementById("Icon_RespostaD").innerHTML = "<img src='../IMG/Errado.png' alt='Errado' id='Errado'>";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaA").disabled = true;
    document.getElementById("RespostaB").disabled = true;
    document.getElementById("RespostaC").disabled = true;

    //Alterando o botão A
    document.getElementById("RespostaA").style.background = "#474747";
    document.getElementById("RespostaA").style.border = "4px solid #2828280";

    //O botão B
    document.getElementById("RespostaB").style.background = "#474747";
    document.getElementById("RespostaB").style.border = "4px solid #2828280";

    //O botão C
    document.getElementById("RespostaC").style.background = "#474747";
    document.getElementById("RespostaC").style.border = "4px solid #2828280";


    //Colocando o botão de retorno
    document.getElementById("Return").innerHTML = "<div class='row' id='Row_Return'> <center> <button class='m-3 text-center Options' id='Button_Return'> <a href='/index.html' id='Link_Return'> Voltar </a></button> </center> </div> "

}


function RespostaErradaB() {
    document.getElementById("Icon_RespostaB").innerHTML = "<img src='../IMG/Errado.png' alt='Errado' id='Errado'>";

    //Desabilitando os botões que não foram clicados
    document.getElementById("RespostaA").disabled = true;
    document.getElementById("RespostaC").disabled = true;
    document.getElementById("RespostaD").disabled = true;

    //O botão A
    document.getElementById("RespostaA").style.background = "#474747";
    document.getElementById("RespostaA").style.border = "4px solid #2828280";

    //Alterando o botão C 
    document.getElementById("RespostaC").style.background = "#474747";
    document.getElementById("RespostaC").style.border = "4px solid #2828280";

    //O botão D 
    document.getElementById("RespostaD").style.background = "#474747";
    document.getElementById("RespostaD").style.border = "4px solid #2828280";

    //Colocando o botão de retorno
    document.getElementById("Return").innerHTML = "<div class='row' id='Row_Return'> <center> <button class='m-3 text-center Options' id='Button_Return'> <a href='/index.html' id='Link_Return'> Voltar </a></button> </center> </div> "
}