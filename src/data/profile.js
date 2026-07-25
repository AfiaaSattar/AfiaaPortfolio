import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaYoutube,
  FaRegEnvelope,
} from "react-icons/fa";

export const SKILLS_DATA = [
  { id: 1, name: "React", isHot: false },
  { id: 2, name: "WordPress", isHot: false },
  { id: 3, name: "JavaScript", isHot: false },
  { id: 4, name: "HTML/CSS", isHot: false },
  { id: 5, name: "MySQL", isHot: true },
];

export const SOCIAL_DATA = [
  {id: "li", name: "LinkedIn",url: "https://www.linkedin.com/in/afia-sattar-998265161/", icon: FaLinkedinIn , type: "linkedin" },
  { id: "gh", name: "GitHub", url: "https://github.com/AfiaaSattar", icon: FaGithub , type: "github" },
  { id: "md", name: "Medium", url: "https://medium.com/@afiasattar2", icon: FaMediumM , type: "medium" },
  { id: "yt", name: "YouTube", url: "https://www.youtube.com/@afiasattar598", icon: FaYoutube , type: "youtube" },
  {id: "em", name: "Email", url: "afiasattar2@gmail.com", type: "email", icon: FaRegEnvelope },
];