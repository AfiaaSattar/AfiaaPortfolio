import styled from "styled-components";

export const CardFooter = styled.div`
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    margin-top:20px;
`;

export const CardFooterItem = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  gap:4px;
  padding:16px 14px;
  border-radius:16px;
  color: ${({$color}) => `${$color}`};
  background: ${({$color}) => `${$color}10`};
  border:1px solid  ${({$color}) => `$($color)55`};
  transition:.3s ease;


img{
    width:50px;
    height:50px;
    border-radius: 15px;
}

h5{
    margin:0;
    color:#F8FAFC;
}

p{
    margin:0;
    color:#94A3B8;
    font-size:13px;
}`;