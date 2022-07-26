import { name } from './../modules/square.js'
import { pickATeam } from './../modules/pick_a_team.js'
import { pickARole } from './../modules/pick_a_role.js'
const pageTitle = 'Basket Tactics'
// create an object that maps the url to the template, title, and description
const routes = {
    404: {
        template: 'templates/404.html',
        title: '404 | ' + pageTitle,
        description: 'Page not found',
    },
    '/': {
        template: 'templates/index.html',
        title: 'Inicio | ' + pageTitle,
        description: 'This is the home page',
    },
    playerSelected: {
        template: 'templates/player_selected.html',
        // title: ' Player Selected | ' + pageTitle,
        title: `Player Selected | ${pageTitle}`,
        description: 'This is the player selected page',
    },
    selectTeam: {
        template: 'templates/select_team.html',
        title: ' Elegir Equipo | ' + pageTitle,
        description: 'This is the select team page',
    },
    navBar: {
        template: 'templates/navbar.html',
    },
}

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace('#', '')
    // console.log(location)
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = '/'
    }
    // get the route object from the routes object
    const route = routes[location] || routes['404']
    const routeNav = routes['navBar']
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text())
    const navbar = await fetch(routeNav.template).then((response) =>
        response.text()
    )
    // set the content of the content div to the html
    document.getElementById('content').innerHTML = html
    document.getElementById('navbar').innerHTML = navbar
    // set the title of the document to the title of the route
    document.title = route.title
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', route.description)

    if (location == '/') {
    }
    if (location == 'playerSelected') {
        console.log(name)
    }
    if (location == 'selectTeam') {
        pickATeam()
    }
}
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener('hashchange', locationHandler)
// call the urlLocationHandler to load the page
locationHandler()
