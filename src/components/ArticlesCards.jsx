import { IoMdBook } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { HiArrowNarrowRight } from "react-icons/hi";
import styled from "styled-components";
import toast from "../assets/toast.png";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import { FooterBtn } from "../styled/Footerbtn.js";
import { ArticalCards, ArticalCardsItem } from "../styled/Articles.js";
import { articles } from "../data/articles.js";

export default function ArticlesCards(){
    return(
        <div className="articles-card">
        {/*articles-header*/}
            <CardHeader>
                <CardLeftSide>
                   <IoMdBook className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Recent Articles</h3>
                        <span className="card-text">Published writing & insights</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSide>
                    <span>43 posts</span>
                </CardRightSide>      
            </CardHeader>
        {/*articles-body*/}    
        <ArticalCards> 
            {articles.map((item) => (
                <ArticalCardsItem $color={item.themeColor}>
                <div className="articles-body-header" style={{backgroundImage: `url(${item.pic})`}}>
                    <span>Medium</span>
                    <span>{item.time}</span>
                </div>
                <h5>{item.title}</h5>
                <p> {item.desc}</p>
                <hr className="hr1" />
                <div className="articles-body-footer">
                    <span> <CiCalendar />{item.publish}</span>
                    <a>
                        Read on Medium <HiArrowNarrowRight />
                    </a>    
                </div>
                </ArticalCardsItem>
                    ))}
        </ArticalCards>
        {/*View All Credentials*/}
            <FooterBtn>
               <button>View All on Medium</button>
            </FooterBtn>
        </div>
    );
}