import { GiPublicSpeaker, GiCrown } from "react-icons/gi";
import {
  CardHeader,
  CardLeftSide,
  CardRightSideToast,
  CardTextBox,
} from "../styled/CardHeader.js";
import triple from "../assets/triple.png";
import { FooterBtn } from "../styled/Footerbtn.js";
import {clubs} from "../data/toastmasters.js";
import {CardFooter, CardFooterItem} from "../styled/CardFooter.js";
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
            <CardHeader>
                <CardLeftSide>
                    <GiPublicSpeaker className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Toastmasters Library</h3>
                        <span className="card-text">4+ Years · 3 Clubs · 5 Roles</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSideToast>
                    <span className="award">
                        <img src={triple} alt="Triple Crown Award" />
                        Triple Crown Award
                    </span>
                </CardRightSideToast>      
            </CardHeader>
            {/*Toastmasters-card-body*/}
            <CardFooter>      
                {clubs.map((item) => (
                <CardFooterItem key={item.id} $color={item.themeColor}>
                    <span>{item.shortName}</span>
                    <p>{item.name}</p>
                </CardFooterItem>
                ))}
            </CardFooter>
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
            <FooterBtn>
                <button>View Full Toastmasters Journey</button> 
            </FooterBtn>
        </div>
    );
}