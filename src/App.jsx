import ArticlesCards from './components/ArticlesCards';
import ClientExcellenceCards from './components/ClientExcellenceCards';
import ContactCards from './components/contactCards';
import CredentialsCards from './components/CredentialsCard';
import ProfileCard from './components/ProfileCard'; 
import TechnicalTimelineCards from './components/TechnicalTimelineCards';
import ToastmastersCard from './components/ToastmastersCards';
export default function App(){

  return(
    <div className="dashboard-container">
          <ProfileCard />
          <CredentialsCards />
          <ArticlesCards />
          <TechnicalTimelineCards />
          <ClientExcellenceCards />
          <ToastmastersCard />
          <ContactCards />
    </div>
  );
}