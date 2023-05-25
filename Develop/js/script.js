var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startQuiz);
let currentQuestionIndex = 0
let timer = 60
let score = 0

let quizQuestion = [
    {question: 'What is an array?',
    options: ['option 1', 'option2','option3', 'option4'],
    answer: 'option 1'
    },
    {question: 'What is a boolean?',
    options: ['option 1', 'option2','option3', 'option4'],
    answer: 'option 1'
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

function displayQuestion() {
    
    let question = quizQuestion[currentQuestionIndex].question
    console.log(question)
}