import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import styled from "styled-components";
export default function TechnicalTimelineCards(){
    const technicalExperience = [
       {
        id: 1,
        icon: <GrTechnology />,
        title: " IT Technical Assistant",
        situation: "CURRENT",
        workPlace: "University of Technology",
        date: "2022 – Present",
        description: "Providing support to faculty and administrative staff, troubleshooting computer-related issues, managing digital documents and data, creating reports and spreadsheets, and assisting with day-to-day technology needs across departments.",
        tags: [
            "Technical Support",
            "Microsoft Office",
            "IT Administration",
            "Problem Solving"
        ],
        themeColor: "green"
       },
       {
        id: 2,
        icon: <AiOutlineGlobal />,
        title: " Website Unit Head",
        situation: "ACTIVE",
        workPlace: "University of Technology",
        date: "Jan 2026 – Present",
        description:  "Leading the university website by managing WordPress content, publishing updates, coordinating website improvements, and ensuring accurate and timely online communication.",
        tags:[
        "WordPress",
        "Content Management",
        "Website Administration",
        "HTML",
        "Digital Content"
        ],
        themeColor: "green"
       },
       {
        id: 3,
        icon: "</>",
        title: " Frontend Developer",
        situation: "SELF-TAUGHT",
        workPlace: "Independent — this portfolio is proof",
        date: "2022 – Present",
        description: "Self-taught React, JavaScript, CSS and modern tooling. Built this entire portfolio from scratch as a live demonstration of those skills.",
        tags: ["React", "JavaScript", "CSS"],
        themeColor: "green"
       },
    ]
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
    return(
        <div className="technical-timeline-cards">
            {/*atechnical-timeline-header*/}
            <div className="technical-header">
                <div className="technical-left-side">
                <BsFillBuildingsFill className="bsFillBuildingsFill"/>
                    <div className="technical-text-box">
                        <h3>Technical Timeline</h3>
                        <span>University · Web · Self-taught Dev </span>
                    </div>
                </div>   
                <div className="technical-right-side">
                    <span>2024-Present</span>
                </div> 
              </div>  
            {/*technical-timeline-body*/}

                {technicalExperience.map((item) => 
                   <div className="technical-body" key={item.id}>
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
                   </div> 
                )}             
        </div>
    );
}