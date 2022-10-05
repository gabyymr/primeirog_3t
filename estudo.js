function mostraLista(){
    document.write("Tamanho da lista: " + lista.length + "<br>")
    for(let i = 0; i < lista.length; i++){
        document.write ("Planeta " + lista[i] + "<br>");
    }
}
function repete(){
    for(let i = 1; i <= 10; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(i +" x  " + j + " = " +(i*j)+"<br>");
        }
    }
} 
