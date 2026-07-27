import { FaBookOpen } from "react-icons/fa";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import { bookshelf, progress} from "../data/bookshelf.js";
import { CardFooter, CardFooterItem } from "../styled/CardFooter.js";
export default function BookshelfCards(){
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
           <CardFooter>      
                {progress.map((item) => (
                <CardFooterItem key={item.id} $color={item.themeColor}>
                    <span>{item.num}</span>
                    <p>{item.status}</p>
                </CardFooterItem>
                ))}
            </CardFooter>
        </div>
    );
}