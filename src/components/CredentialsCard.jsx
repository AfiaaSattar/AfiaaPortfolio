
import { FiAward } from "react-icons/fi";
export default function CredentialsCards(){
    return(
        <div className="credentials-cards">
            <div className="credentials-header">
                <div className="credentials-left-side">
                   <FiAward className="fiAwardClass" />
                    <div className="credentials-text-box">
                        <h3>Credentials</h3>
                        <span>Certifications & Awards</span>
                    </div>
                </div>   
               <div className="credentials-right-side">
                    <span> 42 total</span>
               </div>        
            </div>
        </div>
    );
}