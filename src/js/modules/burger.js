const burger = (burgerSel='.burger', menuSel='.menu', activeClass='active') => {
  const burger = document.querySelector(burgerSel),
        menu = document.querySelector(menuSel)
  
  burger.addEventListener('click', e => {
    e.preventDefault()
    burger.classList.toggle(activeClass)
    menu.classList.toggle(activeClass)
    document.body.classList.toggle('lock')
  })
}

export default burger