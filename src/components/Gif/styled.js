import styled from "styled-components";

export const GifWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GifImg = styled.img`
  border-radius: 0.4rem;
  box-shadow: #d1c4e9 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 230px;
  height: 200px;
  margin: 16px;
`;

export const ButtonFavorite = styled.button`
  display: block;
  width: 260px;
  height: 40px;
  font-size: 18px;
  color: #616161;
  border: 1px solid #616161;
  border-radius: 8px;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.35s;

  &:hover {
    background-color: ${({ isInsideFavorites }) =>
      isInsideFavorites ? "#f14848" : "#64DD17"};
    transition: all 0.35s;
    color: #f3e5f5;
    cursor: pointer;
  }
`;
