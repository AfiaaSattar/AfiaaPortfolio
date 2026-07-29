import { FaBookOpen } from "react-icons/fa";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import test from "../assets/1.jpg";
import {CardItem, CardContent, TagsContainer, CustomTag} from "../styled/CardItem.js";
import {RoleDescription, AwardSection, SmallText, MainPosition} from "../styled/Toastmasters.js";
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
                <CardItem 
                 $color={item.themeColor}
                 style={{ alignItems: "center" }}
                 >
                    <AwardSection>
                        <img alt={item.imageAlt} src={test}/>
                    </AwardSection>
                    
                    <RoleDescription>
                        <h5>{item.bookName}</h5>
                        <p>{item.writerName}</p>
                        <p>{item.desc}</p>
                    </RoleDescription>
                    
                </CardItem>    
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