import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { favoritesKey, baseUrl, apiKey } from "../constants";
import { useLocalStorage } from "../hooks";

export const MonstGifContext = createContext();

const MonstGifContextProvider = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const refHeaderMobileBurger = useRef();
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("cat");
  const [loaded, setLoaded] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [favorites, setFavorites] = useLocalStorage(favoritesKey, []);

  const getRequestUrl = (keyword) =>
    `${baseUrl}/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=16&offset=0&rating=g&lang=en`;

  const getGif = ({ images, title, id }) => {
    const { downsized_medium } = images;
    const { url } = downsized_medium;
    return { title, id, url };
  };

  const errorResponseAction = () => setLoaded(true);

  const okResponseAction = useCallback(async (response) => {
    const parsedResponse = await response.json();
    setGifs(parsedResponse.data.map(getGif));
    setLoaded(true);
  }, []);

  const getGifs = useCallback(async () => {
    setLoaded(false);
    const res = await fetch(getRequestUrl(keyword)).catch(errorResponseAction);
    return res?.ok && okResponseAction(res);
  }, [keyword, okResponseAction]);

  const setSearchValue = ({ target: { value } }) => setSearch(value);

  const setKeywordValue = (event) => {
    event.preventDefault();
    setKeyword(search);
  };

  const isInsideFavorites = (val) => favorites.some(({ id }) => id === val);

  const getFavoriteButtonText = (id) =>
    `${isInsideFavorites(id) ? "Remover De" : "Añadir A"} Favoritos`;

  const addOrRemoveFavorites = (favorite) => {
    const { id: idToFind = "" } = favorite;
    const add = () => favorites.concat(favorite);
    const remove = () => favorites.filter(({ id }) => id !== idToFind);
    const action = isInsideFavorites(idToFind) ? remove : add;
    setFavorites(action());
  };

  const executeActionAndGoToMainPage = (action) => {
    action();
    history.push("/");
  };

  const checkIfIsEmptyFavorites = useCallback(
    () => !favorites.length && localStorage.removeItem(favoritesKey),
    [favorites.length]
  );

  const checkIfMainPage = useCallback(
    () => pathname === "/" && getGifs(),
    [getGifs, pathname]
  );

  const closeBurgerMenu = () => {
    const { current = {} } = refHeaderMobileBurger;
    Object.assign(current, { checked: false });
  };

  useEffect(() => {
    checkIfIsEmptyFavorites();
  }, [checkIfIsEmptyFavorites, favorites]);

  useEffect(() => {
    checkIfMainPage();
  }, [checkIfMainPage, getGifs, keyword]);

  useEffect(() => {
    closeBurgerMenu();
  }, [pathname]);

  return (
    <MonstGifContext.Provider
      value={{
        addOrRemoveFavorites,
        executeActionAndGoToMainPage,
        favorites,
        isInsideFavorites,
        getFavoriteButtonText,
        gifs,
        loaded,
        search,
        setKeywordValue,
        setSearchValue,
        refHeaderMobileBurger,
      }}
    >
      {children}
    </MonstGifContext.Provider>
  );
};

export default MonstGifContextProvider;
