import { useContext } from "react";
import { Gifs } from "..";
import {
  FavoriteWrapper,
  FavoriteTitle,
  FavoriteImg,
  FavoriteMessage,
} from "./styled";
import Heart from "../../assets/images/heart.png";
import { MonstGifContext } from "../../contexts";

const Favorites = () => {
  const { favorites } = useContext(MonstGifContext);

  return (
    <FavoriteWrapper>
      <FavoriteTitle>
        Gifs Favoritos
        <FavoriteImg alt="heart" src={Heart} />
      </FavoriteTitle>
      {!!favorites?.length && <Gifs gifs={favorites} />}
      {!favorites?.length && (
        <FavoriteMessage>No hay favoritos</FavoriteMessage>
      )}
    </FavoriteWrapper>
  );
};

export default Favorites;
