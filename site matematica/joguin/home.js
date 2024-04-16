const $startgamebutton = document.querySelector(".começo")
const $qc =  document.querySelector(".qc")
const $respostac = document.querySelector(".respostac")
const $qText = document.querySelector(".q")
const $proximo = document.querySelector(".proxima")

$startgamebutton.addEventListener("click", startgame)
$proximo.addEventListener("click",displayNQ)

let currentP = 0
let totalacertado = 0

function startgame(){
    $startgamebutton.classList.add("hide")
    $qc.classList.remove("hide")
    displayNQ()
}

function displayNQ(){
    resetState()
    if(questions.length === currentP){
        return finishgame()
    }
    $qText.textContent = questions[currentP].question
    questions[currentP].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text 
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        $respostac.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    while($respostac.firstChild){
        $respostac.removeChild($respostac.firstChild)
    }
    document.body.removeAttribute("class")
    $proximo.classList.add("hide")
}

function selectAnswer(event){
    const answerCli = event.target

    if(answerCli.dataset.correct){
        document.body.classList.add("correct")
        totalacertado++
    }
    else{
        document.body.classList.add("incorrect")
    }
    $proximo.classList.remove("hide")
    currentP++
}

function finishgame(){
 const totalq =  questions.length
 const perfomance = Math.floor(totalacertado * 100 / totalq)

 let msg = ""

 switch(true){
    case(perfomance > 90):
     msg = "vc ainda é corno manso mas sabe matematica"
     break

    default:
        msg = "alem de corno é burro "
 }
 
 $qc.innerHTML = 
` <p class="final"> vc acertou ${totalacertado} de ${totalq} questoes
 <span>Resultado: ${msg}</span>
 </p>
 <button onclick=window.location.reload() class="button">
 refazer teste
 </button>
 <button class="button"> <a href="niveis.html"> 
 Ver niveis </a>
 </button>
`
}

const questions = [
    {
        question: "fala ai otario quanto é 1+1",
        answers:[
            { text: "7", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "2", correct: true}
        ]
    },
    {
        question: "fala ai corno quanto é 3+3",
        answers:[
            { text: "7", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "6", correct: true}
        ]
    }, 
]