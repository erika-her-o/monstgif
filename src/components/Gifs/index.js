import { useContext } from "react";
import { arrayOf, shape, string } from "prop-types";
import { Gif } from "..";
import { GifsWrapper } from "./styled";
import { MonstGifContext } from "../../contexts";

const Gifs = ({ gifs }) => {
  const { addOrRemoveFavorites, getFavoriteButtonText, isInsideFavorites } =
    useContext(MonstGifContext);

  return (
    <GifsWrapper>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          altImage={title}
          srcImage={url}
          buttonClick={() => addOrRemoveFavorites({ id, title, url })}
          buttonText={getFavoriteButtonText(id)}
          isInsideFavorites={isInsideFavorites(id)}
        />
      ))}
    </GifsWrapper>
  );
};

Gifs.propTypes = {
  gifs: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      url: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Gifs;
