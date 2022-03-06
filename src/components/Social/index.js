import {
  SocialWrapper,
  SocialLink,
  SocialList,
  GitHub,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
  Twitch,
} from "./styled";
import GitHubIcon from "../../assets/images/github.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import TwitchIcon from "../../assets/images/twitch.svg";

const Social = () => (
  <SocialWrapper>
    <SocialList>
      <SocialLink href="https://github.com/" target="_blank" rel="noreferrer">
        <GitHub alt="logo-github" src={GitHubIcon} />
      </SocialLink>
      <SocialLink href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <LinkedIn alt="logo-linkedin" src={LinkedInIcon} />
      </SocialLink>
      <SocialLink href="https://facebook.com/" target="_blank" rel="noreferrer">
        <Facebook alt="logo-facebook" src={FacebookIcon} />
      </SocialLink>
      <SocialLink
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram alt="logo-instagram" src={InstagramIcon} />
      </SocialLink>
      <SocialLink href="https://twitter.com/" target="_blank" rel="noreferrer">
        <Twitter alt="logo-twitter" src={TwitterIcon} />
      </SocialLink>
      <SocialLink href="https://twitch.tv/" target="_blank" rel="noreferrer">
        <Twitch alt="logo-twitch" src={TwitchIcon} />
      </SocialLink>
    </SocialList>
  </SocialWrapper>
);

export default Social;
