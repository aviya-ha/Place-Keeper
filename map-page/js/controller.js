'use strict'

var gMap

var gMarkers = []

function onInit() {
    renderPlaces()
    initMap()
}

function renderPlaces() {
    const places = getPlaces()
    console.log('places:', places[0])
    var strHtmls = places.map(place => `
    <li>${place.name} 
    <button class="btn btn-delete" onclick="onRemovePlace('${place.id}')">X</button> 
    <button class="btn btn-go" onclick="onPanToPlace('${place.id}')">Go</button>
    </li>
`)

    document.querySelector('.places-links').innerHTML = strHtmls.join('')

}

function renderMarkers() {
    const places = getPlaces()
    // remove previous markers
    gMarkers.forEach(marker => marker.setMap(null))
    // every place is creating a marker
    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name
        })
    })
}

function initMap(lat = 31, lng = 31) {

    const elMap = document.querySelector('.map-container')
    const mapOptions = {
        center: { lat, lng },
        zoom: 10
    }
    gMap = new google.maps.Map(elMap, mapOptions)

    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderMarkers()
        renderPlaces()
    })

    const markerOptions = {
        position: { lat, lng },
        map: gMap,
        title: 'Hello World!'
    }
    const marker = new google.maps.Marker(markerOptions)

    renderMarkers()
}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderMarkers()
    renderPlaces()
}

function onBtnCurrLocation() {
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    const { latitude: lat, longitude: lng, accuracy } = position.coords
    initMap(lat, lng)
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}





