function toque(num){
  document.querySelector(".tela").innerHTML += num;
}
function limpar(){
  document.querySelector (".tela").innerHTML = "";
}
function apagar(){
  let apaga = document.querySelector (".tela").innerHTML;
  document.querySelector (".tela").innerHTML = apaga.substring(0, apaga.length -1);
}
function calcular() {
    let expressao = document.querySelector(".tela").innerHTML;
    try {
        if (expressao.includes('%')) {
            let partes = expressao.split('%');
            let numero = parseFloat(partes[0]); 
            let porcentagem = parseFloat(partes[1]); 
            let resultado = (porcentagem / 100) * numero;
            document.querySelector(".tela").innerHTML = resultado;
        } else {
            document.querySelector(".tela").innerHTML = eval(expressao);
        }
    } catch {
        document.querySelector(".tela").innerHTML = "Erro";
    }
}