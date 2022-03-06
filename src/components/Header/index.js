import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderImgLogo,
  Monsters,
  HeaderMobileMenuWrapper,
  HeaderMobileMenuRightContainer,
  HeaderMobileBurger,
  HeaderMobileLabel,
  HeaderMobileBurgerIcon,
  HeaderMobileUl,
  HeaderMobileLi,
  HeaderDesktopMenuWrapper,
  HeaderDesktopMenuRightContainer,
  HeaderDesktopMenuLi,
} from "./styled";
import LogoName from "../../assets/images/logo-name.png";
import Burger from "../../assets/images/hamburger-menu.svg";
import MonsterCyan from "../../assets/images/monster-cyan.png";
import MonsterGreen from "../../assets/images/monster-green.png";
import MonsterPurple from "../../assets/images/monster-purple.png";
import { MonstGifContext } from "../../contexts";

const Header = () => {
  const { refHeaderMobileBurger } = useContext(MonstGifContext);

  return (
    <HeaderWrapper>
      <HeaderMobileMenuWrapper>
        <Link to="/">
          <HeaderImgLogo alt="logo-name" src={LogoName} />
        </Link>
        <HeaderMobileMenuRightContainer>
          <HeaderMobileBurger
            type="checkbox"
            id="burger"
            ref={refHeaderMobileBurger}
          />
          <HeaderMobileLabel htmlFor="burger">
            <HeaderMobileBurgerIcon alt="burguer" src={Burger} />
          </HeaderMobileLabel>
          <HeaderMobileUl id="nav-menu-mobile">
            <HeaderMobileLi>
              <Monsters src={MonsterCyan} alt="monster-cyan" />
              <Link to="/">Gifs</Link>
            </HeaderMobileLi>
            <HeaderMobileLi>
              <Monsters src={MonsterGreen} alt="monster-green" />
              <Link to="/favorites/">Favoritos</Link>
            </HeaderMobileLi>
            <HeaderMobileLi>
              <Monsters src={MonsterPurple} alt="monster-purple" />
              <Link to="/social/">Social</Link>
            </HeaderMobileLi>
          </HeaderMobileUl>
        </HeaderMobileMenuRightContainer>
      </HeaderMobileMenuWrapper>
      <HeaderDesktopMenuWrapper>
        <Link to="/">
          <HeaderImgLogo alt="logo-name" src={LogoName} />
        </Link>
        <HeaderDesktopMenuRightContainer>
          <HeaderDesktopMenuLi>
            <Monsters src={MonsterCyan} alt="monster-cyan" />
            <Link to="/">Gifs</Link>
          </HeaderDesktopMenuLi>
          <HeaderDesktopMenuLi>
            <Monsters src={MonsterGreen} alt="monster-green" />
            <Link to="/favorites/">Favoritos</Link>
          </HeaderDesktopMenuLi>
          <HeaderDesktopMenuLi>
            <Monsters src={MonsterPurple} alt="monster-purple" />
            <Link to="/social/">Social</Link>
          </HeaderDesktopMenuLi>
        </HeaderDesktopMenuRightContainer>
      </HeaderDesktopMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
