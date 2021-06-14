'use strict'

const button1 = document.getElementById('dispButton')

let EIEstud = [{ name: 'nkosana', Studid: '1439120' }, { name: 'justice', Studid: '123456' },
  { name: 'thabo', Studid: '456456' }, { name: 'france', Studid: '62655' }, { name: 'kington', Studid: '15548' }]

// erase button
const button2 = document.getElementById('eraseButton')

// Function for displaying all students
const displayStudents = (parame, state) => {
  if (state) {
    EIEstud = []
    document.getElementById('button2').innerHTML = ''
  }

  const paragraph = document.createElement('p') // Create <p> element

  let list = ''
  EIEstud.forEach((elem) => {
    list = elem.name + ' - ' + elem.Studid + ' '
    const text = document.createTextNode(list) // Create text node
    paragraph.appendChild(text) // Append the text to <p>
    // lets create a button for every student
    const stdButton = document.createElement('button')
    stdButton.innerHTML = 'edit'
    paragraph.appendChild(stdButton)
    // new line after each stduent is displayed
    const newline = document.createElement('p')
    paragraph.appendChild(newline)
    // event for editing the student
    stdButton.addEventListener('click', () => {
      // newline.removeChild(newline.lastChild)
      createTextBox(newline, elem)
    }, false)
  })

  parame.replaceWith(paragraph) // Append <p> to the <div>
}

/** ********************************************************************************* */
// event listener for removing all students
button2.addEventListener('click', function () {
  // button2.parentElement.innerHTML = ''
  displayStudents(document.getElementById('studentList'), true)
}, false)

/** *********************************************** */
// event listener for displaying all students
button1.addEventListener('click', function () {
  displayStudents(document.getElementById('studentList'), false)
}, false)

/** ************************************************************************************* */
// this function creates a text box when you want to edit
const createTextBox = (ParElem, elem) => {
  const NameEdit = document.createElement('label')
  NameEdit.innerHTML = ' Name of student: '
  const box = document.createElement('input')
  box.type = 'text'

  const IdEdit = document.createElement('label')
  IdEdit.innerHTML = ' Student id: '
  const newbox = document.createElement('input')
  newbox.type = 'text'

  // button to sumbit changes
  const editButton = document.createElement('button')
  editButton.innerHTML = 'submit'
  ParElem.replaceWith(NameEdit, box, IdEdit, newbox, editButton, document.createElement('p'))

  editButton.addEventListener('click', () => {
    elem.name = box.value
    elem.Studid = newbox.value
    displayStudents(NameEdit.previousElementSibling.parentElement, false)
  }, false)
}
