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

    const currentDate = new Date();
    let nextDate = new Date(currentDate);
    let dates = []
    for(let i = 0; i < 7; i++){
        nextDate.setDate(currentDate.getDate() + i)
        dates.push(nextDate)
        nextDate = new Date(currentDate);
    }
    // console.log(dates);
    


    const locationShowings = [
    {
        location: `London - Westfield's`,
        schedual: {
            today: {
                date: daysOfWeek[dates[0].getDay()],
                dateId: 0,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '01'},
                            {start_time: '14:00', end_time: '16:00', screen: '12'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {start_time: '18:00', end_time: '20:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    }
                ]
            },
            tomorrow: {
                date: daysOfWeek[dates[1].getDay()],
                dateId: 1,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {start_time: '13:00', end_time: '15:00', screen: '11'},
                            {start_time: '15:00', end_time: '17:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {start_time: '11:00', end_time: '13:00', screen: '05'},
                            {start_time: '16:00', end_time: '18:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {start_time: '20:00', end_time: '22:00', screen: '10'},
                            {start_time: '14:00', end_time: '16:00', screen: '01'}
                        ]
                    }
                ]
            },
            nextDay1: {
                date: daysOfWeek[dates[2].getDay()],
                dateId: 2,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '11'},
                            {start_time: '14:00', end_time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {start_time: '18:00',end_time: '20:00',  screen: '05'},
                            {start_time: '14:00', end_time: '16:00',screen: '11'}
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
                date: daysOfWeek[dates[0].getDay()],
                dateId: 0,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '01'},
                            {start_time: '14:00', end_time: '16:00', screen: '12'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {start_time: '18:00', end_time: '20:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    }
                ]
            },
            tomorrow: {
                date: daysOfWeek[dates[1].getDay()],
                dateId: 1,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '11'},
                            {start_time: '14:00', end_time: '16:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {start_time: '18:00', end_time: '20:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    }
                ]
            },
            nextDay1: {
                date: daysOfWeek[dates[2].getDay()],
                dateId: 3,
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '11'},
                            {start_time: '14:00', end_time: '16:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {start_time: '12:00', end_time: '14:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {start_time: '18:00', end_time: '20:00', screen: '05'},
                            {start_time: '14:00', end_time: '16:00', screen: '11'}
                        ]
                    }
                ]
            }
        }
    }
    ]


    return { filmDb, locationShowings , dates, daysOfWeek};
}

export default useData;