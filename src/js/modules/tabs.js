const tabs = (navbarSel, activeClass, tabByDefault=0) => {
  const navbar = document.querySelector(navbarSel),
        tabs = document.querySelectorAll('[data-linkto]'),
        tabsContent = navbar.nextElementSibling.children

  const hideTabsContent = () => {
    [...tabsContent].forEach(item => {
      item.classList.add('hide')
    })
    tabs.forEach(item => {
      item.classList.remove(activeClass)
    })
  }

  hideTabsContent()
  showTabContent(tabByDefault < tabs.length-1 ? tabByDefault : tabs.length-1)

  function showTabContent(index) {
    hideTabsContent()
    if (typeof index === 'number') {
      tabsContent[index].classList.remove('hide')
      tabs[index].classList.add(activeClass)
      return
    }
    const elem = document.querySelector(this.dataset.linkto)
    elem.classList.remove('hide')
    this.classList.add(activeClass)
  }

  tabs.forEach(tab => tab.addEventListener('click', showTabContent))
}

export default tabs