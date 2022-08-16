window.addEventListener('load', function(){


    async function doFetchAsync(){

        var requestURL = 'https://opentdb.com/api.php?amount=30&category=18'

        var request = new XMLHttpRequest();

        request.open('GET', requestURL);

        request.responseType = 'json';

        request.send();

        request.onload = function() {

            var dados = request.response;

            mostraDados(dados);
          }

    }

    doFetchAsync()

})

function mostraDados(dados){

    var body = document.querySelector("body")

    const questions = dados.results;
  
questions.forEach(questao => {


  const { question } = questao;
  
   
   
        var div = document.createElement("div")
        var pergunta = document.createElement("h4")

        pergunta.textContent = question;

        div.appendChild(pergunta);
        body.appendChild(div);
        
    });
 }