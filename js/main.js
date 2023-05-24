
// Массив объектов с викториной
const questionsList = [
   {
      question: 'The largest volcano in the Solar System is called "Mount Olympus". Where is he located?',
      answer: ['Jupiter' , 'Earth' , 'Venus' , 'Mars'],
      correct : 4,
   },
   {
      question: 'Which planet is closest to the Sun?',
      answer: ['Earth', 'Venus', 'Mercury', 'Neptune'],
      correct : 3,
   },
   {
      question: 'What does the Sun mainly consist of?',
      answer: ['Liquid lava', 'Molten metal', 'Gas' , 'Stone'],
      correct : 3,
   },
   {
      question: 'Which of the options best describes the atmosphere surrounding Venus?',
      answer: ['Bright and sunny', 'Cold and snowy', 'Cold and wet', 'Hot and poisonous'],
      correct : 4,
   },
   {
      question: 'Which of these planets is the smallest?',
      answer: ['Jupiter', 'Uranus' , 'Earth','Mercury'],
      correct : 4,
   },
   {
      question: 'Which two planets rotate in the opposite direction from the others?',
      answer: ['Uranus and Venus' , 'Venus and Pluto',  'Mercury and Jupiter', 'Earth and Neptune'],
      correct : 1,
   },
   {
      question: 'Where is the asteroid belt located? Between ...',
      answer: ['Jupiter and Saturn' , 'Earth and Venus' , 'Mars and Jupiter', 'Earth and Mars'],
      correct : 3,
   },
]

// Находим элементы на странице
const title = document.querySelector('.quiz__title')
const answerList = document.querySelector('.quiz__list')
const btn = document.querySelector('.quiz__btn')
const btnStart = document.querySelector('.quiz__btn-start')
const popup = document.querySelector('.quiz__popup')
console.log(btnStart);

// Записываем в переменные известные значения
let score = 0
let questionIndex = 0

btnStart.addEventListener('click', () => {
   popup.classList.add('active')
})

// Пишем функцию по очистки найденых элементов
function clearPage() {
   title.innerText = ''
   answerList.innerHTML = ''
}
questionShowPage()
answersShow()

function questionShowPage() {
   let questionText = questionsList[questionIndex].question
   title.innerText = questionText
}

function answersShow() {
   let answerArr = questionsList[questionIndex].answer
   answerArr.forEach((el,index )=> 
   {
      const answerTemplate = `<label class="quiz__answers">
               <input type="radio" name="answer" value="${index+1}">
               <span></span>
               ${el}
            </label>`
      answerList.innerHTML += answerTemplate
      }
      )
}

btn.addEventListener('click', answerGo)

function answerGo() {
      const checkedRadio = answerList.querySelector('input[type="radio"]:checked')
   const lengthQuestion = questionsList.length - 1
   if (checkedRadio) {
      if (parseInt(checkedRadio.value) === questionsList[questionIndex].correct) {
         score++
   }
         if (questionIndex !== lengthQuestion) {
            questionIndex++
            clearPage()
            questionShowPage()
            answersShow()
         }
         else if (questionIndex === lengthQuestion) {
            clearPage()
            showResult()
      }
   } else return
}

function showResult() {
   title.innerText = ` Wonderful!!!`
   answerList.innerHTML = `<p> You answered to  ${score} of ${questionsList.length}</p>`
   btn.innerText = `Try again?`
   btn.removeEventListener('click', answerGo)
   btn.addEventListener('click', ()=> history.go())
}

