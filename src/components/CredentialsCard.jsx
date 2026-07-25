import { FiAward } from "react-icons/fi";
import toefl from "../assets/toefl.PNG";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";

export default function CredentialsCards(){

    return(
        <div className="credentials-cards">
            <CardHeader>
                <CardLeftSide>
                   <FiAward className="fiAwardClass" />
                    <CardTextBox>
                        <h3 className="card-title">Credentials</h3>
                        <span className="card-text">Certifications & Awards</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSide>
                    <span>42 Total</span>
                </CardRightSide>      
            </CardHeader>
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