var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startQuiz);
let wrongAnswerContainer = document.getElementById('wrong-answer')
let currentQuestionIndex = 0
let timer = 60
let score = 0

let quizQuestion = [
    {question: 'What is an array?',
    options: ['A string', 'option2','option3', 'option4'],
    answer: 'A string'
    },
    {question: 'What is a boolean?',
    options: ['True/False', 'option2','option3', 'option4'],
    answer: 'True/False'
    },
    {question: 'Do you need parantheses or brackets for an array?',
    options: ['option 1', 'option2','option3', 'option4'],
    answer: 'option 1'
    },
    {question: 'What are for loops?',
    options: ['option 1', 'option2','option3', 'option4'],
    answer: 'option 1'
    },]

function startQuiz() {
    startBtn.style.display = 'none';
    displayQuestion();
    
}
let questionContainer = document.getElementById('question-container')
function endQuiz() {
    questionContainer.innerHTML = 'Thanks for Playing you got ' + score + ' right!'
    wrongAnswerContainer.innerHTML = ""
}

function displayQuestion() {
    if (currentQuestionIndex === quizQuestion.length) {
        endQuiz();
        return
    }
    let question = quizQuestion[currentQuestionIndex].question
    let questionEl = document.createElement('h2')
   // This is how to grab from object quizQuestions, and display it onto the page
    questionContainer.innerHTML = ''
    questionEl.textContent = question
    questionContainer.appendChild(questionEl)

    let options = quizQuestion[currentQuestionIndex].options
   

    for (i=0; i < options.length; i++) {
        let optionsEl = document.createElement('button')
        optionsEl.addEventListener('click', selectOption)    // add this back after defining selectOption
        optionsEl.textContent = options[i]
        questionEl.appendChild(optionsEl)
    }
    currentQuestionIndex ++
   
  }

function selectOption(event) {
        let selectedOption = event.target.textContent
        let wrongAnswerEl = document.createElement('div')
        let answer = quizQuestion[currentQuestionIndex - 1].answer
        console.log(answer)
        if (selectedOption === answer) {
        wrongAnswerContainer.innerHTML = ""
        score++
        displayQuestion()
    }
    if (selectedOption !== answer) {
        wrongAnswerContainer.innerHTML = ""
        wrongAnswerEl = document.createElement('div')
        wrongAnswerEl.textContent = "Incorrect"
        wrongAnswerContainer.appendChild(wrongAnswerEl)
        displayQuestion()
    }
    
}
