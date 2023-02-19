const createNavbar = () => {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')
    navbar.id = 'navbar'
    app.appendChild(navbar)

    const navbarUl = document.createElement('ul')
    navbarUl.classList.add('navbar-ul')
    navbar.appendChild(navbarUl)

    const navbarA1 = document.createElement('a')
    navbarA1.classList.add('navbar-a')
    navbarA1.href = '/'
    navbarUl.appendChild(navbarA1)

    const navbarA2 = document.createElement('a')
    navbarA2.classList.add('navbar-a')
    navbarA2.href = '/form'
    navbarUl.appendChild(navbarA2)

    const navbarA3 = document.createElement('a')
    navbarA3.classList.add('navbar-a')
    navbarA3.href = '/posts'
    navbarUl.appendChild(navbarA3)

    const navbarA4 = document.createElement('a')
    navbarA4.classList.add('navbar-a')
    navbarA4.href = '/albums'
    navbarUl.appendChild(navbarA4)

    const navbbarLi1 = document.createElement('li')
    navbbarLi1.classList.add('navbar-li')
    navbbarLi1.innerText = 'Strona główna'
    navbarA1.appendChild(navbbarLi1)

    const navbbarLi2 = document.createElement('li')
    navbbarLi2.classList.add('navbar-li')
    navbbarLi2.innerText = 'Formularz'
    navbarA2.appendChild(navbbarLi2)

    const navbbarLi3 = document.createElement('li')
    navbbarLi3.classList.add('navbar-li')
    navbbarLi3.innerText = 'Posty'
    navbarA3.appendChild(navbbarLi3)

    const navbbarLi4 = document.createElement('li')
    navbbarLi4.classList.add('navbar-li')
    navbbarLi4.innerText = 'Albumy'
    navbarA4.appendChild(navbbarLi4)
}

createNavbar()