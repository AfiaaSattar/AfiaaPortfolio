import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";

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
             {/*job containers*/}
            <div className="A">
                <span className="B">Z</span>
                <span className="C">Zain Iraq</span>
            </div>

            
                {zainPositions.map((item) => (
                    <CardItem key={item.id} $color={item.themeColor}>
                      <div>
                        <img className="icon" src={item.icon} alt={item.title} />
                      </div> 
                      <div>
                        <span>{item.title}</span>
                        <div>{item.date}</div>
                       </div> 
                    </CardItem>
                ))}
        
           <div className="A">
                <span className="B">IP</span>
                <span className="C">Integrated Path</span>
            </div>
               {IPPositions.map((item) => (
                    <CardItem key={item.id} $color={item.themeColor}>
                      <div>
                        <img className="icon" src={item.icon} alt={item.title} />
                      </div> 
                      <div>
                        <span>{item.title}</span>
                        <div>{item.date}</div>
                       </div> 
                    </CardItem>
                ))}
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