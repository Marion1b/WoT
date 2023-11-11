const films = [
    {
        title : 'Get Out',
        released : 2017,
        duration : '1h44',
        genre : ['horreur', 'thriller'],
        tags : ['mystère', 'psychologique', 'angoisse']
    },
    {
        title : 'Shrek',
        released : 2001,
        duration : '1h29',
        genre : ['comédie', 'aventure', 'jeunesse'],
        tags : ['fun', 'léger', 'enfant', 'animation']
    },
    {
        title : 'between two women',
        released : 2000,
        duration : '1h32',
        genre : ['drame'],
        tags : ['1950s', 'lesbienne', 'angleterre', 'lgbt']
    },
    {
        title : 'the lighthouse',
        released : 2019,
        duration : '1h50',
        genre : ['drame', 'fantastique', 'horreur', 'thriller'],
        tags : ['isolement', 'cauchemar', 'angoisse', 'inde', 'mystère']
    },
    {
        title : 'Laurence anyways',
        released : 2012,
        duration : '2h48',
        genre : ['drame', 'romantique'],
        tags : ['trans', 'lgbt', 'long', 'inde']
    },
    {
        title : 'the boys in the band',
        released : 2020,
        duration : '2h01',
        genre : ['drame'],
        tags : ['lgbt', 'gay', 'New-York']
    },
    {
        title : 'matrix',
        released : 1999,
        duration : '2h30',
        genre : ['action', 'SF'],
        tags : ['dystopie', 'ordinateur', 'simulation', 'réalité']
    },
    {
        title : 'cléo de 5 à 7',
        released : 1962,
        duration : '1h30',
        genre : ['drame'],
        tags : ['temps réel', 'noir et blanc', 'france']
    },
    {
        title : 'tenet',
        released : 2020,
        duration : '2h30',
        genre : ['action', 'SF', 'thriller'],
        tags : ['temps', 'espionnage', 'compliqué']
    },
    {
        title : 'gone girl',
        released : 2014,
        duration : '2h29',
        genre : ['policier', 'thriller'],
        tags : ['disparition', 'mariage', 'enquête']
    },
    {
        title : 'jurassic park',
        released : 1993,
        duration : '2h07',
        genre : ['action', 'SF', 'thriller'],
        tags : ['dinosaure', 'scientifique', 'angoisse']
    },
    {
        title : 'nimona',
        released : 2023,
        duration : '1h42',
        genre : ['jeunesse', 'aventure'],
        tags : ['animation', 'lgbt', 'fun']
    },
    {
        title : 'enola holmes',
        released : 2020,
        duration : '2h04',
        genre : ['jeunesse', 'policier'],
        tags : ['enquête', 'epoque', 'angleterre']
    },
    {
        title : 'men in black',
        released : 1997,
        duration : '1h37',
        genre : ['SF', 'comédie'],
        tags : ['aliens', 'secret', 'police']
    },
    {
        title : 'the pale blue eye',
        released : 2022,
        duration : '2h10',
        genre : ['policier', 'thriller'],
        tags : ['enquête', 'époque', 'crime']
    },
    {
        title : 'oregueil et préjugés',
        released : 2005,
        duration : '2h06',
        genre : ['drame'],
        tags : ['époque', 'littérature', 'angleterre']
    },
    {
        title : 'au nom de la terre',
        released : 2019,
        duration : '1h43',
        genre : ['drame'],
        tags : ['france', 'famille', 'ferme']
    },
    {
        title : 'ce que veulent les hommes',
        released : 2019,
        duration : '1h58',
        genre : ['comédie'],
        tags : ['US', 'féministe', 'entreprise']
    },
    {
        title : 'moxie',
        released : 2021,
        duration : '1h51',
        genre : ['drame', 'comédie'],
        tags : ['féministe', 'ado', 'lycée']
    },
    {
        title : 'split',
        released : 2016,
        duration : '1h57',
        genre : ['horreur', 'thriller'],
        tags : ['psychologique', 'angoisse', 'enlèvement']
    },
    {
        title : 'Mystic rover',
        released : 2003,
        duration : '2h17',
        genre : ['policier', 'thriller'],
        tags : ['crime', 'enquête', 'amis']
    }
]

