let teste = fetch('./teste.json');

teste.then(resolve =>{
  console.log(resolve)
  return resolve.json();
})
.then(resposta =>{
  console.log(resposta)
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerHTML = resposta[0].Anime +" "+ resposta[0].Episodio +" "+ resposta[0].Status + "<br>" +
  resposta[1].Anime +" "+ resposta[1].Episodio +" "+ resposta[1].Status + "<br>" +
  resposta[2].Anime +" "+ resposta[2].Episodio +" "+ resposta[2].Status + "<br>" +
  resposta[3].Anime +" "+ resposta[3].Episodio +" "+ resposta[3].Status;
  console.log(resposta.Anime, resposta.Episodio, resposta.Status)
})

