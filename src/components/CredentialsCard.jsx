import { FiAward } from "react-icons/fi";
import toefl from "../assets/toefl.png";
import {
  CardHeader,
  CardLeftSide,
  CardRightSide,
  CardTextBox,
} from "../styled/CardHeader.js";
import { certificate } from "../data/credentials.js";
import { CardFooter, CardFooterItem} from "../styled/CardFooter.js";
import { FooterBtn } from "../styled/Footerbtn.js";
import { Link } from "react-router-dom";
export default function CredentialsCards(){
    return(
        <div className="credentials-cards">
            <CardHeader>
                <CardLeftSide>
                   <FiAward className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Credentials</h3>
                        <span className="card-text">Certifications & Awards</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSide>
                    <span>42 Total</span>
                </CardRightSide>      
            </CardHeader>
            {/* The body of the credentials-cards */}
 <div className="Featured-Certificate-container">
    <div className="Featured-Certificate">
     <img src={toefl} alt="TOEFL Certificate" />
        <div className="Featured-Certificate-text">
            <span className="certificate-label">Featured Certificate</span>
            <h4>TOEFL iBT</h4>
            <div className="certificate-tags">
                <span>Score: 90/120</span>
                <span>Level: B2</span>
            </div>
            <span>Issued: May 2026 · Official ETS Certificate</span>
        </div>
      <span className="verified">Verified</span>
     </div> 
    {/* Footer of the Featured-Certificate */}
    <CardFooter>
        {certificate.map((item) => (
        <CardFooterItem key={item.id} $color={item.themColor} >
            <img src={item.img} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.description}</p>
        </CardFooterItem >
    ))}   
    </CardFooter>    
  </div>  
{/*View All Credentials*/}
<Link to="/credentials" className="view-all-credentials">
    <FooterBtn>
            <button>Browse All Credentials </button>
    </FooterBtn>
</Link>
</div>
    );
}