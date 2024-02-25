'use strict'

const user = {
    // email: '',
    // age: '',
    bgColor : '',
    txtColor: '',
    birthDate: '',
    birthTime: ''
}

const STORAGE_KAY = 'user-prefs'



function updateUserPref(){
    if (getFromStorage()){
        user.bgColor = getFromStorage().bgColor 
        user.txtColor = getFromStorage().txtColor 
        user.birthDate = getFromStorage().birthDate 
        user.birthTime = getFromStorage().birthTime  
    }
    return user
}

function getFromStorage(){
    const AllPrefUser = loadFromStorage(STORAGE_KAY)
    return AllPrefUser
}