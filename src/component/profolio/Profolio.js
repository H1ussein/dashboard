import './Profolio.css';
const Profolio = (props)=>{
    return(
        <>
        <li onClick={props.click} className='menu-item' style={{color:props.color}}>{props.description}</li>
        </>
    )
}
export default Profolio;