import modal from "./modules/modal"
import tabs from "./modules/tabs"
import play from "./modules/play"
import autofill from "./modules/autofill"

window.addEventListener('DOMContentLoaded', () => {
  autofill()
  tabs('.tabs', 'tabs__tab-active', 2)
  modal('.modal-result', '.question__btn')
  play('.questions', '.selected', {
    btnSel: '.question__btn',
    questionsSel: '.questions',
    actual: '#actualPoints',
    general: '#generalPoints'
  })
})

