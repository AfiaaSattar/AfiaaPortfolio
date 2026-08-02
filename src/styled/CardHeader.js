    import styled from "styled-components";
    export const CardHeader = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
 @media (max-width: 640px) {
    flex-wrap: ${({ $wrapOnMobile }) =>
    $wrapOnMobile ? "wrap" : "nowrap"};
   .card-title{
     font-size: 15px;
    }
    .card-text{
     font-size: 10px;
    }
 }
    `
    export const CardLeftSide = styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
    `
    export const CardRightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 14px;
    border: 1px solid #c084fc;
    border-radius: 999px;
    color: #c084fc;
    font-size: 12px;
    box-shadow: 0 0 5px rgba(192, 132, 252, 0.4);

    img{
        width: 50px;
        height: 50px;
  };
   @media (max-width: 640px) {
     font-size: 10px;
 }
       ` 
 export const CardRightSideToast = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 14px;
    text-wrap: wrap;
    img{
        width: 60px;
        height: 60px;
  }
       `  
 export const CardRightSideToastCompact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 14px;
    text-wrap: wrap;
    img{
        width: 60px;
        height: 60px;
}
  @media (max-width: 640px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: -10px;
  .award{
    padding: 0px;
    margin: 0px; 
    gap: 0;
  }
}
`;
export const CardTextBox = styled.div`
    display: flex;
    flex-direction: column;
    `