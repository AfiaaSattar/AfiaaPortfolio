import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";


export default function ProfessionalExperience(){
    const zainPositions = [
        {
            id: 1,
            icon: <IoCall />,
            title: " Outbound Sales — Part-time",
            date: "Sep 2019 – Jan 2021",
        },
        {
            id: 2,
            icon: <IoCall />,
            title: " Outbound Sales — Full-time",
            date: "Jan 2021 – Jun 2022",
        },
        {
            id: 3,
            icon: <HiUsers />,
            title: " B2B Key Account Management",
            date: "Jun 2022 – Mar 2023",
        }
    ];

    const IPPositions = [
        {
            id: 1,
            icon: <IoCall />,
            title: " IT Support Engineer",
            date: "Mar 2023 – Mar 2025",
        }
    ]
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
                    <div key={item.id} className="position-container" >
                      <div>
                        <span>{item.icon}</span>
                      </div> 
                      <div>
                        <span>{item.title}</span>
                        <div>{item.date}</div>
                       </div> 
                    </div>
                ))}
        
           <div className="A">
                <span className="B">IP</span>
                <span className="C">Integrated Path</span>
            </div>
               {IPPositions.map((item) => (
                    <div key={item.id} className="position-container" >
                       <div>
                        <span>{item.icon}</span>
                       </div>
                       <div> 
                        <span>{item.title}</span>
                        <div>{item.date}</div>
                      </div>
                    </div>
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