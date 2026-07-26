import styled from "styled-components";
import { BsFillBuildingsFill } from "react-icons/bs";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import { technicalExperience } from "../data/technicalTimeline.js";

    const Situation = styled.p`
        background-color: #17a8562e;
        border-radius: 10px;
        border: 1px solid #17a856;
        width: fit-content;
        height: fit-content;  
        padding:  5px 10px;
        font-size: 13px;
    `
    const WorkPlace = styled.p`
    color: #4578ae;
    margin: 0px;
    font-size: 15px;
    `
    const Datex = styled.p`
    color: #64748b;
    margin-top: 7px;
    font-size: 15px;
    `
    const Description = styled.p`
    color: #8091a8;
    margin-top: 7px;
    font-size: 15px;
    `
    const Tags = styled.p`
  
    `
export default function TechnicalTimelineCards(){
    return(
        <div className="technical-timeline-cards">
            {/*atechnical-timeline-header*/}
            <CardHeader>
                <CardLeftSide>
                    <BsFillBuildingsFill className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Technical Timeline</h3>
                        <span className="card-text">University · Web · Self-taught Dev</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSide>
                    <span>2024-Present</span>
                </CardRightSide>      
            </CardHeader>
            {/*technical-timeline-body*/}

{technicalExperience.map((item) => 
    <CardItem  key={item.id} $color={item.themeColor}>
        <div>
            <span className="icon">{item.icon}</span>
        </div>
     <div>
        <span>{item.title}</span>
            <Situation>{item.situation}</Situation>
            <WorkPlace>{item.workPlace}</WorkPlace>
            <Datex>{item.date}</Datex>
            <Description>{item.description}</Description>
                <div className="tags-container">
                    {item.tags.map((tag,index) => (
                        <span key={index} className="custom-tag">
                            {tag}
                        </span>
                    ))}
        </div>
       </div>
    </CardItem> 
)}             
        </div>
    );
}