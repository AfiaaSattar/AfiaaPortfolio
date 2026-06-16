import personalPic from '../assets/react.svg';

const SKILLS_DATA = [
  { id: 1, name: 'React', isHot: false },
  { id: 2, name: 'WordPress', isHot: false },
  { id: 3, name: 'JavaScript', isHot: false },
  { id: 4, name: 'PHP', isHot: false },
  { id: 5, name: 'MySQL', isHot: true },
  { id: 6, name: 'REST API', isHot: true },
];

function SkillRows({name, isHot}) => {
    return(
        SKILLS_DATA.map()
    )
}

export default function ProfileCard(){
    return(
        <div className="profile-card">
           <div className="profile-header">

            <div className="avatar-wrapper">
                <img src={personalPic} alt="Afiaa" className="profile-img"/>
                <span className="status-dot"></span>
            </div>

            <div>
                <span className="eyebrow-text">Digital Portfolio</span>
                <h1 className='main-title'>Hi, I'm Afiaa</h1>
                <p className='profile-bio'>
                IT Technical Assistant, Web Administrator & Toastmasters Leader crafting digital experiences with precision and passion
                </p>
            </div>
           </div>


        </div>
    );
}