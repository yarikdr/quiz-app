//this is a temporary function

const autofill = () => {
  if (!localStorage.getItem('questions')) {
    const questions = [
      {title: 'Який найбільший в світі півострів?', answers: ['Крим', 'Піренейський', 'Аравійський', 'Індостан', 3]},
      {title: 'Коли Україна отримала незалежність?', answers: ['1991', '1989', '1990', '1992', 1]},
      {title: 'Яка найвища гора світу?', answers: ['Говерла', 'Кіліманджаро', 'Мак-Кінлі', 'Еверест', 4]},
      {title: '13² = ?', answers: ['121', '169', '269', '319', 2]},
      {title: 'Коли почалася Перша світова війна?', answers: ['1991', '1914', '1941', '1939', 2]},
    ]

    localStorage.setItem('questions', JSON.stringify(questions))
  }
}

export default autofill