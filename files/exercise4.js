'use strict'
const displayMssg = (name) => {
  document.getElementById('heading').innerHTML = `Hello ${name}`

  // remove the add button and the text box
  const parent = document.getElementById('add').parentElement
  parent.removeChild(document.getElementById('add'))
  parent.removeChild(document.getElementById('mycookie'))
}

if (!document.cookie.split('; ').find(row => row.startsWith('username'))) {
  // alert('Do something here!')
  document.getElementById('add').addEventListener('click', () => {
    const getName = document.getElementById('mycookie').value
    document.cookie = `username=${getName};expires=Fri,31 Dec 2021 12:00:00 UTC;path=/`
    displayMssg(getName)
  }, false)
} else {
  const sind = document.cookie.indexOf('=') + 1
  const eind = document.cookie.length
  const getName = document.cookie.substr(sind, eind - sind)
  displayMssg(getName)
  // // deletes all cookies
  // const cookies = document.cookie.split(';')

  // for (let i = 0; i < cookies.length; i++) {
  //   const cookie = cookies[i]
  //   const eqPos = cookie.indexOf('=')
  //   const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
  //   document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  // }
}
