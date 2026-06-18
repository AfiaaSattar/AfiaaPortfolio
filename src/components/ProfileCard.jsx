import personalPic from "../assets/react.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaYoutube,
  FaRegEnvelope,
} from "react-icons/fa";

const SKILLS_DATA = [
  { id: 1, name: "React", isHot: false },
  { id: 2, name: "WordPress", isHot: false },
  { id: 3, name: "JavaScript", isHot: false },
  { id: 4, name: "PHP", isHot: false },
  { id: 5, name: "MySQL", isHot: true },
  { id: 6, name: "REST API", isHot: true },
];

const SOCIAL_DATA = [
  {id: "li", name: "LinkedIn",url: "#", icon: <FaLinkedinIn />, type: "linkedin" },
  { id: "gh", name: "GitHub", url: "#", icon: <FaGithub />, type: "github" },
  { id: "md", name: "Medium", url: "#", icon: <FaMediumM />, type: "medium" },
  { id: "yt", name: "YouTube", url: "#", icon: <FaYoutube />, type: "youtube" },
  {id: "em", name: "Email", url: "mailto:example@email.com", type: "email", icon: <FaRegEnvelope />},
];

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

  ${(props) =>
    props.$isHot &&
    `
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

  color: ${props => {
    if (props.$type === 'linkedin') return '#0077b5';
    if (props.$type === 'github') return '#f0f6fc';
    if (props.$type === 'medium') return '#00ab6c';
    if (props.$type === 'youtube') return '#ff0000';
    if (props.$type === 'email') return '#ea4335';
    return '#c084fc';
}};


  &:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4;
  }
`;


export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={personalPic} alt="Afiaa" className="profile-img" />
          <span className="status-dot"></span>
        </div>
        <div>
          <span className="eyebrow-text">Digital Portfolio</span>
          <h1 className="main-title">Hi, I'm Afiaa</h1>
          <p className="profile-bio">
            IT Technical Assistant, Web Administrator & Toastmasters Leader
            crafting digital experiences with precision and passion
          </p>
        </div>
      </div>

      <div>
        {SKILLS_DATA.map(({ id, name, isHot }) => (
          <SkillTag key={id} $isHot={isHot}>
            {name}
          </SkillTag>
        ))}
      </div>
      <div>
        {SOCIAL_DATA.map(({ id, name, url, icon, type }) => (
          <SocialButton key={id} href={url} $type={type}>
            {icon} {name}
          </SocialButton>
        ))}
      </div>
    </div>
  );
}
