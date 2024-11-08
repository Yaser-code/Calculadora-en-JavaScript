var primerNumero;
var segundoNumero;
var operador = "";
var casilla = "";
function num1(){
    casilla += "1";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num2(){
    casilla += "2";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num3(){
    casilla += "3";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num4(){
    casilla += "4";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num5(){
    casilla += "5";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num6(){
    casilla += "6";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num7(){
    casilla += "7";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num8(){
    casilla += "8";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num9(){
    casilla += "9";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function num0(){
    casilla += "0";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function botonC(){
    casilla = "";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function punto(){
    let texto = document.getElementById("casillaNumeros").value;
    if(!texto.includes(".")){
        casilla += ".";
    }
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function operadorSuma(){
    primerNumero = parseFloat(document.getElementById("casillaNumeros").value);
    operador = "+";
    casilla = "";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function operadorResta(){
    primerNumero = parseFloat(document.getElementById("casillaNumeros").value);
    operador = "-";
    casilla = "";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function operadorDivision(){
    primerNumero = parseFloat(document.getElementById("casillaNumeros").value);
    operador = "/";
    casilla = "";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function operadorMulti(){
    primerNumero = parseFloat(document.getElementById("casillaNumeros").value);
    operador = "x";
    casilla = "";
    document.getElementById("casillaNumeros").innerHTML = casilla;
}
function borrarUltimoCaracter(){
    let texto = document.getElementById("casillaNumeros").value;
    let newText = texto.slice(0, texto.length - 1);
    if(operador == ""){
        primerNumero = newText;
    }else{
        segundoNumero = newText;
    }
    document.getElementById("casillaNumeros").innerHTML = newText;
}
function resultadoOperacion(){
    let resultado;
    segundoNumero = parseFloat(document.getElementById("casillaNumeros").value);
    if(primerNumero != ""){
        switch(operador.charAt(0)){
            case '+':
                resultado = primerNumero + segundoNumero;
                break;
            case '-':
                resultado = primerNumero - segundoNumero;
                break;
            case 'x':
                resultado = primerNumero * segundoNumero;
                break;
            case '/':
                if(primerNumero != 0){
                    resultado = primerNumero / segundoNumero;
                }else{
                    resultado = "No se puede calcular";
                }
                break;
            default:
                resultado = "";
                break;
        }
    }else{
        resultado = ducument.getElementById("casillaNumeros").value;
    }
    document.getElementById("casillaNumeros").innerHTML = resultado;
    primerNumero = NaN;
    segundoNumero = NaN;
    operador = "";
}