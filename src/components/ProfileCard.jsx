import personalPic from '../assets/react.svg';
export default function ProfileCard(){
    return(
        <div className="profile-card">

           <div className="profile-header">
            <img src={personalPic} className="profile-img"/>
            <span className="spa"></span>
           </div>


        </div>
    );
}