import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import zain from "../assets/zain.png";
import IP from  "../assets/IP.jpg";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import { CardItem } from "../styled/CardItem.js";
import { zainPositions, IPPositions } from "../data/professionalExperience.js";
export default function ProfessionalExperience(){
    return(
        <div className="professional-experience">
            {/*professional-experience-header*/}
            <CardHeader>
                <CardLeftSide>
                    <PiBuildingApartmentDuotone className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Professional Experience</h3>
                        <span className="card-text">Sales · B2B · IT Support</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSide>
                    <span>5+ yrs</span>
                </CardRightSide>      
            </CardHeader>
             {/*job containers --1--*/}
            <div className="A">
                <img className="icon" src={zain} alt="Zain Iraq" />
                <h4>Zain Iraq</h4>
            </div> 
            <div style={{margin: "0px 50px"}}>
                {zainPositions.map((item) => (
                    <CardItem key={item.id} $color={item.themeColor}>
                          <item.icon className="jobsIcon"  style={{ color: `${item.themeColor}90` }}/>
                      <div>
                        <span>{item.title}</span>
                        <div>{item.date}</div>
                      </div> 
                    </CardItem>
                ))}   
                </div> 
              {/*job containers --2--*/}    
            <div className="A">
                <img className="icon" src={IP} alt="Zain Iraq" />
                <h4>INTEGRATED PATH</h4>
            </div> 
             <div style={{margin: "0px 50px"}}>
               {IPPositions.map((item) => (
                    <CardItem key={item.id} $color={item.themeColor}>
                         <item.icon className="jobsIcon" style={{ color: `${item.themeColor}90` }}/>
                      <div>
                        <span>{item.title}</span>
                        <div>{item.date}</div>
                      </div> 
                    </CardItem>
                ))}
               </div>
            <br />
            <hr />
            <br />
            
            <div className="Featured-Certificate-footer">
                <div className="dev">
                    <span>2019</span>
                    <p>Started</p>
                </div>
                <div className="leaderShip">
                    <span>2</span>
                    <p>Companies</p>
                </div>
                <div className="tech">
                    <span>4</span>
                    <p>Roles</p>
                </div>
            </div>

        </div>
    );
}