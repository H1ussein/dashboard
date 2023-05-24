import './App.css';
import Profile from './component/Profile/Profile';
import Cards from './component/Cards/Cards';
import { useState} from 'react';
import porfolioData from '../src/Data/profolioData';
const App = ()=>{
    const [dis, setDis] = useState(porfolioData);
    const[details, setDetails] = useState('Daily');
    function handleColor(id){
        return setDis(prevDis => prevDis.map((d) => {
            if (d.id === id) {
                setDetails(function(prevDetails){
                   prevDetails = d.details;
                   return prevDetails;
                });
                return {
                    ...d,
                    color:'var(--pale)'
                };
            }
            else {
                return {
                    ...d,
                    color:'var(--des)'
                };
            }
        }))

    }
    return(
        <>
         <div className='content'>
            <div className='row'>
                <div className='col-lg-4'>
             <Profile dis = {dis} click = {handleColor}/>
             </div>
             <div className='col-lg-8'>
             <Cards details = {details}/>
             </div>
            </div>
         </div>
        </>
    )
}
export default App;