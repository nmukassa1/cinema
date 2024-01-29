import CinemaLocation from '../Components/CinemaLocation';
import HeroSlide from "../Components/HeroSlide";
import TopFilms from "../Components/TopFilms";

import useData from "../Hooks/useData";
import useScrollToTop from '../Hooks/useScrollToTop';
import {useState, useEffect} from 'react'

function Home() {
    const {locationShowings} = useData()
    const {scrollToTop} = useScrollToTop()
    const [placeholder, setPlaceholder] = useState(locationShowings[0].location);
    
    useEffect(() => {
        scrollToTop()
    }, [])

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