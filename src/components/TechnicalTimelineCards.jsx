import { BsFillBuildingsFill } from "react-icons/bs";
export default function TechnicalTimelineCards(){
    const technicalExperience = [
       {
        id: '1',
        title: 'IT Technical Assistant',
        stutes: 'Current',
        place: 'University of Technology',
        date: 'Sep 2024 – Present',
        des: 'Providing technical support, maintaining university systems, and managing IT infrastructure across departments.',
        tags: ["react" ,"js"],
        themeColor: "green"
       },
       {
        id: '2',
        title: 'Website Unit Head',
        stutes: 'Active',
        place: 'University of Technology',
        date: 'Jan 2026 – Present',
        des: 'Leading the universitys official web presence — managing, designing, and publishing content on the WordPress platform.',
        tags: ["react" ,"js"],
        themeColor: "green"
       },
    ]
    const TimelineCard = ({
        title,
        stutes,
        place,
        date,
        des,
        tags,
        themeColor
    })
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
            {/*atechnical-timeline-body*/}
            <div>
                {technicalExperience.map(item) => (

                )}
            </div>
            </div>
        </div>
    );
}