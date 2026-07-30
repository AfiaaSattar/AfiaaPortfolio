import styled from "styled-components";
export const RoleDescription = styled.div`
flex: 1 1 220px;
border-left: 1px solid #64748b3e;
border-right: 1px solid #64748b3e;
padding: 0px 20px;

h5 {
  font-size: 1rem;      
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}
  p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #cbd5e1;
}
`
export const AwardSection = styled.div`
flex: 0 1 250px;
img{
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  filter: drop-shadow(0 8px 12px rgba(121, 128, 181, 0.35));
}
`
export const SmallText = styled.p`
    color: #64748b;
    margin: 10px 2px;
    font-size: 15px;
    `
export const MainPosition = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  border: 1px solid ${({ $color }) => `${$color}55`};
  border-radius: 16px;
  padding: 0px;
  color: ${({ $color }) => $color};
  background-color: ${({ $color }) => `${$color}10`};
  font-size: 13px;
  white-space: nowrap;
  margin: 3px;
`;
export const Position = styled.h3`
color: ${({ $color }) => `${$color}`};
`
