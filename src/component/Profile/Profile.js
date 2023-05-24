import './Profile.css';
import ProfilePhoto from '../../Images/image-jeremy.png';
import Profolio from '../profolio/Profolio';
const Profile = (props) => {
   
    const porfolio_Items = props.dis.map((item) => {
        return <Profolio key={item.id} description={item.details} click={() => props.click(item.id)} color={item.color}/>
    })
    return (
        <>
            <div className='profile-content'>
                <div className='profile-identifiy'>
                    <div className='profile-photo'>
                        <img src={ProfilePhoto} alt='' />
                    </div>
                    <div className='profile-name'>
                        <p>Report for</p>
                        <h3>Jermey Robson</h3>
                    </div>
                </div>
                <div className='profile-side-bar'>
                    <ul className='menu'>
                        {porfolio_Items}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Profile;