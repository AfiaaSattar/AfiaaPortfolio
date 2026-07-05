
import { FiAward } from "react-icons/fi";
import toefl from "../assets/toefl.PNG";
export default function CredentialsCards(){
    return(
        <div className="credentials-cards">
            <div className="credentials-header">
                <div className="credentials-left-side">
                   <FiAward className="fiAwardClass" />
                    <div className="credentials-text-box">
                        <h3>Credentials</h3>
                        <span>Certifications & Awards</span>
                    </div>
                </div>   
               <div className="credentials-right-side">
                    <span> 42 total</span>
               </div>        
            </div>
            {/* The body of the credentials-cards */}
            <div className="Featured-Certificate">
                <img src={toefl} />
                 <div className="Featured-Certificate-text">
                    <span> Featured Certificate </span>
                    <h4>Meta Advanced React</h4>
                    <span>Meta Platforms · Issued 2026</span>
                 </div>
                 <span className="verified">Verified</span>
            </div>
            {/* Footer of the Featured-Certificate */}
            <div className="Featured-Certificate-footer">
                <div className="dev">
                    <span>+17</span>
                    <p>Dev</p>
                </div>
                <div className="leaderShip">
                    <span>+10</span>
                    <p>LeaderShip</p>
                </div>
                <div className="tech">
                    <span>+15</span>
                    <p>Tech</p>
                </div>
            </div>
            {/*View All Credentials*/}
            <div className="credentials-button">
                 <button>View All Credentials</button>
            </div>
        </div>
    );
}