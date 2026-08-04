import toefl from "../assets/toefl.png";
import meta from "../assets/meta.webp";
import google from "../assets/google.webp";
import toast from "../assets/toast.png";
import university from "../assets/university.png";

import { 
  FaMeta, 
  FaGraduationCap, 
  FaBriefcase, 
  FaGoogle, 
  FaGlobe, 
  FaLinkedin 
} from "react-icons/fa6";

import { 
  SiUdemy, 
  SiHubspot, 
  SiCoursera 
} from "react-icons/si";

export const certificate = [
    {
        id: 1,
        name: "TOEFL iBT",
        img: toefl,
        description: "Language Test",
        themColor: "#22C55E"
    },
        {
        id: 2,
        name: "Meta",
        img: meta,
        description: "Front-End",
        themColor: "#38BDF8"
    },
        {
        id: 3,
        name: "Google",
        img: google,
        description: "IT Support",
        themColor: "#C084FC"
    },
           {
        id: 4,
        name: "W University",
        img: university,
        description: "Business Courses",
        themColor: "#F59E0B"
    },
       {
        id: 5,
        name: "Toast",
        img: toast,
        description: "Public Speaking",
        themColor: "#FB7185"
    },

];

export const categories = [
  "All",
  "Web Development",
  "Design",
  "Software Engineering",
  "Business & Entrepreneurship",
  "Personal Development",
  "Leadership & Management",
  "IT & Networking",
  "IT Support",
  "Communication & Leadership",
  "Data & Productivity",
  "Sales",
  "Customer Experience",
  "Career Development",
  "Business Communication",
  "Communication",
  "Language & Communication",
  "Productivity",
  "Digital Marketing & Analytics",
  "Design & Innovation",
  "Digital Marketing"
];
export const certificates = [
  {
    id: 1,
    companyName: "Meta",
    certificateName: "Advanced React",
    date: "Mar 2026",
    category: "Web Development",
    icon: FaMeta,
    link: "https://coursera.org/verify/686M6IWX7K44"
  },
  {
    id: 2,
    companyName: "Meta",
    certificateName: "React Basics",
    date: "Feb 2026",
    category: "Web Development",
    icon: FaMeta,
    link: "https://coursera.org/verify/I9NJEJCM1D0V"
  },
  {
    id: 3,
    companyName: "Meta",
    certificateName: "Principles of UX/UI Design",
    date: "Jan 2026",
    category: "Design",
    icon: FaMeta,
    link: "https://coursera.org/verify/EQREVNH43IVH"
  },
  {
    id: 4,
    companyName: "Meta",
    certificateName: "HTML and CSS in depth",
    date: "Dec 2025",
    category: "Web Development",
    icon: FaMeta,
    link: "https://coursera.org/verify/T4M7I9TC9RIW"
  },
  {
    id: 5,
    companyName: "Meta",
    certificateName: "Version Control",
    date: "Dec 2025",
    category: "Software Engineering",
    icon: FaMeta,
    link: "https://coursera.org/verify/M3YGX1POG9GU"
  },
  {
    id: 6,
    companyName: "Meta",
    certificateName: "Programming with JavaScript",
    date: "Oct 2025",
    category: "Web Development",
    icon: FaMeta,
    link: "https://coursera.org/verify/8VDL2YWJXPKG"
  },
  {
    id: 7,
    companyName: "Meta",
    certificateName: "Introduction to Front-End Development",
    date: "Sep 2025",
    category: "Web Development",
    icon: FaMeta,
    link: "https://coursera.org/verify/IIW1J7RM861A"
  },
  {
    id: 8,
    companyName: "University of Maryland",
    certificateName: "New Venture Finance: Startup Funding for Entrepreneurs",
    date: "Aug 2025",
    category: "Business & Entrepreneurship",
    icon: FaGraduationCap,
    link: "https://coursera.org/verify/105V5502XZON"
  },
  {
    id: 9,
    companyName: "Imperial College London",
    certificateName: "Creative Thinking: Techniques and Tools for Success",
    date: "Aug 2025",
    category: "Personal Development",
    icon: FaGraduationCap,
    link: "https://coursera.org/verify/CE3PN7GRIVIT"
  },
  {
    id: 10,
    companyName: "Kennesaw State University",
    certificateName: "Business Model Canvas: A Tool for Entrepreneurs and Innovators (Project-Centered Course)",
    date: "Jul 2025",
    category: "Business & Entrepreneurship",
    icon: FaGraduationCap,
    link: "https://coursera.org/verify/7EXF42C1OD6Y"
  },
  {
    id: 11,
    companyName: "McKinsey & Company",
    certificateName: "McKinsey.org Forward Program",
    date: "Jul 2025",
    category: "Leadership & Management",
    icon: FaBriefcase,
    link: "https://coursera.org/verify/7cf0b75b-ca12-4aad-9739-d4630b9dc772"
  },
  {
    id: 12,
    companyName: "Google",
    certificateName: "The Bits and Bytes of Computer Networking",
    date: "Apr 2025",
    category: "IT & Networking",
    icon: FaGoogle,
    link: "https://coursera.org/verify/"
  },
  {
    id: 13,
    companyName: "Google",
    certificateName: "Technical Support Fundamentals",
    date: "Dec 2024",
    category: "IT Support",
    icon: FaGoogle,
    link: "https://coursera.org/verify/"
  },
  {
    id: 14,
    companyName: "Toastmasters International",
    certificateName: "Level 5 Completion—Strategic Relationships",
    date: "Jul 2024",
    category: "Communication & Leadership",
    icon: FaGlobe,
    link: "https://www.toastmasters.org/"
  },
  {
    id: 15,
    companyName: "Toastmasters International",
    certificateName: "Path Completion—Strategic Relationships",
    date: "Aug 2024",
    category: "Communication & Leadership",
    icon: FaGlobe,
    link: "https://www.toastmasters.org/"
  },
  {
    id: 16,
    companyName: "LinkedIn",
    certificateName: "Excel: VLOOKUP and XLOOKUP for Beginners",
    date: "Jan 2023",
    category: "Data & Productivity",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 17,
    companyName: "LinkedIn",
    certificateName: "Sales Pipeline Management",
    date: "Dec 2022",
    category: "Sales",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 18,
    companyName: "LinkedIn",
    certificateName: "Sales: Closing Strategies",
    date: "Dec 2022",
    category: "Sales",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 19,
    companyName: "LinkedIn",
    certificateName: "Creating a Positive Customer Experience",
    date: "Sep 2022",
    category: "Customer Experience",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 20,
    companyName: "LinkedIn",
    certificateName: "Succeeding in a New Job",
    date: "Jun 2022",
    category: "Career Development",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 21,
    companyName: "LinkedIn",
    certificateName: "Managing Your Anxiety While Presenting",
    date: "Jun 2022",
    category: "Personal Development",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 22,
    companyName: "LinkedIn",
    certificateName: "Selling into Companies",
    date: "May 2022",
    category: "Sales",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 23,
    companyName: "Udemy",
    certificateName: "Pass your job interview in English Get your dream job",
    date: "Aug 2021",
    category: "Career Development",
    icon: SiUdemy,
    link: "https://www.udemy.com/certificate/UC-cc48a115-ec91-420a-9008-346d0f92b013"
  },
  {
    id: 24,
    companyName: "Udemy",
    certificateName: "Sales Machine: The Sales Training B2B Master Course",
    date: "Aug 2021",
    category: "Sales",
    icon: SiUdemy,
    link: "https://www.udemy.com/certificate/UC-223016ad-b660-4470-ad6b-4015c72ef538"
  },
  {
    id: 25,
    companyName: "University of Washington",
    certificateName: "Business English: Meetings",
    date: "Jun 2021",
    category: "Business Communication",
    icon: FaGraduationCap,
    link: "https://coursera.org/verify/PRU9TYBRNX39"
  },
  {
    id: 26,
    companyName: "University of Washington",
    certificateName: "Business English: Making Presentations",
    date: "May 2021",
    category: "Business Communication",
    icon: FaGraduationCap,
    link: "https://coursera.org/verify/LFLJ9WSPJCGY"
  },
  {
    id: 27,
    companyName: "Udemy",
    certificateName: "The Complete Communication Skills Master Class for Life",
    date: "May 2021",
    category: "Communication",
    icon: SiUdemy,
    link: "https://www.udemy.com/certificate/UC-196a22d6-82dd-4744-9844-883dcc889423"
  },
  {
    id: 28,
    companyName: "Udemy",
    certificateName: "Building Your English Brain",
    date: "Apr 2021",
    category: "Language & Communication",
    icon: SiUdemy,
    link: "https://www.udemy.com/certificate/UC-2aa84068-fcd3-4211-a451-f07dc7c60628"
  },
  {
    id: 29,
    companyName: "HubSpot",
    certificateName: "Sales Training: Building Your Sales Career",
    date: "Apr 2021",
    category: "Sales",
    icon: SiHubspot,
    link: "https://academy.hubspot.com/"
  },
  {
    id: 30,
    companyName: "Udemy",
    certificateName: "Microsoft Outlook 2016: Beginner and Intermediate Training",
    date: "Apr 2021",
    category: "Productivity",
    icon: SiUdemy,
    link: "https://udemy.com/certificate/UC-51c34cfb-a9b3-415b-b0b5-9b20185fabca"
  },
  {
    id: 31,
    companyName: "Coursera",
    certificateName: "Set up Google Analytics for a single page website",
    date: "Feb 2021",
    category: "Digital Marketing & Analytics",
    icon: SiCoursera,
    link: "https://coursera.org/verify/H7UPEDVRA5Y"
  },
  {
    id: 32,
    companyName: "Coursera",
    certificateName: "Introduction to Web Development",
    date: "Feb 2021",
    category: "Web Development",
    icon: SiCoursera,
    link: "https://coursera.org/verify/GQQLFFY8N6JW"
  },
  {
    id: 33,
    companyName: "Coursera",
    certificateName: "Successful Interviewing",
    date: "Jan 2021",
    category: "Career Development",
    icon: SiCoursera,
    link: "https://coursera.org/verify/862BTE538Q4K"
  },
  {
    id: 34,
    companyName: "Udemy",
    certificateName: "ICT Taskforce: Microsoft Office | Excel Expert",
    date: "Dec 2020",
    category: "Productivity",
    icon: SiUdemy,
    link: "https://www.udemy.com/certificate/UC-4462caca-70a7-41b6-958f-67e683594d1c"
  },
  {
    id: 35,
    companyName: "University of Washington",
    certificateName: "Business English: Networking",
    date: "Dec 2020",
    category: "Business Communication",
    icon: FaGraduationCap,
    link: "https://coursera.org/verify/RLKH9EQVPU6S"
  },
  {
    id: 36,
    companyName: "Coursera",
    certificateName: "Design Thinking for Innovation",
    date: "Nov 2020",
    category: "Design & Innovation",
    icon: SiCoursera,
    link: "https://coursera.org/verify/HEUTL6MWQMJ5"
  },
  {
    id: 37,
    companyName: "Google",
    certificateName: "أساسيات التسويق على الانترنت (Fundamentals of Digital Marketing)",
    date: "Sep 2020",
    category: "Digital Marketing",
    icon: FaGoogle,
    link: "https://skillshop.exceedlms.com/"
  },
  {
    id: 38,
    companyName: "Udemy",
    certificateName: "ICT Taskforce: Microsoft Office | PowerPoint Expert",
    date: "Sep 2020",
    category: "Productivity",
    icon: SiUdemy,
    link: "https://www.udemy.com/"
  },
  {
    id: 39,
    companyName: "Google",
    certificateName: "Fundamentals of Digital Marketing",
    date: "Nov 2020",
    category: "Digital Marketing",
    icon: FaGoogle,
    link: "https://skillshop.exceedlms.com/"
  },
  {
    id: 40,
    companyName: "Udemy",
    certificateName: "ICT Taskforce: Microsoft Office | Word Expert",
    date: "Nov 2020",
    category: "Productivity",
    icon: SiUdemy,
    link: "https://www.udemy.com/"
  }
];