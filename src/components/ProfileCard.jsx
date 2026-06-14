import personalPic from '../assets/react.svg';

export default function ProfileCard(){
    return(
        <div className="profile-card">

           <div className="profile-header">
            <div className="avatar-wrapper">
                <img src={personalPic} alt="Afiaa" className="profile-img"/>
                <span className="status-dot"></span>
            </div>
           </div>

        </div>
    );
}