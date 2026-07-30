import styled from "styled-components";
export const CardItem2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  border-radius: 15px;
  border: 1px solid ${({ $color }) => `${$color}55`};
  justify-content: center;
  align-items: center;
  background:
    radial-gradient(
      circle at 20% 20%,
      ${({ $color }) => `${$color}22`} 0%,
      transparent 60%
    ),
    rgba(15, 23, 42, 0.35);
      &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 0 20px ${({ $color }) => `${$color}40`};
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