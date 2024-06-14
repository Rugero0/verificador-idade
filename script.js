function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let gênero = "";
    let img = document.createElement("img");
    img.classList.add("imagem");
    console.log("Criei elementos");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "foto-bebe-menino.jpg");
      } else if (idade < 23) {
        //jovem
        img.setAttribute("src", "foto-jovem-homem.jpg");
      } else if (idade < 59) {
        //adulto
        img.setAttribute("src", "foto-adulto-homem.jpg");
      } else {
        //idoso
        img.setAttribute("src", "foto-idoso-homem.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "foto-bebe-menina.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "foto-jovem-mulher.webp");
      } else if (idade < 59) {
        //adulto
        img.setAttribute("src", "foto-adulto-mulher.jpg");
      } else {
        //idoso
        img.setAttribute("src", "foto-idoso-mulher.jpg");
      }
    } else {
      gênero = "Não informado";
    }
    res.style.textAlign = "center";
    res.innerHTML = `Seu gênero é: ${gênero} e sua idade é: ${idade}.`;
    res.appendChild(img);
  }
}
