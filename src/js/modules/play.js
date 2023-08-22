const play = (destinationSel, selectClass, {
  btnSel, questionsSel, actual, general
} = {}) => {
  const questions = JSON.parse(localStorage.getItem('questions'))

  const answersSelect = (question, selectClass) => {
    const answers = [...document.querySelector(question).children],
          modalSelected = document.querySelector('.modal-selected')
    answers.forEach((ans, i) => {
      ans.addEventListener('click', e => {
        e.preventDefault()
        if (!ans.querySelector(selectClass)) {
          const checkmark = document.createElement('div')
          checkmark.classList.add(selectClass.slice(1))
          checkmark.innerHTML = '&check;'
          answers.forEach(a => a.querySelector(selectClass) ? a.removeChild(a.querySelector(selectClass)) : '')
          ans.append(checkmark)
        } else {
          ans.removeChild(ans.querySelector(selectClass))
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
  
  const render = (sel) => {
    const dest = document.querySelector(sel)
  
    questions.forEach(({title, answers}, i) => {
      let charCode = 65, answersHTML = '' 
      /*charCode is used for letters in data-letter 
      attribute in order to create ABCD symbols in HTML*/
      /*one array element is avoided because the last element is the corrent answer*/
      for (let j = 0; j < answers.length-1; j++, charCode++) {
        const ansHTML = `<div class="question__answer" data-letter="${String.fromCharCode(charCode)}">${answers[j]}</div>\n`
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
      answersSelect(`.question-${i+1} .question__answers`, selectClass)
    })
  }

  const checkAnswers = (btnSel, questionsSel, actual, general) => {
    const btn = document.querySelector(btnSel),
          qs = [...document.querySelector(questionsSel).children]
    btn.addEventListener('click', e => {
      e.preventDefault()
      const ql = qs.length
      let rightAnsCnt = 0
      qs.forEach((q, i) => {
        const answers = [...q.lastElementChild.children]
        answers.forEach((ans, j) => {
          if (ans.querySelector(selectClass) && j+1 === questions[i].answers[questions[i].answers.length-1]) {
            rightAnsCnt++
          }
        })
      })
      document.querySelector(actual).textContent = rightAnsCnt
      document.querySelector(general).textContent = ql
      //Clearing checkmarks
      document.querySelectorAll(selectClass).forEach(item => item.remove())
    })
  }

  render(destinationSel)
  checkAnswers(btnSel, questionsSel, actual, general)
}

export default play