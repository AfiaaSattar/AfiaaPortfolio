import { BsFillBuildingsFill } from "react-icons/bs";
export default function TechnicalTimelineCards(){
    const technicalExperience = [
       {
        id: 1,
        icon: "</>",
        title: "IT Technical Assistant",
        situation: "CURRENT",
        workPlace: "University of Technology",
        date: "2022 – Present",
        description: "Providing technical support, maintaining university systems, and managing IT infrastructure across departments.",
        tags: ["React", "JavaScript", "CSS"],
        themeColor: "green"
       },
       {
        id: 2,
        icon: "</>",
        title: "Website Unit Head",
        situation: "ACTIVE",
        workPlace: "University of Technology",
        date: "Jan 2026 – Present",
        description: "Leading the university's official web presence — managing, designing, and publishing content on the WordPress platform.",
        tags: ["React", "JavaScript", "CSS"],
        themeColor: "green"
       },
       {
        id: 3,
        icon: "</>",
        title: "Frontend Developer",
        situation: "SELF-TAUGHT",
        workPlace: "Independent — this portfolio is proof",
        date: "2022 – Present",
        description: "Self-taught React, JavaScript, CSS and modern tooling. Built this entire portfolio from scratch as a live demonstration of those skills.",
        tags: ["React", "JavaScript", "CSS"],
        themeColor: "green"
       },
    ]
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
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                    <p>{item.situation}</p>
                    <p>{item.workPlace}</p>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                    <p>{item.tags}</p>
                   </div> 
                )}
                      
        </div>
    );
}