import { useState } from 'react';
import useData from '../Hooks/useData'
import { useParams } from "react-router-dom";

function FilmScheduel() {

    const {filmDb, locationShowings, newDaysOfWeek} = useData()
    const {id, location} = useParams();
    const [upcomingShowingToday, setUpcomingShowingToday] = useState(`TODAY`)

    

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
            globalScheduel[i].movies.forEach((movie) => {
                if(movie.id === id) currentFilmScheduel.push({day: day, time_screen: movie.time_screen})
            })
        }
    }
    console.log(cinema)

    return ( 
        <div className="schedule">
            {currentFilmScheduel.map((item, index) => (
                <div key={index}>
                    <h2>
                        {index === 0 && `UPCOMING SHOWINGS FOR ${upcomingShowingToday}`}
                        {index !== 0 && newDaysOfWeek[index]}
                        </h2> 
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
    );
}

export default FilmScheduel;