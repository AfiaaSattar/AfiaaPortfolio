import { IoMdBook } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";

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

        <div className="articles-body"> 
            <div className="articles-body-header">
                <span>Medium</span>
                <span>8 min read</span>
            </div>
            <h5>Mastering WordPress Security: A Complete Guide</h5>
            <p>h ahiuahfuia uihaukhf hkja hkjf h ahfah jkhfa jkhfa
                kja lkfj lkaj sfklj ksfj klj skafj jj flkajflkjsjf 
            </p>
            <div className="articles-body-footer">
                <span> <CiCalendar /> May 18,2026</span>
            </div>
        </div>
        
        <div className="articles-body"> 
            <div className="articles-body-header">
                <span>Medium</span>
                <span>8 min read</span>
            </div>
            <h5>Mastering WordPress Security: A Complete Guide</h5>
            <p>h ahiuahfuia uihaukhf hkja hkjf h ahfah jkhfa jkhfa
                kja lkfj lkaj sfklj ksfj klj skafj jj flkajflkjsjf 
            </p>
            <div className="articles-body-footer">
                <span> <CiCalendar /> May 18,2026</span>
            </div>
        </div>

        <div className="articles-body"> 
            <div className="articles-body-header">
                <span>Medium</span>
                <span>8 min read</span>
            </div>
            <h5>Mastering WordPress Security: A Complete Guide</h5>
            <p>h ahiuahfuia uihaukhf hkja hkjf h ahfah jkhfa jkhfa
                kja lkfj lkaj sfklj ksfj klj skafj jj flkajflkjsjf 
            </p>
            <div className="articles-body-footer">
                <span> <CiCalendar /> May 18,2026</span>
            </div>
        </div>

        {/*View All Credentials*/}
            <div className="articles-button">
               <button>View All on Medium</button>
            </div>
        </div>
    );
}