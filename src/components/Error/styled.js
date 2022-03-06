import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3rem;
  text-align: center;
  margin: 14px 50px;
`;

export const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  color: #616161;
`;

export const ErrorImg = styled.img`
  width: 200px;
  margin: auto;
`;

export const ErrorButton = styled.button`
  display: block;
  max-width: 500px;
  padding: 8px 16px;
  margin: 16px auto 0;
  font-size: 18px;
  color: rgb(200 46 127 / 80%);
  background-color: #f3e5f5;
  border: none;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.35s;

  &:hover {
    background: #ff003b;
    transition: all 0.45s;
    color: #f3e5f5;
    cursor: pointer;
    border-radius: 10px;
  }
`;
