    import styled from "styled-components";
    export const CardHeader = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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
  }
       ` 
       
 export const CardRightSideToast = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 14px;
    img{
        width: 50px;
        height: 50px;
  }
       `  
export const CardTextBox = styled.div`
    display: flex;
    flex-direction: column;
    `