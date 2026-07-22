import ArticlesCards from './components/ArticlesCards';
import ProfessionalExperience from './components/ProfessionalExperience';
import ContactCards from "./components/ContactCards";
import CredentialsCards from './components/CredentialsCard';
import ProfileCard from './components/ProfileCard'; 
import TechnicalTimelineCards from './components/TechnicalTimelineCards';
import ToastmastersCard from './components/ToastmastersCards';
import BookshelfCards from'./components/BookshelfCards'
export default function App(){

  return(
    <div className="dashboard-container">
          <ProfileCard />
          <CredentialsCards />
          <ArticlesCards />
          <TechnicalTimelineCards />
          <ProfessionalExperience />
          <ToastmastersCard />
          <BookshelfCards />
          <ContactCards />
    </div>
  );
}