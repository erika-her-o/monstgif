import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: monospace;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    text-decoration: none;
    list-style: none;
  }
`;

export const favoritesKey = "favorites";
export const baseUrl = "https://api.giphy.com";
export const apiKey = "t4jqnN2Th8zreqAFEgWeBdQQ9RFzwQIJ";
