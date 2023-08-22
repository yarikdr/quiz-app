const modal = (modalSel, triggersSel) => {
  const modalBlock = document.querySelector(modalSel),
        triggers = document.querySelectorAll(triggersSel),
        closeTriggers = modalBlock.querySelectorAll('[data-close]')

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modalBlock.classList.remove('hide')
      modalBlock.classList.add('fadeIn')
      document.body.classList.add('lock')
    })
  })

  closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modalBlock.classList.remove('fadeIn')
      modalBlock.classList.add('hide')
      document.body.classList.remove('lock')
    })
  })

  modalBlock.addEventListener('click', e => {
    if (e.target === modalBlock) {
      modalBlock.classList.remove('fadeIn')
      modalBlock.classList.add('hide')
      document.body.classList.remove('lock')
    }
  })
}

export default modal