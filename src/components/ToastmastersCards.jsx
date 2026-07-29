import { GiPublicSpeaker, GiCrown } from "react-icons/gi";
import {
  CardHeader,
  CardLeftSide,
  CardRightSideToast,
  CardTextBox,
} from "../styled/CardHeader.js";
import triple from "../assets/triple.png";
import { FooterBtn } from "../styled/Footerbtn.js";
import {clubs, toastPositions} from "../data/toastmasters.js";
import {CardFooter, CardFooterItem} from "../styled/CardFooter.js";
import { CardItem, CardContent, TagsContainer, CustomTag } from "../styled/CardItem.js";
import styled from "styled-components";
const Position = styled.h3`
color: ${({ $color }) => `${$color}`};
`
    const WorkPlace = styled.p`
    color: #4578ae;
    margin: 0px;
    font-size: 15px;
    `
export default function ToastmastersCard(){
    return(
        <div className="toastmasters-card">
         {/*Toastmasters-card-header*/}
            <CardHeader>
                <CardLeftSide>
                    <GiPublicSpeaker className="headerTag" />
                    <CardTextBox>
                        <h3 className="card-title">Toastmasters Library</h3>
                        <span className="card-text">4+ Years · 3 Clubs · 5 Roles</span>
                    </CardTextBox>
                </CardLeftSide>   
                <CardRightSideToast>
                    <span className="award">
                        <img src={triple} alt="Triple Crown Award" />
                        <div className="triple-text">
                         <p>Triple Crown Award</p>
                         <p >A symbol of dedication and leadership</p>
                        </div>
                    </span>
                </CardRightSideToast>      
            </CardHeader>
            {/*Toastmasters-card-body*/}
            <CardFooter>      
                {clubs.map((item) => (
                <CardFooterItem key={item.id} $color={item.themeColor}>
                    <span>{item.shortName}</span>
                    <p>{item.name}</p>
                </CardFooterItem>
                ))}
            </CardFooter>
          {/*Toastmasters-body-loops*/}  
            {toastPositions.map((item) => (
                <CardItem $color={item.themeColor} >
                     <CardContent key={item.id}>
                    <CustomTag  style={{ color: `${item.themeColor}` }}>
                       <item.icon className="jobsIcon"/>
                       <Position> {item.position}{item.date}</Position>
                    </CustomTag>
                     <WorkPlace>{item.clubName}</WorkPlace>
                     <WorkPlace>{item.fullDate}</WorkPlace>
                        <span>
                            {item.tags.map((tag,index) => (
                                <CustomTag key={index} $color={item.themeColor}> 
                                 {tag}
                                </CustomTag>
                            ))}
                        </span>
                   </CardContent> 
                   <div>{item.description}</div>
                   <div>{item.image}</div>
                </CardItem>
                ))}

              {/*Toastmasters-footer-button*/}   
            <FooterBtn>
                <button>View Full Toastmasters Journey</button> 
            </FooterBtn>
        </div>
    );
}