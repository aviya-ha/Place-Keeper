'use strict'



function onInit() {
    renderUserPref()
}

function renderUserPref() {
    const user = updateUserPref()
    
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = user.bgColor
    elBody.style.color = user.txtColor
    
    const elBirthTime = document.querySelector('.birth-time')
    elBirthTime.innerText = user.birthTime


}