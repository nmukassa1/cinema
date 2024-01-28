import useData from '../Hooks/useData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useState, useRef} from 'react'

function CinemaLocationBox({placeholder, setPlaceholder}) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdown = useRef()
    function toggle(){
        if(isDropdownOpen === false){
            //Make dropdown slide in when on mobile
            if(window.innerWidth < 900){
                dropdown.current.style.right = '0'
            } else{
                //Else animate for desktop
                dropdown.current.style.display = 'block'
            }
            setIsDropdownOpen(!isDropdownOpen)
        } else {
            if(window.innerWidth < 900){
                dropdown.current.style.right = '-100vw'
            }else{
                dropdown.current.style.display = 'none'
                console.log('ln 27')
            }
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    const {locationShowings} = useData();

    let locations = [];

    locationShowings.forEach((location) =>{
        locations.push(location.location)
    })

    const handleSelectedCinema = (cinema) => {
        setPlaceholder(cinema)
        // console.log(placeholder);
         //Make dropdown slide out when on mobile
         if(window.innerWidth < 900){
            dropdown.current.style.right = '-100vw'
        } else{
            //Else animate for desktop
            dropdown.current.style.display = 'none'
        }
    } 

    return ( 
    <div className='cinema-finder-venue-selector-box'>
        <div className='cinema-finder__dropdown'>
            <button className='dropdown-opener' onClick={toggle}>
                <div>{placeholder}</div>
                <span className='cinema-finder__dropdown-icon'>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </button>

            <div ref={dropdown} className={`dropdown-menu`}>
                <div id="dropdown-menu__header">
                    <h3 className="dropdown-menu__title">
                        CHOOSE YOUR VUE</h3>
                    <button onClick={toggle}><FontAwesomeIcon icon={faXmark} /></button>
                </div>

                <div className="dropdown-menu__search">
                    <input type="text" placeholder='Browse Vue A-Z'/>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <ul className="dropdown-menu__list">
                    {locations.map((item) => (
                        <li key={item}>
                            <button className='dropdown-item' onClick={() => handleSelectedCinema(item) }>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <Link to={`/cinema/${placeholder}/whats-on`} className='cinema-finder__button'>GO</Link>
    </div>
     );
}

export default CinemaLocationBox;