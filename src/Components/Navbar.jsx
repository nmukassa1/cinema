import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,
        faMagnifyingGlass, 
        faBars, 
        faXmark
    } from '@fortawesome/free-solid-svg-icons'
// import {faFacebookSquare,
//         faInstagramSquare,
//         faXTwitter,
//         faYoutube,
//         faTiktok
// } from '@fortawesome/free-brands-svg-icons'

import {useRef} from 'react'

function Navbar() {

    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    function handleDropdownMenu(){
        if(isDropdownMenuOpen === false){
            // dropdownMenuu.current.style.display = 'block'
            dropdownMenuu.current.style.right = '0'
            setIsDropdownMenuOpen(!isDropdownMenuOpen)
        } else{
            setIsDropdownMenuOpen(!isDropdownMenuOpen)
            dropdownMenuu.current.style.right = '-100vw'
            // dropdownMenuu.current.style.display = 'none'
        }
    }

    const dropdownMenuu = useRef()

    console.log('NOTE: Come back to finish off the dropdown nav menu for mobile & Tablet. Also fix the side scrolling issue. If in doubt, create a different animation')
    return ( 
        <header className='container'>
            <Link to="/" className='logo'>
                <img src={require('../Assets/vue-logo.webp')} alt="logo" />
            </Link>

            {/* Desktop Nav */}
            <nav className='desktop navbar-pages'>
                <Link to="">what's on</Link>
                <Link>trailers</Link>
                <Link>coming soon</Link>
                <Link>big screen events</Link>
                <Link>gift cards</Link>
            </nav>

            <div className='user'>
                <div id="user-menu">
                    <Link>Log In</Link>
                    <Link>Join</Link>
                </div>

                <div id="account_search">
                    <button>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>

            <div id='menu'>
                <button 
                onClick={handleDropdownMenu}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            {/* Mobile Nav / Dropdown Menu */}
            {/* COME BACK TO! */}
            <div ref={dropdownMenuu} className='menu-dropdown'>
                <div className="menu-dropdown__container container">
                    <div className="close-button">
                        <button onClick={handleDropdownMenu}>{<FontAwesomeIcon icon={faXmark} />}</button>
                    </div>

                    <nav className='mobile navbar-pages'>
                        <Link to="">what's on</Link>
                        <Link>trailers</Link>
                        <Link>coming soon</Link>
                        <Link>big screen events</Link>
                        <Link>gift cards</Link>
                    </nav>

                    <div className="menu-dropdown__socials">
                     {/* <FontAwesomeIcon icon={faFacebookSquare} />
                     <FontAwesomeIcon icon={faXTwitter} />
                     <FontAwesomeIcon icon={faInstagramSquare} />
                     <FontAwesomeIcon icon={faYoutube} />
                     <FontAwesomeIcon icon={faTiktok} /> */}
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Navbar;