// import {data} from './components/Profile.css'
import "./Team.css"


const Profile = ({name, position}) => {
    return (
        <div>
            <div className="circle-space">
                <div className="circle">
                    <h2 className="circle-name">{name}</h2>
                    <h3 className="circle-position">{position}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile