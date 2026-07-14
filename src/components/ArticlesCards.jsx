import { IoMdBook } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
export default function ArticlesCards(){
    return(
        <div className="articles-card">
        {/*articles-header*/}
            <div className="articles-header">
                <div className="articles-left-side">
                  <IoMdBook className="fiAwardClass"/>
                    <div className="articles-text-box">
                        <h3>Recent Articles</h3>
                        <span>Published writing & insights</span>
                    </div>
                </div>   
                <div className="articles-right-side">
                    <span>3 posts</span>
                </div>        
            </div>

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