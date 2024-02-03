import useData from '../Hooks/useData'
import {useEffect} from 'react'

function DaysOfWeekPanel({filterFilmByDay, setFilterFilmByDay}) {

    const {daysOfWeek, dates} = useData()

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

    function handleHighlight(e){
        if(e.target.id >= 3) return
        const elements = Object.values(document.getElementsByClassName('day'));

        // Remove highlight button that's active
        elements.forEach(el => {
            if(el.classList.contains('active')) el.classList.remove('active')
        });
        
        // Highlight button that was clicked
        e.target.classList.add('active')

        handleFilterFilmByDay(e)
    }

    function handleFilterFilmByDay(e){
        if(parseInt(e.target.id) >= 3) return
        setFilterFilmByDay(parseInt(e.target.id))
        setFilterFilmByDay( daysOfWeek[dates[e.target.id].getDay()])
    }
    

    return ( 
    <ul className="days-of-week">
        {dates.map((day, index) => (
            <li key={index}>
                <button  
                    id={index}
                    className={`day ${index === 0 ? ('active') : ''}`}
                    onClick={(e) => handleHighlight(e)}
                >
                    {index === 0 && ('Today')}
                    {index === 1 && ('Tomorrow')} 
                    {index > 1 && daysOfWeek[dates[index].getDay()].split('', 3)} 
                </button>
            </li>
        ))}
    </ul>
    );
}

export default DaysOfWeekPanel;