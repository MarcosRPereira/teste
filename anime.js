let teste = fetch('./lista.txt');

teste.then(resolve =>{
  console.log(resolve)
  return resolve.text()
})
.then(resposta =>{
  const conteudo = document.querySelector('.conteudo');
conteudo.innerHTML = resposta;
  console.log(resposta)
})

