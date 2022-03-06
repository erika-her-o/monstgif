import { Component } from "react";
import Monster from "../assets/images/monster-red.png";
import { Error } from "../components";

export const errorBoundary = (WrappedComponent) => {
  const resetError = (context) => context.setState({ error: false });

  return class extends Component {
    state = { error: false };
    static getDerivedStateFromError = () => ({ error: true });

    render() {
      const { props, state } = this;
      const { error } = state;
      const title = "Algo salió mal";
      const action = () => resetError(this);
      const ErrorRender = <Error img={Monster} title={title} action={action} />;
      const NormalRender = <WrappedComponent {...props} />;
      return error ? ErrorRender : NormalRender;
    }
  };
};
