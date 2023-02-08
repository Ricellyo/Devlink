// criando minha function
function toggleMode() {
  //criando uma variavel e gurda meu documento dentro
  const html = document.documentElement 
  // verificar se existe(contem) o html na classlist 'light'
  if(html.classList.contains('light')){
     // se conter, remova o light da classlist
     html.classList.remove('light')
  } else{
    // se nao, adicinara o 'light'.
    html.classList.add('light')
  }

  // ----------   OU
  
  // code: html.classList.toggle('light');
  // verifica se tiver ele tira, se nao tiver ele coloca

  // --------------------------------

// vamos trocar as imagens 

// pegando a tag img
  const img = document.querySelector("#profile img")
// substituir a Imagem
  if(html.classList.contains('light')){
  img.setAttribute("src", "./assets/avatar-light.png")
  }else {
  img.setAttribute("src","./assets/avatar.png")
}

  // --- NOTA  --------
  // a classList e um objeto que contem propriedades
  // contains -remove - add ...

  //document - e  a representação do documento(pagina web).
  // .documentElement eu acesso meu "html"

}