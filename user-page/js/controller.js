'use strict'

function onInit() {
    // saveUser()
}

function onSet(ev) {
    console.log('hre:')
    ev.preventDefault()

    const elEmail = document.getElementById('email').value
    setEmail(elEmail)

    const elAge = document.getElementById('age').value
    setAge(elAge)

    const elTextColor = document.getElementById('color').value
    setColor(elTextColor)

    const elBGColor = document.getElementById('background-color').value
    setBGColor(elBGColor)

    const elDateBirth = document.getElementById('dob').value
    setDateBirth(elDateBirth)

    const elTime = document.getElementById('time').value
    setTimeBirth(elTime)
}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal


}