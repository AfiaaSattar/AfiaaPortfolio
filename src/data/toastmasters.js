import styled from "styled-components";
import {
  FaUser,
  FaCrown,
  FaClipboardList,
  FaChalkboardTeacher,
} from "react-icons/fa";
import img1 from "../assets/toastmasters/1.jpg";
import img2 from "../assets/toastmasters/8.jpg";
import img3 from "../assets/toastmasters/11.jpg";
import img4 from "../assets/toastmasters/10.jpg";
import img5 from "../assets/toastmasters/5.jpg";
import img6 from "../assets/toastmasters/4.jpg";
 
export const clubs = [
    {
        id:1,
        shortName: "BTC",
        name: "Baghdad Toastmasters Club",
        themeColor: "#c084fc"
    },
        {
        id:2,
        shortName: "TLTM",
        name: "Tigirs League TM Club",
        themeColor: "#06b6d4"
    }
];
export const toastPositions = [
  {
    id: 1,
    date: 2021,
    clubName: "Baghdad TM Club",
    position: "Secretary",
    icon: FaClipboardList,
    themeColor: "#22c55e",
    image: img1,
    imageAlt: "Secretary at Baghdad Toastmasters Club",
    fullDate: "Sep 2021 – May 2022",
    tags: [
      "Organization",
      "Documentation",
      "Team Management",
      "Communication"
    ],
    description:
      "Managed club records, meeting minutes, and official documentation while supporting the executive committee and ensuring smooth club operations."
  },

  {
    id: 2,
    date: 2022,
    clubName: "Baghdad TM Club",
    position: "Vice President of Education",
    icon: FaChalkboardTeacher,
    themeColor: "#8b5cf6",
    image: img2,
    imageAlt: "Vice President of Education at Baghdad TM Club",
    fullDate: "May 2022 – May 2023",
    tags: [
      "Leadership",
      "Mentoring",
      "Training",
      "Public Speaking",
      "Planning"
    ],
    description:
      "Planned educational programs, coordinated meeting roles, supported members' learning journeys, and created engaging club sessions."
  },

  {
    id: 3,
    date: 2023,
    clubName: "Tigris League TM Club",
    position: "Member",
    icon: FaUser,
    themeColor: "#06b6d4",
    image: img3,
    imageAlt: "Member of Tigris League TM Club",
    fullDate: "Aug 2023 – Present",
    tags: [
      "Public Speaking",
      "Networking",
      "Coaching",
      "Teamwork"
    ],
    description:
      "Actively participated in meetings, delivered speeches, evaluated members, and contributed to a collaborative learning environment."
  },

  {
    id: 4,
    date: 2025,
    clubName: "Baghdad Toastmasters",
    position: "Member",
    icon: FaUser,
    themeColor: "#47a757",
    image: img4,
    imageAlt: "Member at Baghdad Toastmasters",
    fullDate: "Mar 2025 – Oct 2025",
    tags: [
      "Leadership",
      "Communication",
      "Networking",
      "Public Speaking"
    ],
    description:
      "Engaged in club meetings, expanded professional connections, and continued developing communication and leadership skills."
  },

  {
    id: 5,
    date: 2025,
    clubName: "Tigris League TM Club",
    position: "Vice President of Education",
    icon: FaChalkboardTeacher,
    themeColor: "#3b82f6",
    image: img5,
    imageAlt: "Vice President of Education at Tigris League TM Club",
    fullDate: "Jun 2025 – Jun 2026",
    tags: [
      "Leadership",
      "Training",
      "Mentoring",
      "Coaching",
      "Program Management"
    ],
    description:
      "Led the club's educational program by mentoring members, organizing meeting agendas, tracking educational progress, and supporting member growth."
  },

  {
    id: 6,
    date: 2026,
    clubName: "Tigris League TM Club",
    position: "President",
    icon: FaCrown,
    themeColor: "#facc15",
    image: img6,
    imageAlt: "President of Tigris League TM Club",
    fullDate: "Jun 2026 – Present",
    tags: [
      "Leadership",
      "Strategic Planning",
      "Team Management",
      "Coaching",
      "Decision Making",
      "Public Speaking"
    ],
    description:
      "Lead the executive committee, oversee club operations, inspire member engagement, and drive the club's vision and long-term success."
  }
];