import { useContext } from "react";
import { func, string } from "prop-types";
import { ErrorWrapper, ErrorTitle, ErrorImg, ErrorButton } from "./styled";
import { MonstGifContext } from "../../contexts";

const Error = ({ img, title, action }) => {
  const { executeActionAndGoToMainPage } = useContext(MonstGifContext);

  return (
    <ErrorWrapper>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorImg alt="error" src={img} />
      <ErrorButton onClick={() => executeActionAndGoToMainPage(action)}>
        Volver a la página principal
      </ErrorButton>
    </ErrorWrapper>
  );
};

Error.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  action: func,
};

Error.defaultProps = { action: () => {} };

export default Error;
