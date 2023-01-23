// import {data} from './components/Profile.css'
import "./Team.css"


const Profile = ({name, position, link}) => {
    return (
        <div>
            <div className="circle-space">
                <div className="circle">
                    <img src={link} alt="Profile Picture"/>
                </div>
                <h2 className="circle-name">{name}</h2>
                <h3 className="circle-position">{position}</h3>
            </div>
        </div>
    );
};

export default Profile