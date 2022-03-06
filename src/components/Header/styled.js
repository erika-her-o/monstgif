import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: #c04848;
  background: -webkit-linear-gradient(to right, #480048, #c04848);
  background: linear-gradient(to right, #480048, #c04848);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-bottom: 32px;
`;

export const HeaderImgLogo = styled.img`
  width: 200px;
`;

export const Monsters = styled.img`
  width: 30px;
  margin: 0 8px;
`;

export const HeaderMobileMenuWrapper = styled.nav`
  display: flex;
  place-content: space-between;
  place-items: center;
  margin: 16px 16px 32px;
  width: 100%;
  @media (min-width: 871px) {
    display: none;
  }
`;

export const HeaderMobileMenuRightContainer = styled.div``;

export const HeaderMobileBurger = styled.input`
  display: none;
  :checked ~ #nav-menu-mobile {
    width: 100%;
    padding: 0 16px;
  }
`;

export const HeaderMobileLabel = styled.label`
  cursor: pointer;
`;

export const HeaderMobileBurgerIcon = styled.img`
  height: 50px;
`;

export const HeaderMobileUl = styled.ul`
  position: absolute;
  right: 0;
  width: 0;
  margin-top: 64px;
  transition: all 0.3s ease;
  background: #c04848;
  background: -webkit-linear-gradient(to right, #480048, #c04848);
  background: linear-gradient(to right, #480048, #c04848);
  overflow: hidden;
`;

export const HeaderMobileLi = styled.li`
  font-size: 2.5rem;
  height: 53px;
  display: flex;
  place-items: center;
  margin-bottom: 10px;
  a {
    color: #f3e5f5;
  }
`;

export const HeaderDesktopMenuWrapper = styled.nav`
  display: none;
  place-content: space-between;
  place-items: center;
  @media (min-width: 871px) {
    display: flex;
  }
`;

export const HeaderDesktopMenuRightContainer = styled.ul`
  display: flex;
  margin: 26px 30px;
  gap: 48px;
`;

export const HeaderDesktopMenuLi = styled.li`
  font-size: 2rem;
  a {
    color: #f3e5f5;
  }
`;
