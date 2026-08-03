import { FaBookOpen } from "react-icons/fa";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import AfiaaBook from "../assets/AfiaaBook.png";
import {BSCardItem, ImageSection, BookDescription, BookShellFooter, BSFooterContainer} from "../styled/Book.js";
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
              <BSCardItem $color={item.themeColor}>
                    <ImageSection>
                        <img alt={item.imageAlt} src={item.imag}/>
                    </ImageSection>

                    <BookDescription>
                        <h5>{item.bookName}</h5>
                        <p style={{ color: "#956fb8" }}>{item.writerName}</p>
                        <p>{item.desc}</p>
                    </BookDescription>    
              </BSCardItem>    
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
    <BookShellFooter>
      <BSFooterContainer>
        <div>
          <p>More books exist.</p>
          <p>My portfolio has boundaries.</p>
          <p>
            My <span className="curiosity">curiosity</span> doesn't.
          </p>
        </div>

        <img src={AfiaaBook} alt="Afiaa's Book" />
      </BSFooterContainer>
    </BookShellFooter>            
     </div>
    );
}