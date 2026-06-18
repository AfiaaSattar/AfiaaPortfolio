import personalPic from "../assets/react.svg";
import styled from "styled-components";

const SKILLS_DATA = [
  { id: 1, name: "React", isHot: false },
  { id: 2, name: "WordPress", isHot: false },
  { id: 3, name: "JavaScript", isHot: false },
  { id: 4, name: "PHP", isHot: false },
  { id: 5, name: "MySQL", isHot: true },
  { id: 6, name: "REST API", isHot: true },
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
  position: relative; /* 🌟 أساسية لكي تدور النقطة حول البطاقة نفسها كمركز */

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

      {SKILLS_DATA.map(({ id, name, isHot }) => (
        <SkillTag key={id} $isHot={isHot}>
          {name}
        </SkillTag>
      ))}
    </div>
  );
}
