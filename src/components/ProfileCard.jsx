import personalPic from "../assets/afiaa.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SKILLS_DATA, SOCIAL_DATA } from "../data/profile.js";
import { CardContent } from "../styled/CardItem.js";
const SkillTag = styled.div`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  font-size: 13px;
  margin: 10px;
  background: rgba(39, 21, 130, 0.2);
  border: 1px solid rgba(103, 75, 113, 0.4);
  box-shadow: 0 0 19px rgba(103, 75, 113, 0.4);
  color: #c084fc;
  font-family: "Inter", sans-serif;
  padding: 10px 10px;
  border-radius: 20px;
  position: relative;

  @media (max-width: 640px) {
  margin: 5px;
  }
  ${(props) =>
    props.$isHot &&`
    background: rgba(6, 182, 212, 0.05);
    border-color: #06b6d4;
    color: #06b6d4;
    box-shadow: 0 0 12px rgba(6, 182, 212, 0.2);

    &::after{
    content: '';
    height: 6px;
    width: 6px;
    position: absolute;
    background-color: #06b6d4;
    box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4;
    border-radius: 50%;

    top: 70%;
    left: 50%;

    animation: solarOrbit 4s linear infinite;
    }
  
    `}
  @keyframes solarOrbit {
    from {
      transform: translate(-50%, -50%) rotate(0deg) translateX(30px)
        rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg) translateX(30px)
        rotate(-360deg);
    }
  }
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  margin: 4px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
 
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  @media (max-width: 640px) {
  
  }
  ${props => {
    let mainColor = '#c084fc';

    if (props.$type === 'linkedin') mainColor = '#0077b5';
    if (props.$type === 'github') mainColor =  '#f0f6fc';
    if (props.$type === 'medium') mainColor =  '#00ab6c';
    if (props.$type === 'youtube') mainColor = '#ff0000';
    if (props.$type === 'email') mainColor =  '#ea4335';
    
    return `
    color: ${mainColor};
    border-color: ${mainColor}66;
    `;
}};

  &:hover {
  transform: translateY(-2px);
  
  ${props => {
    let mainColor = '#c084fc';

    if (props.$type === 'linkedin') mainColor = '#0077b5';
    if (props.$type === 'github') mainColor =  '#f0f6fc';
    if (props.$type === 'medium') mainColor =  '#00ab6c';
    if (props.$type === 'youtube') mainColor = '#ff0000';
    if (props.$type === 'email') mainColor =  '#ea4335';

    return`
        box-shadow: 0 0 30px ${mainColor}60;
    `
  }}
  }
`;

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={personalPic} alt="Afiaa" className="profile-img" />
        </div>
        <CardContent>
          <span className="eyebrow-text">Digital Portfolio</span>
          <h1 className="main-title">Afiaa Sattar</h1>
          <p className="profile-bio">
           IT Technical Assistant, Web Developer, and Toastmasters 
           President passionate about building modern web applications, leading communities, and creating impactful digital experiences.
          </p>
        </CardContent>
      </div>
{/* Skills Section */}
      <div style={{marginTop: "7px"}}>
        {SKILLS_DATA.map(({ id, name, isHot }) => (
          <SkillTag key={id} $isHot={isHot}>
            {name}
          </SkillTag>
        ))}
      </div>
{/* Social Links Section */}      
      <div style={{marginTop: "7px"}}>
        {SOCIAL_DATA.map(({ id, name, url, icon: Icon, type }) => (
          <SocialButton key={id} href={url} $type={type}>
            <Icon />
             {name}
          </SocialButton>
        ))}
      </div>
    </div>
  );
}
