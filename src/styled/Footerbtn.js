import styled from "styled-components";
export const FooterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 20px;
    width: 100%;
    max-width: 500px;
    height: 50px;

    border: 1px solid rgb(120, 64, 155);
    border-radius: 40px;

    color: #ffffff;
    font-weight: 400;

    background: linear-gradient(
      135deg,
      #7c3aed14 0%,
      #a955f75b 55%,
      #60a5fa6f 100%
    );

    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px #a955f75b, 0 0 10px #60a5fa6f;
  }
`;