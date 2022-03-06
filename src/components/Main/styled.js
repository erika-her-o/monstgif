import styled from "styled-components";

export const MainWrapper = styled.section``;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 660px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const InputSearch = styled.input`
  width: 80%;
  color: #f3e5f5;
  background: #c04848;
  background: -webkit-linear-gradient(to right, #480048, #c04848);
  background: linear-gradient(to right, #480048, #c04848);
  border: none;
  border-radius: 10px;
  padding-left: 16px;
  font-size: 2rem;
  outline: none;

  @media (min-width: 600px) {
    width: 360px;
  }
`;

export const ButtonSearch = styled.button`
  display: block;
  width: 90px;
  height: 45px;
  font-size: 18px;
  color: #616161;
  background-color: #f3e5f5;
  border: none;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.35s;
  margin: 24px;

  &:hover {
    background: #ff003b;
    transition: all 0.45s;
    color: #f3e5f5;
    cursor: pointer;
    border-radius: 10px;
  }

  @media (min-width: 660px) {
    margin: 0px 20px;
  }
`;

export const LoadingImg = styled.img`
  display: block;
  margin: 0 auto;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3rem;
  text-align: center;
  margin: 50px;
`;

export const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  color: #616161;
`;

export const ErrorImg = styled.img`
  width: 200px;
  margin: auto;
`;
