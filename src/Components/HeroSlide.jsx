import useData from "../Hooks/useData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'

function HeroSlide() {

    const {filmDb} = useData()
    
    useEffect(() => {
        const slides = document.querySelectorAll('.slide-item');
        const slide = document.querySelector('.slide');
        
        let i = 1;
        

        function newSlide(){
            let slideWidth = slide.clientWidth
            let slideFinish = slideWidth * slides.length;
            if(slideWidth * i !== slideFinish){
                    slide.style.transform = `translateX(-${slideWidth * i}px)`;
                i++
            } else{
                    slide.style.transform = `translateX(0px)`
                i = 1
            }
        } 

        setInterval(newSlide, 6000)
    }, [])


    return ( 
        <div className="hero-slide">
            <div  className="slide">
                {/* <div className="slide-item">
                    <img src={require('../Assets/locations/Westfield/Westfield-Shepherds-Bush-Hero.webp')} alt="" />
                </div> */}
                {filmDb && 
                    Object.values(filmDb).map((item, key) => (
                        <div className="slide-item slide-item__movie" key={item.title}>
                            <img src={item.img} alt="" />

                            <div className="control-panel">
                                <button className="control-panel__play-trailer">
                                    <FontAwesomeIcon icon={faPlay} /> 
                                </button>

                                <div className="control-panel__title">
                                    <h1>{item.title}</h1>
                                    <div className="age-classification">
                                        <img src={item.age} alt="" />
                                        <span>Now showing at your local Vue</span>
                                    </div>
                                </div>

                                <Link className="book-now">Book Now</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HeroSlide;