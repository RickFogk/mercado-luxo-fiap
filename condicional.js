window.onload = function()
{
    var objTxtNota = document.getElementById("nota");
    var objDivResultado = document.getElementById("resultado");
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function()
    {
        var nota = parseFloat(objTxtNota.value);
        if(nota >= 7)
        {
            objDivResultado.innerHTML = "Aprovado";
        }
        else
        {
            objDivResultado.innerHTML = "Reprovado";
        }
    }
}