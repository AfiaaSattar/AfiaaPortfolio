import styled from "styled-components";
export const ArticalCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
  padding: 5px;
  border-radius:20px;
  overflow:hidden;
  @media (max-width: 1200px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 700px) {
  grid-template-columns: 1fr;
}
`
export const ArticalCardsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  padding: 20px;
  border-radius: 20px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  overflow: hidden;

  color:  ${({$color}) => `${$color}`};
  background:
      radial-gradient(
        circle at 20% 35%,
        ${({ $color }) => `${$color}30`} 0%,
        transparent 50%
      ),
      rgba(30, 37, 54, 0.25);
        &:hover {
      transform: translateY(-4px);
      border-color: ${({ $color }) => $color};
      box-shadow: 0 0 20px ${({ $color }) => `${$color}40`};
    }
    border: 1px solid ${({ $color }) => `${$color}40`};

  h5{
  color: #F8FAFC;
  margin-bottom: 3px;
  }
  p{
  color: rgb(148, 163, 184);
  margin-top: 10px;
  font-size: 15px;
  }
  hr{
   margin: 10px;
  }
`