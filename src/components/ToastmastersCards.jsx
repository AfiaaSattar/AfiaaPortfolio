import { GiPublicSpeaker, GiCrown } from "react-icons/gi";
export default function ToastmastersCard(){
    const ToastPositions = [
        {
            id: 1,
            date: 2021,
            clubName: " Baghdad TM Club",
            position: "Secretary",
            fullDate: "Sep 2021 – May 2022",
            tags: ["Team Management"]
        },
        {
            id: 2,
            date: 2022,
            clubName: " Baghdad TM Club",
            position: "Secretary",
            fullDate: "Sep 2021 – May 2022",
            tags: ["Team Management"]
        },
        {
            id: 3,
            date: 2023,
            clubName: " Tigris League TM Club",
            position: "Member",
            fullDate: "Aug 2023 – Present",
            tags: ["Coaching", "Team Management"]
        },
        {
            id: 4,
            date: 2025,
            clubName: " Baghdad Toastmasters",
            position: "Member",
            fullDate: "Mar 2025 – Oct 2025",
            tags: ["Leadership"]  
        },
                {
            id: 5,
            date: 2025,
            clubName: " Tigris League TM Club",
            position: "Presedent",
            fullDate: "Jun 2025 – Present",
            tags: ["Coaching", "Team Management","Training"]  
        }
    ]
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
            <div className="Featured-Certificate-footer">
                <div className="dev">
                    <span>BTC</span>
                    <p>Baghdad Toastmasters Club</p>
                </div>
                <div className="leaderShip">
                    <span>TLTM</span>
                    <p>Tigirs League TM Club</p>
                </div>
            </div>
          {/*Toastmasters-body-loops*/}  
            {ToastPositions.map((item) => (
                   <div key={item.id} className="toast-position-container" >
                        <span>{item.date}</span>
                        <span className="club-name">{item.clubName}</span>
                        <h4>{item.position}</h4>
                        <p>{item.fullDate}</p>
                        <span>
                            {item.tags.map((tag,index) => (
                                <span key={index} className="custom-tag"> 
                                {tag}
                                </span>
                            ))}
                        </span>
                   </div> 
                ))}

              {/*Toastmasters-footer-button*/}   
                <div className="toast-button-wrapper">
                   <button>View Full Toastmasters Journey</button> 
                </div>
        </div>
    );
}