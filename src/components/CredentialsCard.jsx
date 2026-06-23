
import {  FaRegEnvelope } from "react-icons/fa";
export default function CredentialsCards(){
    return(
        <div className="credentials-cards">
            <div className="credentials-header">
                <div className="credentials-left-side">
                    < FaRegEnvelope />
                    <h4>credentials</h4>
                    <span>Certifications & Awards</span>
                </div>   
               <div className="credentials-right-side">
                    <span> 42 total</span>
                </div>        
            </div>
        </div>
    );
}