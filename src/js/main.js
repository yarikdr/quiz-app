import modal from "./modules/modal"
import tabs from "./modules/tabs"

const answersSelect = question => {
  const answers = [...document.querySelector(question).children],
        modalSelected = document.querySelector('.modal-selected')
  answers.forEach((ans, i) => {
    ans.addEventListener('click', e => {
      e.preventDefault()
      if (!ans.querySelector('.selected')) {
        const checkmark = document.createElement('div')
        checkmark.classList.add('selected')
        checkmark.innerHTML = '&check;'
        answers.forEach(a => a.querySelector('.selected') ? a.removeChild(a.querySelector('.selected')) : '')
        ans.append(checkmark)
      } else {
        ans.removeChild(ans.querySelector('.selected'))
      }
      // if (!modalSelected.classList.contains('fadeInOutUp')) {
      //   modalSelected.style.top = window.scrollY + 'px'
      //   modalSelected.classList.add('fadeInOutUp')
      // } else {
      //   modalSelected.classList.remove('fadeInOutUp')
      // }
    })
  })
}

const checkAnswers = (btnSel, questionsSel, questionsArr, actual, general) => {
  const btn = document.querySelector(btnSel),
        questions = [...document.querySelector(questionsSel).children]
  btn.addEventListener('click', e => {
    e.preventDefault()
    const ql = questions.length
    let rightAnsCnt = 0
    questions.forEach((q, i) => {
      const answers = [...q.lastElementChild.children]
      answers.forEach((ans, j) => {
        if (ans.querySelector('.selected') && j+1 === questionsArr[i].answers[questionsArr[i].answers.length-1]) {
          rightAnsCnt++
        }
      })
    })
    document.querySelector(actual).textContent = rightAnsCnt
    document.querySelector(general).textContent = ql
  })
}



const render = (sel) => {
  const dest = document.querySelector(sel)

  const questions = JSON.parse(localStorage.getItem('questions'))

  questions.forEach(({title, answers}, i) => {
    let charCode = 65, answersHTML = '' 
    /*charCode is used for letters in data-letter 
    attribute in order to create ABCD symbols in HTML*/
    /*one array element is avoided because the last element is the corrent answer*/
    for (let i = 0; i < answers.length-1; i++, charCode++) {
      const ansHTML = `<div class="question__answer" data-letter="${String.fromCharCode(charCode)}">${answers[i]}</div>\n`
      answersHTML += ansHTML
    }
    dest.insertAdjacentHTML(
      'beforeend',
      `
      <div class="question question-${i+1}">
        <h2 class="question__title">
          ${i+1}. ${title}
        </h2>
        <div class="question__answers">
          ${answersHTML}
        </div>
      </div>
      `
    )
    answersSelect(`.question-${i+1} .question__answers`)
  })
  checkAnswers('.question__btn', '.questions', questions, '#actualPoints', '#generalPoints')
}

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('questions')) {
    const questions = [
      {title: 'Який найбільший в світі півострів?', answers: ['Крим', 'Піренейський', 'Аравійський', 'Індостан', 3]},
      {title: 'Коли Україна отримала незалежність?', answers: ['1991', '1989', '1990', '1992', 1]},
      {title: 'Яка найвища гора світу?', answers: ['Говерла', 'Кіліманджаро', 'Мак-Кінлі', 'Еверест', 4]},
      {title: '13² - ?', answers: ['121', '169', '269', '319', 2]},
      {title: 'Коли почалася Перша світова війна?', answers: ['1991', '1914', '1941', '1939', 2]},
    ]

    localStorage.setItem('questions', JSON.stringify(questions))
  }
  // localStorage.clear()

  tabs('.tabs', 'tabs__tab-active', 2)
  modal('.modal-result', '.question__btn')
  render('.questions')
})

