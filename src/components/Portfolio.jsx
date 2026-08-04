import ArticlesCards from "./ArticlesCards";
import ProfessionalExperience from "./ProfessionalExperience";
import ContactCards from "./ContactCards";
import CredentialsCards from "./CredentialsCard";
import ProfileCard from "./ProfileCard";
import TechnicalTimelineCards from "./TechnicalTimelineCards";
import ToastmastersCard from "./ToastmastersCards";
import BookshelfCards from "./BookshelfCards";
import CredentialsPage from "./CredentialsPage";

export default function Portfolio(){
    return(
        <div className="dashboard-container">
            <ProfileCard />
            <CredentialsCards />
            <TechnicalTimelineCards />
            <ProfessionalExperience />
            <ArticlesCards />
            <ToastmastersCard />
            <BookshelfCards />
            <ContactCards />
        </div>
    );
}