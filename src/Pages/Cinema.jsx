import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useData from "../Hooks/useData";
import useScrollToTop from "../Hooks/useScrollToTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import CinemaLocation from "../Components/CinemaLocation";
import DaysOfWeekPanel from "../Components/DaysOfWeekPanel";
import FilmScheduel from "../Components/FilmScheduel";


function Cinema() {

    const {scrollToTop} = useScrollToTop();
    const {location, id} = useParams();
    const {filmDb, daysOfWeek} = useData()
    const [placeholder, setPlaceholder] = useState(location)
    const [revealDetails, setRevealDetails] = useState('')

    let movie
    if(filmDb) movie = Object.values(filmDb).find((movie) => movie.id === id)

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

    
    const showDetails = () => {
        revealDetails === '' ? setRevealDetails('revealDetails') : setRevealDetails('')
    }

    useEffect(() => {
        scrollToTop();
    }, [])
    

    return ( 
        <div className="film-details">
            <div className="film-details-hero">
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
                                    <button className="full-details__btn" onClick={showDetails}>Full Details</button>
                                    <div className={`details ${revealDetails}`}>
                                        <div className="synopsis">
                                            <h3>Synopsis</h3>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro animi nisi impedit nobis ut quis tempora similique deleniti delectus sunt, eius autem at. Dicta voluptatum adipisci ad, temporibus deserunt corporis?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    <CinemaLocation placeholder={placeholder} setPlaceholder={setPlaceholder}/>

                    <div className="filter">

                        <div className="filter-button">
                            <div className="filter-icon">
                                <FontAwesomeIcon icon={faFilter} />
                            </div>
                            <button>Filter All Films & Events</button>
                        </div>

                        <div className="filter-dropdown">
                            {/* Filters */}
                        </div>
                    </div>

                    <DaysOfWeekPanel />
                    <FilmScheduel />
                </div>
            </div>
        </div>
     );
}

export default Cinema;