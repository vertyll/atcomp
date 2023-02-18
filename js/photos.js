import { getPhotosAlbums } from './api.js'

const createPhotosContainer = () => {
    const app = document.getElementById('app')
    const pageContent = document.createElement('div')
    pageContent.className = 'pageContent'
    app.appendChild(pageContent)

    const header =  document.createElement('header')
    pageContent.appendChild(header)
    const h1 = document.createElement('h1')
    h1.innerText = 'Zdjęcia'
    header.appendChild(h1)

    const main = document.createElement('main')
    main.id = 'photosMain'
    pageContent.appendChild(main)

    const photos = document.createElement('div')
    photos.className = 'photos-container'
    main.appendChild(photos) 
}

const loadPhotosGerUrlToSlider = () => {
    const url = new URL(window.location.href)
    const albumId = url.searchParams.get('albumId')
    const photoId = url.searchParams.get('photoId')
    loadPhotosToSlider(albumId, photoId)
}

const buildSliderWithButtons = (photos) => {

    const slider = document.querySelector('.photos-container')

    const sliderButtons = document.createElement('div')
    sliderButtons.classList.add('sliderButtons')
    slider.appendChild(sliderButtons)

    const sliderButtonLeft = document.createElement('button')
    sliderButtonLeft.classList.add('sliderButtonLeft')
    sliderButtonLeft.innerHTML = '<'
    sliderButtons.appendChild(sliderButtonLeft)

    const sliderButtonRight = document.createElement('button')
    sliderButtonRight.classList.add('sliderButtonRight')
    sliderButtonRight.innerHTML = '>'
    sliderButtons.appendChild(sliderButtonRight)

    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('sliderContainer')
    slider.appendChild(sliderContainer)

    return sliderContainer

}
const loadPhotosToSlider = async (albumId, photoId) => {
    const photos = await getPhotosAlbums(albumId)
    const sliderContainer = buildSliderWithButtons(photos)

    const sliderButtonLeft = document.querySelector('.sliderButtonLeft')
    const sliderButtonRight = document.querySelector('.sliderButtonRight')

    let index = 0
    if (photoId) {
        index = photos.findIndex((photo) => photo.id === Number(photoId))
    }

    const showPhoto = (index) => {
        const photo = photos[index]
        sliderContainer.innerHTML = `<img src="${photo.url}" alt="${photo.title}">`
    }

    showPhoto(index)

    sliderButtonLeft.addEventListener('click', () => {
        index--
        if (index < 0) {
            index = photos.length - 1
        }
        showPhoto(index)
     })

    sliderButtonRight.addEventListener('click', () => {
        index++
        if (index >= photos.length) {
            index = 0
        }
        showPhoto(index)
    })
}

const photos = () => {
    createPhotosContainer()
    loadPhotosGerUrlToSlider()
}

photos()



