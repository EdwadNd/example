'use strict'
const students = []

const addStudents = document.getElementById('add-student')

addStudents.addEventListener('click', () => {
  const newStudent = document.getElementById('new-student-text')
  students.push(newStudent.value)

  const studElem = document.getElementById('students')
  const newStudElem = document.createElement('p')
  newStudElem.innerHTML = students[students.length - 1]
  studElem.appendChild(newStudElem)
}, false)

document.querySelector('#search-text').addEventListener('input', function () {
  const studElem = document.getElementById('students')
  const e = document.getElementById('search-text').value
  const filStud = students.filter(elem => {
    return e === elem.substr(0, e.length)
  })

  while (studElem.firstChild) {
    studElem.removeChild(studElem.firstChild)
  }
  // studElem.innerHTML = ''

  filStud.forEach((elem) => {
    const newStudElem = document.createElement('p')
    newStudElem.innerHTML = elem
    studElem.appendChild(newStudElem)
  })
})
