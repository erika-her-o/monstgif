import styled from "styled-components";

const SocialNetwork = styled.img`
  background-color: rgb(240, 227, 227);
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  text-decoration: none;
  margin: 25px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: background 0.3s;
`;

export const SocialLink = styled.a``;

export const SocialWrapper = styled.section``;

export const SocialList = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  place-content: center;
`;

export const GitHub = styled(SocialNetwork)`
  :hover {
    background: rgb(48, 48, 53);
  }
`;

export const LinkedIn = styled(SocialNetwork)`
  :hover {
    background: rgb(37, 150, 190);
  }
`;

export const Facebook = styled(SocialNetwork)`
  :hover {
    background: rgb(24, 119, 242, 255);
  }
`;

export const Instagram = styled(SocialNetwork)`
  :hover {
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
`;

export const Twitter = styled(SocialNetwork)`
  :hover {
    background: skyblue;
  }
`;

export const Twitch = styled(SocialNetwork)`
  :hover {
    background: rgba(145, 71, 255, 255);
  }
`;
