'use strict'
const STORAGE_KAY = 'SavedPlaces'
var gSavedPlaces = []


function getPlaces() {
    if (!loadFromStorage(STORAGE_KAY) || !loadFromStorage(STORAGE_KAY).length) {
        _createPlaces()
        return gSavedPlaces
    }
    console.log(' loadFromStorage(STORAGE_KAY):', loadFromStorage(STORAGE_KAY))
    gSavedPlaces = loadFromStorage(STORAGE_KAY)
    return gSavedPlaces

}

function removePlace(placeId) {
    const placeIdx = gSavedPlaces.findIndex(place => placeId === place.id)
    gSavedPlaces.splice(placeIdx, 1)
    _save()
}

function panToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}

function addPlace(name, lat, lng, zoom) {
    var place = _createPlace(name, lat, lng, zoom)
    gSavedPlaces.unshift(place)
    _save()
    // return place
}

function getPlaceById(placeId) {
    return gSavedPlaces.find(place => placeId === place.id)
}

function _createPlace(name, lat, lng, zoom) {
    return {
        id: makeId(3),
        name: name || 'aabbcc',
        lat: lat || getRandomIntInclusive(1, 100),
        lng: lng || getRandomIntInclusive(1, 100),
        zoom: zoom || 10
    }
}

function _createPlaces() {
    // If no cars in storage - generate demo data 

    const names = ['home', 'work', 'family', 'friends']

    for (let i = 0; i < 3; i++) {
        var nameIdx = getRandomInt(0, names.length)
        var name = names[nameIdx]
        names.splice(nameIdx, 1)
        gSavedPlaces.push(_createPlace(name))
    }
    _save()
}

function _save() {
    saveToStorage(STORAGE_KAY, gSavedPlaces)
}