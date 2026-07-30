import { FaBookOpen } from "react-icons/fa";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import test from "../assets/AfiaaBook.png";
import { CardContent, TagsContainer, CustomTag, CardItem} from "../styled/CardItem.js";
import { AwardSection, SmallText, MainPosition} from "../styled/Toastmasters.js";
import {CardItem2, BookDescription, ImageSection, CardItemFooter2, CardItemPic} from "../styled/Book.js";
import { bookshelf, progress} from "../data/bookshelf.js";
import { CardFooter, CardFooterItem } from "../styled/CardFooter.js";
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&display=swap"
  rel="stylesheet"
/>
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
   {/*Bookshelf body*/}
            {bookshelf.map((item) => (
              <CardItem2 $color={item.themeColor}>
                    <ImageSection>
                        <img alt={item.imageAlt} src={item.imag}/>
                    </ImageSection>

                    <BookDescription>
                        <h5>{item.bookName}</h5>
                        <p>{item.writerName}</p>
                        <p>{item.desc}</p>
                    </BookDescription>
                    
              </CardItem2>    
            ))}
   {/*Bookshelf footer*/}
           <CardFooter>      
                {progress.map((item) => (
                <CardFooterItem key={item.id} $color={item.themeColor}>
                    <span>{item.num}</span>
                    <p>{item.status}</p>
                </CardFooterItem>
                ))}
            </CardFooter>
 {/*Bookshelf picture*/}
<CardItemPic>
  <CardItemFooter2>
    <div>
      <p>More books exist.</p>
      <p>My portfolio has boundaries.</p>
      <p>
        My <span className="curiosity">curiosity</span> doesn't.
      </p>
    </div>

    <img className="bookimage" src={test} alt="" />
  </CardItemFooter2>
</CardItemPic>            
        </div>
    );
}