function getRandomFilm(arr){
    const randomIndex = Math.floor(Math.random()*arr.length)
    const item = arr[randomIndex]
    return item
}
function color (genre){
    const body = document.querySelector('body')
    const article = document.querySelector('.movieToWatch')
    switch(genre){
        case 'policier':
            body.style.background='#0080ff'
            article.style.background='#0080ff'
            article.style.boxShadow='8px 8px 15px #0072e3, -8px -8px 15px #008eff'
            break
        case 'horreur':
            body.style.background='#111111'
            article.style.background='#111111'
            article.style.boxShadow='8px 8px 15px #070707, -8px -8px 15px #1b1b1b'
            article.style.color='#fff'
            break
        case 'thriller':
            body.style.background='#111111'
            article.style.background='#111111'
            article.style.boxShadow='8px 8px 15px #070707, -8px -8px 15px #1b1b1b'
            article.style.color='#fff'
            break
        case 'drame':
            body.style.background='#408080'
            article.style.background='#408080'
            article.style.boxShadow='8px 8px 15px #376e6e,-8px -8px 15px #499292'
            break
        case 'comédie':
            body.style.background='#ff8080'
            article.style.background='#ff8080'
            article.style.boxShadow='8px 8px 15px #db6e6e,-8px -8px 15px #ff9292'
            break
        case 'SF':
            body.style.background='#8080ff'
            article.style.background='#8080ff'
            article.style.boxShadow='8px 8px 15px #7272e3,-8px -8px 15px #8e8eff'
            break
        case 'jeunesse':
            body.style.background=' #dcb233'
            article.style.background='#dcb233'
            article.style.boxShadow='8px 8px 15px #bd992c, -8px -8px 15px #fbcb3a'
            break
        case 'aventure':
            body.style.background=' #dcb233'
            article.style.background='#dcb233'
            article.style.boxShadow='8px 8px 15px #bd992c, -8px -8px 15px #fbcb3a'
            break
        case 'action':
            body.style.background='#ff80c0'
            article.style.background='#ff80c0'
            article.style.boxShadow='8px 8px 15px #db6ea5,-8px -8px 15px #ff92db'
            break
        case 'romantique':
            body.style.background='#99E1D9'
            article.style.background='#99E1D9'
            article.style.boxShadow='8px 8px 15px #84c2bb,-8px -8px 15px #aefff7'
            break
        case 'fantastique':
            body.style.background='#5D576B'
            article.style.background='#5D576B'
            article.style.color='#fff'
            article.style.boxShadow='8px 8px 15px #504b5c,-8px -8px 15px #6a637a'
            break
    }
}
function random(requestedGenre, requestedTag){
    let selectedFilmsGenre = []
    let selectedFilms=[]
    for (let film of films){
        for (let g of film.genre){
            if(g === requestedGenre){
                selectedFilmsGenre.push(film)
            }
        }
    }
    if(requestedTag){
        for(let selectedFilm of selectedFilmsGenre){
            for(let t of selectedFilm.tags){
                if(t === requestedTag){
                    selectedFilms.push(selectedFilm)
                }
            }
        }
    }else if(!requestedTag){
        selectedFilms = selectedFilmsGenre
    }
    
    const getFilm = getRandomFilm(selectedFilms)
    console.log(getFilm)
    const movieToWatch = document.createElement('article')
    document.querySelector('.movieToWatch').appendChild(movieToWatch)
    const movieToWatchTitle = document.createElement('h2')
    movieToWatchTitle.innerText = getFilm.title
    movieToWatch.append(movieToWatchTitle)
    const movieToWatchReleased = document.createElement('p')
    movieToWatchReleased.innerText = getFilm.released
    movieToWatch.append(movieToWatchReleased)
    const movieToWatchDuration = document.createElement('p')
    movieToWatchDuration.innerText = getFilm.duration
    movieToWatch.append(movieToWatchDuration)
    const movieToWatchGenre = document.createElement('p')
    movieToWatchGenre.innerText = getFilm.genre
    movieToWatch.append(movieToWatchGenre)
    const movieToWatchTag = document.createElement('p')
    movieToWatchTag.innerText = getFilm.tags
    movieToWatch.append(movieToWatchTag)
}

function possibleGenres (liste){
    let genres = []
    for (let film of liste){
        for (let g of film.genre){
            if(!genres.includes(g)){
                genres.push(g)
            }
        }
    }
    console.log(genres)
    // const availableGenres = document.createElement('div')
    // availableGenres.innerHTML = 'Les Genres disponibles :'
    // document.querySelector('.GenresTags').appendChild(availableGenres)
    // const availableGenresList = document.createElement('p')
    // availableGenresList.innerText = genres
    // availableGenres.appendChild(availableGenresList)
}
function possibleTags (liste){
    let tags = []
    for (let film of liste){
        for (let t of film.tags){
            if(!tags.includes(t)){
                tags.push(t)
            }
        }
    }
    console.log(tags)
    // const availableTags = document.createElement('div')
    // availableTags.innerHTML = 'Les Tags disponibles :'
    // document.querySelector('.GenresTags').appendChild(availableTags)
    // const availableTagsList = document.createElement('p')
    // availableTagsList.innerText = tags
    // availableTags.appendChild(availableTagsList)
}

possibleGenres(films)

possibleTags(films)

let askGenre = prompt('Quel genre ?')
let askTag = prompt('Quel tag ?')
color(askGenre)
random(askGenre, askTag)


// random('action', 'dinosaure')

