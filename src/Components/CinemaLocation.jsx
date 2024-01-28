import CinemaLocationBox from './CinemaLocationBox';

function CinemaLocation({placeholder, setPlaceholder}) {
    

    return ( 
        <div className='cinema-finder container'>
            <h2 className='section-title'>
                SEE WHAT'S ON AT
            </h2>

            <CinemaLocationBox placeholder={placeholder} setPlaceholder={setPlaceholder} />
            
        </div>
    );
}

export default CinemaLocation;