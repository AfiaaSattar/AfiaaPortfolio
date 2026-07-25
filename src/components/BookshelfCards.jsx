import { FaBookOpen, FaCheckCircle } from "react-icons/fa";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";

export default function BookshelfCards(){
    const bookshelf = [
        {
            id: 1,
            icon: <FaCheckCircle />,
            bookName: "Clean Code",
            writerName: "Robert C. Martin",
            tags: ["Completed", "Engineering"]
        },
                {
            id: 1,
            icon: <FaCheckCircle />,
            bookName: "Clean Code",
            writerName: "Robert C. Martin",
            tags: ["Completed", "Engineering"]
        },
                {
            id: 1,
            icon: <FaCheckCircle />,
            bookName: "Clean Code",
            writerName: "Robert C. Martin",
            tags: ["Completed", "Engineering"]
        },
    ]
    return(
        <div className="bookshelf-cards">
            <CardHeader>
                <CardLeftSide>
                    <FaBookOpen className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Digital Bookshelf</h3>
                        <span className="card-text">Reading Journey</span>
                    </CardTextBox>
                </CardLeftSide>        
            </CardHeader>
            {/*Bookshelf bosy*/}

            {bookshelf.map((item) => (
                <div key={item.id} className="toast-position-container"> 
                    <span>{item.bookName}</span>
                    <span>{item.icon}</span>
                    <p>{item.writerName}</p>
                    {item.tags.map((tag,index) => (
                        <span key={index} className="custom-tag">
                         {tag}
                        </span>
                    ))}
                </div>    
            ))}
             <div className="Featured-Certificate-footer">
                <div className="dev">
                    <span>3</span>
                    <p>Completed</p>
                </div>
                <div className="leaderShip">
                    <span>2</span>
                    <p>In Progress</p>
                </div>
                <div className="tech">
                    <span>4</span>
                    <p>Total</p>
                </div>
            </div>
        </div>
    );
}