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


  const {category, correct_answer, difficulty, incorrect_answers, question, type } = questao;
  
   
   
        var div = document.createElement("div")
        var categoria = document.createElement("h2")
        var dificuldade = document.createElement("h5")
        var pergunta = document.createElement("h4")
        var opcaoCorreta = document.createElement("li")
        var opcaoIncorreta = document.createElement("li")
   
   
       
        
        categoria.textContent = category;
        dificuldade.textContent = difficulty;
        pergunta.textContent = question;
        opcaoCorreta.textContent = correct_answer;
        opcaoIncorreta.textContent = incorrect_answers;
   
   
   
       div.appendChild(categoria);
       div.appendChild(dificuldade);
       div.appendChild(pergunta);
       div.appendChild(opcaoCorreta);
       div.appendChild(opcaoIncorreta);
       body.appendChild(div);
        
    });
 }