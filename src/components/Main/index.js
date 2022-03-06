import { useContext } from "react";
import { Gifs } from "..";
import { MonstGifContext } from "../../contexts";
import {
  MainWrapper,
  FormSearch,
  InputSearch,
  ButtonSearch,
  LoadingImg,
  ErrorWrapper,
  ErrorTitle,
  ErrorImg,
} from "./styled";
import Loading from "../../assets/images/loading.gif";
import MonsterGreen from "../../assets/images/monster-green.png";

const Main = () => {
  const { setKeywordValue, search, setSearchValue, loaded, gifs } =
    useContext(MonstGifContext);

  return (
    <MainWrapper>
      <FormSearch onSubmit={setKeywordValue}>
        <InputSearch value={search} onChange={setSearchValue} />
        <ButtonSearch>Buscar</ButtonSearch>
      </FormSearch>
      {!loaded && <LoadingImg alt="loading" src={Loading} />}
      {loaded && !!gifs.length && <Gifs gifs={gifs} />}
      {loaded && !gifs.length && (
        <ErrorWrapper>
          <ErrorTitle>No hay datos, intenta otra busqueda</ErrorTitle>
          <ErrorImg alt="monster-green" src={MonsterGreen} />
        </ErrorWrapper>
      )}
    </MainWrapper>
  );
};

export default Main;
