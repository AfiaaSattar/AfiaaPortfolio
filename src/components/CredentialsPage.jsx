import { Link } from "react-router-dom";
import { categories, certificates } from "../data/credentials.js";
import test from "../assets/google.webp";

import { MdOutlineOpenInNew } from "react-icons/md";

export default function CredentialsPage() {
  return (
    <div style={{ padding: "50px" }}>
      <Link to="/" className="back-to-portfolio">
        <button> Back to Portfolio</button>
      </Link> 
      <p>Credentials Registry</p>
      <h1> Alll Credentials</h1>
      <p>42 certifications & awards across Web Development, Leadership, and Tech Support</p>

{/* Search and Categories */}
      <div className="credentials-search">
        <input className="credentials-search" type="text" placeholder="Search Credentials" />
       
        <div className="credentials-categories">
            {categories.map((category) => (
                <span
                key={category}
                className="credentials-category"
                >
                  {category}
                </span>
            ))}
        </div>     
      </div>
{/* Credentials Cards */}
     <p>Showing 42 of 42 credentials</p>
            
    <div className="credentials-search-cards"> 
        {certificates.map((certificate) => (

        <div className="credentials-search">

            <div className="credentialsontainer">
            <certificate.icon className="headerTag" style={{ color: "#2295b4c0" }} />        <div className="credentials-details">
                    <p>{certificate.companyName}</p>
                    <p>{certificate.date}</p>
                </div>
            </div>

            <h4>{certificate.certificateName}t</h4>

                <div className="articles-body-footer">
                    <span className="credentials-category" style={{ backgroundColor: "#2294b441", border: "1px solid #2295b4c0", color: "#2295b4c0" }}>
                        {certificate.category}
                    </span>
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="credentials-category">
                        Verify<MdOutlineOpenInNew />
                    </a>    
                </div>
            </div>

                ))}   
     </div>
    </div>
  );
}