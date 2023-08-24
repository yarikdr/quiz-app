const create = (formSel, addQuestionSel, addAnswerSel) => {
  const form = document.querySelector(formSel),
        addQuestionBtn = document.querySelector(addQuestionSel)

  const formHandler = e => {
    console.log(1)
    e.preventDefault()
    const formData = new FormData(form)
    let data = {}
    for (const [key, val] of formData) {
      data[key] = val
    }
    console.log(data)
  }

  const addQuestion = e => {
    e.preventDefault()
    const dest = addQuestionBtn.previousElementSibling
    dest.insertAdjacentHTML(
      'beforeend',
      `
      <div class="create__block">
        <div class="create__question">
          <input type="text" class="input" placeholder="Question..." name="question">
          <button type="button" class="addAnswer">Add answer</button>
        </div>
        <div class="create__answers">
          <input type="text" class="create__answer input" placeholder="Answer..." name="answer">
        </div>
      </div>
      `
    )
  }

  const addAnswer = e => {
    //*Using delegation of events here
    e.preventDefault()
    const target = e.target
    if (target && target.classList.contains(addAnswerSel.slice(1))) {
      const dest = target.parentElement.nextElementSibling
      if (dest.children.length < 4) {
        dest.insertAdjacentHTML(
          'beforeend',
          `
          <input type="text" class="create__answer input" placeholder="Answer..." name="answer">
          `
        )
      } else {
        alert('Max amount of answers: 4')
      }
    }
  }

  form.querySelector('.create__questions').addEventListener('click', addAnswer)
  form.addEventListener('submit', formHandler)
  addQuestionBtn.addEventListener('click', addQuestion)
}

export default create

/*
   
*/