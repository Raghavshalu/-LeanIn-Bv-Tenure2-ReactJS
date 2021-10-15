import image from './image.jpg';
import { AiFillCheckCircle } from "react-icons/ai";
const Profile = () => 
    {
        const name="SHALINI KUMARI";
        let info="Senior Developer,India";
    return ( 
        <div>
            <img src={image} alt="Profile image" className="profile"/>
            <h4 className="pro">{name}<AiFillCheckCircle className="check" size="15"/></h4>
            <p className="name">{info}</p>
        </div>
            
     );
}
export default Profile;