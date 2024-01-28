import CinemaLocation from '../Components/CinemaLocation';
import HeroSlide from "../Components/HeroSlide";
import TopFilms from "../Components/TopFilms";

import useData from "../Hooks/useData";
import {useState} from 'react'

function Home() {
    const {locationShowings} = useData()

    const [placeholder, setPlaceholder] = useState(locationShowings[0].location);
    // const placeholder = locationShowings[0].location;
    return ( 
        <div>
            <HeroSlide />

            <CinemaLocation 
                placeholder={locationShowings ? placeholder : 'Browse A-Z'} 
                setPlaceholder={locationShowings ? setPlaceholder : null}
            />

            <TopFilms 
                placeholder={locationShowings ? placeholder : 'Browse A-Z'} 
            />
        </div>
    );
}

export default Home;