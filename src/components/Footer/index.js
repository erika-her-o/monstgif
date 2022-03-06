import { FooterWrapper, FooterTitle, FooterImg } from "./styled";
import Hearts from "../../assets/images/hearts.png";

const Footer = () => (
  <FooterWrapper>
    <FooterTitle>
      Hecho por Erika Hernández con <FooterImg alt="heart" src={Hearts} />
    </FooterTitle>
  </FooterWrapper>
);

export default Footer;
