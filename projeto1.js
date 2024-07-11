function mudarCor() {
    const cor = ["black", "blue", "red", "yellow", "orange", "gray", "green", "purpple", "brown", "white"];
    let cor_selecao = cor[Math.floor(Math.random() * 10)];
    let bodyHTML = document.getElementById("conteudo");
    let cor_h1 = document.getElementById("cor");
    
    document.getElementById("cor").innerHTML = `<h1>Background color: ${cor_selecao}`;
    bodyHTML.style.backgroundColor = cor_selecao;
    //console.log(cor_selecao);
    
    if (cor_selecao == "black") {
        cor_h1.style.color = "white";
    } else {
        cor_h1.style.color = "black";
    }
}