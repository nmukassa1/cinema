import useData from '../Hooks/useData'
import {useEffect, useRef} from 'react'

function DaysOfWeekPanel() {

    const {daysOfWeek} = useData()
    const ref = useRef([])

    const pushRef = (el) => ref.current.push(el)

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



    useEffect(() => {
        if(ref.current){
            //loop over all elements to apply eventlistenr
            ref.current.forEach((item) => {
               item.addEventListener('click', (e) => {
                   //loop over all elements to remove className 'active'
                   ref.current.forEach((item) => {
                       item.classList.remove('active')
                   })
   
                   item.classList.add('active')
               })
           })
        }
    }, [])
    

    return ( 
    <ul className="days-of-week">
        {newDaysOfWeek.map((day, index) => (
            <li key={index}>
                <button 
                    ref={pushRef} 
                    className={`day ${index === 0 ? ('active') : ''}`}
                        >
                    {index === 0 && ('Today')}
                    {index === 1 && ('Tomorrow')} 
                    {index > 1 && day.split('', 3)} 
                </button>
            </li>
        ))}
    </ul>
    );
}

export default DaysOfWeekPanel;