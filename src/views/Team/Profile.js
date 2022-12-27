// import {data} from './components/Profile.css'
import "./Team.css"


const Profile = ({name, position}) => {
    return (
        <div>
            <div className="mini-box">
                <div className="mini-box-circle">
                    <h2 className="mini-box-number">{name}</h2>
                    <h3 className="mini-box-text">{position}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile