import styled from "styled-components";
export const CardItem = styled.div`
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
    rgba(15, 23, 42, 0.35);
      &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 0 20px ${({ $color }) => `${$color}40`};
  }
`
export const CardContent = styled.div`
  flex: 2 1 350px;
  justify-content: center;
`;
export const  TagsContainer = styled.div`{
 display: flex;
 flex-wrap: wrap;
 gap: 7px;
 margin-top: 10px;
}`

export const CustomTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $color }) => `${$color}55`};
  border-radius: 16px;
  padding: 8px 12px;
  color: ${({ $color }) => $color};
  background-color: ${({ $color }) => `${$color}10`};
  font-size: 13px;
  white-space: nowrap;
  margin: 3px;
`;