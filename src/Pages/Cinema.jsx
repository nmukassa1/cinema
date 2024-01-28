import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useData from "../Hooks/useData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import CinemaLocation from "../Components/CinemaLocation";


function Cinema() {

    const {location, id} = useParams();
    const {locationShowings, filmDb, daysOfWeek} = useData()

    const [placeholder, setPlaceholder] = useState(location)

    let movie
    if(filmDb) movie = Object.values(filmDb).find((movie) => movie.id === id)

    // OBJECTIVE: Find the correct movie the user has clicked 
    let cinema
    let globalScheduel // This acts as the scheduel for the whole week of every film
    let currentFilmScheduel = []
    if (locationShowings) {
        //  go through array and find the object that matches the url location slug
        cinema = locationShowings.find((item) => item.location === location )

        //turn scheduel object into an array so I can  itterate over it
        globalScheduel = Object.values(cinema.schedual)

        // Isolate the schedule for the wwek for the current film I need right now
        // Itterate over the globalScheduel array
        for(let i = 0; i < globalScheduel.length; i++){
            // Isolate each day
            let day = globalScheduel[i].date;

            // Itterate over the movie array so I can find which item matches the search query / movie I'm looking for. 
            globalScheduel[i].movies.forEach((item) => {
                if(item.id === id) currentFilmScheduel.push({day: day, time_screen: item.time_screen})
            })
        }
    }
console.log(currentFilmScheduel);


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

    const [daySelected, setDayDelected] = useState(newDaysOfWeek[tracker])

    return ( 
        <div className="film-details">
            <div className="film-details__image">
                <img src={movie.img} alt={movie.alt} />
            </div>

            <div className="container">
                <div className="film-details__wrapper">
                    <div className="film-details__poster-img">
                        <img src={movie.poster} alt={movie.alt} />
                    </div>
                    <div className="film-details__info-wrapper">
                        <div className="film-details__info">
                            <h1 className="film-details__title">
                                {movie.title}
                            </h1>

                            <div className="film-details__age-certificate">
                                <img src={movie.ageCertificate.img} alt="" />
                                <p>{movie.ageCertificate.info}</p>
                            </div>

                            <div className="film-details__logline">
                                <p>{movie.logline}</p>
                            </div>

                            <div className="cheaper-online">
                                £1 cheaper online
                            </div>

                            <div className="film-details__more-info">
                                <button className="full-details__btn">Full Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    <CinemaLocation placeholder={placeholder} setPlaceholder={setPlaceholder}/>

                    <div className="filter">
                        <button><FontAwesomeIcon icon={faFilter} />
                            Filter All Films & Events
                        </button>
                        <div className="filter-dropdown">
                            {/* Filters */}
                        </div>

                        {/* FILM PANEL */}
                        <div className="film-showings">
                            <ul className="panel">
                                {newDaysOfWeek.map((day, index) => (
                                    <li key={index}>
                                        <button>
                                            {index === 0 && ('Today')}
                                            {index === 1 && ('Tomorrow')} 
                                            {index > 1 && day.split('', 3)} 
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="schedule">
                            {currentFilmScheduel.map((item, index) => (
                                <div key={index}>
                                    <h2>{index === 0 ? `UPCOMING SHOWINGS FOR TODAY` : item.day} </h2> 
                                    <ul className="card-schedule-container">
                                        {item.time_screen.map((item, index) => (
                                            <li key={index}>
                                                <button className="card-schedule">
                                                    <div>
                                                        <div className="time">
                                                            <span>{item.time}</span>
                                                        </div>
                                                        <div className="screen">
                                                            <span>Screen {item.screen}</span>
                                                        </div>
                                                    </div>
                                                    <div className="price">
                                                        <span>FROM £4.99</span>
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Cinema;