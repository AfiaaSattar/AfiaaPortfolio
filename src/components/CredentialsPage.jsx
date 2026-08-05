import { Link } from "react-router-dom";
import { categories, certificates } from "../data/credentials.js";
import test from "../assets/google.webp";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";

import { MdOutlineOpenInNew } from "react-icons/md";
export default function CredentialsPage() {
    const [searchTerm, setSearchTerm] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("All");

{/* Search Functionality */}
    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
    }
    const filteredCertificates = certificates.filter((certificate) => {
        const matchSearch = certificate.certificateName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

        const matchCategory = 
        selectedCategory === "" ||
        selectedCategory === "All" ||
        certificate.category === selectedCategory;
        return matchSearch && matchCategory;
});
   
{/* Render the component */}
return (
    <div style={{ padding: "50px" }}>
      <Link to="/" className="back-to-portfolio">
        <button style={{borderRadius: "10px"}} className="credentials-registry"> 
            <MdArrowBack />
             Back to Portfolio
        </button>
      </Link> 
      <p className="credentials-registry">Credentials Registry</p>
      <h1> All Credentials</h1>
      <p>42 certifications & awards across Web Development, Leadership, and Tech Support</p>

{/* Search and Categories */}
      <div className="credentials-search">
        <input onChange={handleSearchChange} value={searchTerm} className="credentials-search-input" type="text" placeholder="Search Credentials" />
       
        <div className="credentials-categories">
            {categories.map((category) => (
                <button onClick={() => setSelectedCategory(category)}
                key={category}
                className={`credentials-category ${selectedCategory === category ? "active" : ""}`}
                >
                  {category}
                </button>
            ))}
        </div>     
      </div>
{/* Credentials Cards */}
     <p>Showing 42 of 42 credentials</p>
            
    <div className="credentials-search-cards"> 
        {filteredCertificates.map((certificate) => (

        <div className="credentials-search"> 

            <div className="credentialsontainer">
            <certificate.icon className="headerTag" style={{ color: "#2295b4c0" }} />  
                  <div className="credentials-details">
                    <p>{certificate.companyName}</p>
                    <p>{certificate.date}</p>
                </div>
            </div>

            <h4>{certificate.certificateName}</h4>

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