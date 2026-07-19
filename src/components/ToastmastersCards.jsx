import { GiPublicSpeaker, GiCrown } from "react-icons/gi";
export default function ToastmastersCard(){
    return(
        <div className="toastmasters-card">
         {/*Toastmasters-card-header*/}
            <div className="toastmasters-header">
                <div className="toastmasters-left-side">
                  <GiPublicSpeaker className="fiAwardClass"/>
                    <div className="toastmasters-text-box">
                        <h3>Toastmasters Library</h3>
                        <span>4+ Years · 3 Clubs · 5 Roles</span>
                    </div>
                </div>   
                <div className="toastmasters-right-side">
                    <span> <GiCrown /> Triple Crown Award</span>
                </div>        
            </div>
        </div>
    );
}