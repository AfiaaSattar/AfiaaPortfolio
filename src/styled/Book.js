import styled from "styled-components";
export const CardItemPic = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid ${({ $color }) => `${$color}55`};
  background:
    radial-gradient(
      circle at 20% 20%,
      ${({ $color }) => `${$color}22`} 0%,
      transparent 60%
    ),
  }
`
export const CardItem2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  border-radius: 15px;
  padding: 10px;
  justify-content: center;
  align-items: center;
      &:hover {
    transform: translateY(-4px);
    border-color:#64748b;;
    box-shadow: 0 0 20px #64748b;;
  }
`
export const BookDescription = styled.div`
flex: 2;
padding: 0px;
margin: 0px;
h5 {
  font-size: 1rem;      
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2px;
}
  p {
  margin-top: 2px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #cbd5e1;
}
`
export const ImageSection = styled.div`
flex: 1;
img{
  width: 80px;
   
  height: auto;
  border-radius: 10px;
  filter: drop-shadow(0 8px 12px rgba(121, 128, 181, 0.35));
`
export const CardItemFooter2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid #06b5d44d;

  background:
    radial-gradient(
      circle at 20% 20%,
      #06b5d43f,
      transparent 40%
    ),
    rgba(15, 23, 42, 0.35);

  p {
    width: 100%;
    margin: 0;
    color: #e2e8f0;

    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
    font-weight: 500;
    font-style: italic;
    line-height: 1.6;
    letter-spacing: 0.3px;
  }

  .curiosity {
    color: #c084fc;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: #a855f7;
    text-underline-offset: 5px;
  }
`;