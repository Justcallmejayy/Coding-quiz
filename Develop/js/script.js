var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startQuiz);
let wrongAnswerContainer = document.getElementById('wrong-answer')
let timeContainer = document.getElementById('timeKeeper')
let highscoresTextContainer = document.getElementById('highscores_text')
let highscoresContainer = document.querySelector('.highscores')
let submitBtn = document.getElementById('submitBtn')
let playAgainBtn = document.getElementById('play-again')
let highscoresList = document.getElementById('highscores-list')
let clickHighscores = document.getElementById('highscores')
let interval;
let currentQuestionIndex = 0
let timer = 60
let score = 0 


let quizQuestion = [
    {question: 'What do you type first before declaring a variable?',
    options: ['For/While/If', 'Let/Var/Const','If/For/Var', 'It/Be/Yes'],
    answer: 'Let/Var/Const'
    },
    {question: 'What is a boolean?',
    options: ['True/False', 'On/Off','Left/Right', 'Up/Down'],
    answer: 'True/False'
    },
    {question: 'How do you call a function?',
    options: ['[]', '{}','()', '<>'],
    answer: '()'
    },
    {question: 'What is the API name for a timer?',
    options: ['setInterval[]', 'setInterval()', 'setTimer[]', 'startTimer()'],
    answer: 'setInterval()'
    },]


function startTimer() {
    interval = setInterval(function() {
        timer--;
        timeContainer.textContent = 'Timer:' + timer
        if (timer === 0) {
            endQuiz(); 
        } 
         }, 1000) 
        
}

    
    function startQuiz() {
    startBtn.style.display = 'none';
    submitBtn.className = 'hide'
    displayQuestion();
    startTimer();
    
    
}
    let questionContainer = document.getElementById('question-container')
    function endQuiz() {
    questionContainer.innerHTML = 'Thanks for playing you got ' + score + ' right' + ' in '+ timer + ' seconds!' + ' Write your intials and add to the highscore list!'
    questionContainer.classList.add('endGame')
    wrongAnswerContainer.innerHTML = ""
    clearInterval(interval);
    highscoresContainer.classList.remove('highscores')
    highscoresContainer.classList.add('displayHighscores') 
    playAgainBtn.classList.remove('hide')
    highscoresTextContainer.classList.remove('hide')
    submitBtn.classList.remove('hide')

  }

    function displayQuestion() {
    if (currentQuestionIndex === quizQuestion.length) {
        endQuiz();
        return
    }
    let question = quizQuestion[currentQuestionIndex].question
    let questionEl = document.createElement('div')
    questionEl.classList.add('h2')
   // This is how to grab from object quizQuestions, and display it onto the page
    questionContainer.innerHTML = ''
    questionEl.textContent = question
    questionContainer.appendChild(questionEl)

    let options = quizQuestion[currentQuestionIndex].options
   

    for (i=0; i < options.length; i++) {
        let optionsEl = document.createElement('button')
        optionsEl.classList.add('optionBtn')
        optionsEl.addEventListener('click', selectOption)    // add this back after defining selectOption
        optionsEl.textContent = options[i]
        questionContainer.appendChild(optionsEl)
    }
    currentQuestionIndex ++
   
  }

function selectOption(event) {
        let selectedOption = event.target.textContent
        let wrongAnswerEl = document.createElement('div')
        let answer = quizQuestion[currentQuestionIndex - 1].answer
        if (selectedOption === answer) {
        wrongAnswerContainer.innerHTML = ""
        score++
        displayQuestion()
    }
    if (selectedOption !== answer) {
        wrongAnswerContainer.innerHTML = ""
        wrongAnswerEl = document.createElement('div')
        wrongAnswerEl.classList.add('incorrect')
        wrongAnswerEl.textContent = "Incorrect"
        wrongAnswerContainer.appendChild(wrongAnswerEl)
        displayQuestion()
    }
    
}

function displayHighscores() {
    let intials = highscoresTextContainer.value
    let highscores = JSON.parse(localStorage.getItem('highscores')) || []
    let userScores = {
      initals: intials,
      score: score,
      time: timer
    }
      highscores.push(userScores)
      localStorage.setItem('highscores',JSON.stringify(highscores))
      highscoresTextContainer.value = ''
      highscoresTextContainer.className = ' hide'
      submitBtn.className = 'hide'
      questionContainer.innerHTML = ''
      questionContainer.classList.remove('endGame')
    
    //  if (highscores.length > 0) {
      highscoresList.innerHTML = '';
      for (i = 0; i < highscores.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${highscores[i].initals}: ${highscores[i].score} ${highscores[i].time}`;
          highscoresList.appendChild(li);
      }
}

submitBtn.addEventListener('click', displayHighscores)

// Make a button that will restart quiz
playAgainBtn.addEventListener('click', function() {
    currentQuestionIndex = 0
    timer = 60
    score = 0
    startQuiz()
    playAgainBtn.className = 'hide'
    highscoresList.textContent = ''
    highscoresTextContainer.value = '';
    highscoresTextContainer.className = 'hide';
    questionContainer.classList.remove('endGame')
})

