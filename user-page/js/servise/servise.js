'use strict'

const STORAGE_KAY = 'user-prefs'

const user = {
    email: '',
    age: '',
    bgColor: '',
    txtColor: '',
    birthDate: '',
    birthTime: ''
}

function getUser() {
    return user
}

function setEmail(email) {
    user.email = email
    _save()
}

function setAge(age) {
    user.age = age
    _save()
}

function setBGColor(color) {
    user.bgColor = color
    _save()
}

function setColor(color) {
    user.txtColor = color
    _save()
}

function setDateBirth(date) {
    user.birthDate = date
    _save()
}

function setTimeBirth(time) {
    user.birthTime = time
    _save()
}

function _save() {
    saveToStorage(STORAGE_KAY, user)
}