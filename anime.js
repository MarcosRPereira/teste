let teste = fetch('./lista.txt');

teste.then(resolve =>{
  console.log(resolve)
  return resolve.text()
})
.then(resposta =>{
  console.log(resposta)
})

