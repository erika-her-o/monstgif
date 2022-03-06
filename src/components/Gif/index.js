import { bool, func, string } from "prop-types";
import { GifWrapper, GifImg, ButtonFavorite } from "./styled";

const Gif = ({
  altImage,
  srcImage,
  buttonClick,
  buttonText,
  isInsideFavorites,
}) => (
  <GifWrapper>
    <GifImg alt={altImage} src={srcImage} />
    <ButtonFavorite isInsideFavorites={isInsideFavorites} onClick={buttonClick}>
      {buttonText}
    </ButtonFavorite>
  </GifWrapper>
);

Gif.propTypes = {
  altImage: string.isRequired,
  srcImage: string.isRequired,
  buttonClick: func.isRequired,
  buttonText: string.isRequired,
  isInsideFavorites: bool.isRequired,
};

export default Gif;
