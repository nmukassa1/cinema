import { useState, useEffect } from 'react';
import useData from '../Hooks/useData'
import { useParams } from "react-router-dom";

function FilmScheduel({filterFilmByDay}) {

    const {filmDb, locationShowings, daysOfWeek, dates} = useData()
    const {id, location} = useParams();
    const [day, setDay] = useState('TODAY')
    const [filmScheduel, setFilmScheduel] = useState([])

    

    // OBJECTIVE: Find the correct movie the user has clicked 
    let cinemaLocation
    let locationScheduel // This acts as the scheduel for the whole week of every film

    let currentFilmScheduel = []

    useEffect(() => {
        setFilmScheduel(currentFilmScheduel)
    }, [])

    //Show schedule for what day was clicked
    useEffect(() => {
        if(filterFilmByDay !== null){
            const dayInfo = locationScheduel.find((item) => item.date === filterFilmByDay);
            const movie = dayInfo.movies.find((item) => item.id === id.toString())
            setDay(filterFilmByDay)
            setFilmScheduel([movie])
            // console.log(dayInfo);
        }
    }, [filterFilmByDay])

    if (locationShowings) {
        //  location of cinema
        cinemaLocation = locationShowings.find((item) => item.location === location )

        // scheduel for week
        locationScheduel = Object.values(cinemaLocation.schedual)

        // Isolate the schedule for the wwek for the current film I need right now
        // Itterate over the locationScheduel array
        for(let i = 0; i < locationScheduel.length; i++){
            // Isolate each day
            let day = locationScheduel[i].date;

            // Itterate over the movie array so I can find which item matches the search query / movie I'm looking for. 
            locationScheduel[i].movies.forEach((movie) => {
                if(movie.id === id) currentFilmScheduel.push({day: day, time_screen: movie.time_screen})
                // setFilmScheduel(currentFilmScheduel)
            })
        }
    }

    // const x = <span>{day}</span>


    return ( 
        <div className="schedule">
            {filmScheduel.length > 0 && (
                filmScheduel.map((item, index) => (
                    <div key={index}>
                        <h2>
                            {index === 0 ? `UPCOMING SHOWINGS FOR ${day}` : daysOfWeek[dates[index].getDay()]}
                        </h2> 
                        <ul className="card-schedule-container">
                            {item.time_screen.map((item, index) => (
                                <li key={index}>
                                    <button className="card-schedule">
                                        <div>
                                            <div className="time">
                                                <span>{item.start_time}</span> - <span>{item.end_time}</span>
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
                ))
            )}
        </div>
    );
}

export default FilmScheduel;