import styled from "styled-components";
export const ArticalCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;

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
  background:  ${({$color}) => `${$color}10`};
  border: 1px solid ${({ $color }) => `${$color}40`};
`