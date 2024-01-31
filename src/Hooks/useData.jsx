function useData() {

    // A cinema movie db

    const filmDb = {
        napoleon: {
        title: 'Napoleon', 
        img: require('../Assets/napoleon.webp'), 
        alt: 'cinema poster for Napoleon',
        type: 'movie',
        ageCertificate: {img: require('../Assets/15-film-classification.png'), info: `Films classified 15 are generally not suitable for children aged under 15. No one younger than 15 may see a 15 film unless accompanied by an adult`, age: 15},
        poster: require('../Assets/napoleon-poster.webp'),
        id: '01',
        logline: `Napoleon is a spectacle-filled action epic that details the checkered rise and fall of the iconic French Emperor Napoleon Bonaparte.`
        },
        theHungerGames: {
            title: 'The Hunger Games: The Ballard Of Songbirds And Snakes',
            img: require('../Assets/the-hunger-games-hero.webp'), alt: 'cinema poster for The The Hunger Games: The Ballard Of Songbirds And Snakes',
            type: 'movie',
            ageCertificate: {img: require('../Assets/12a-film-classification.png'), info: `Films classified 15 are generally not suitable for children aged under 15. No one younger than 15 may see a 15 film unless accompanied by an adult`, age: 15},
            poster: require('../Assets/the-hunger-games-poster.webp'),
            id: '02'
            },
        renaissance: {
            title: 'Renaissance: A Film By Beyonce', 
            img: require('../Assets/renaissance-a-film-by-beyonce-hero.webp'), 
            alt: 'cinema poster for Renaissance: A Film By Beyonce',
            type: 'movie',
            ageCertificate: {img: require('../Assets/15-film-classification.png'), info: `Films classified 15 are generally not suitable for children aged under 15. No one younger than 15 may see a 15 film unless accompanied by an adult`, age: 15},
            poster: require('../Assets/RENAISSANCE_poster.webp'),
            id: '03'
            }
        }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const todaysDay = new Date().getDay();

    const today = new Date().getDay();
    let newDaysOfWeek = []
    let tracker = today;
    for(let i = 0; i < 6; i++){ 
        newDaysOfWeek.push(daysOfWeek[tracker])
        if(tracker === 6){
            tracker = 0
        } else{
            tracker++
        }
    }
    


    const locationShowings = [
    {
        location: `London - Westfield's`,
        schedual: {
            today: {
                date: daysOfWeek[todaysDay],
                dateId: 0,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '01'},
                            {time: '14:00', screen: '12'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            },
            tomorrow: {
                date: daysOfWeek[todaysDay + 1],
                dateId: 1,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '11'},
                            {time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            },
            nextDay1: {
                date: daysOfWeek[todaysDay + 2],
                dateId: 2,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '11'},
                            {time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            }
        }
    },
    {
        location: `Brighton`,
        schedual: {
            today: {
                date: daysOfWeek[todaysDay],
                dateId: 0,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '01'},
                            {time: '14:00', screen: '12'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            },
            tomorrow: {
                date: daysOfWeek[todaysDay + 1],
                dateId: 1,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '11'},
                            {time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            },
            nextDay1: {
                date: daysOfWeek[todaysDay + 2],
                dateId: 3,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '11'},
                            {time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            }
        }
    }
    ]


    return { filmDb, locationShowings , daysOfWeek, newDaysOfWeek};
}

export default useData;