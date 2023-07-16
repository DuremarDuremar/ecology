import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #e1e2db;

}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  color: unset;
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
*::-webkit-scrollbar {

    width: 4px;
    height:4px;
    background-color: #e9e6db;
    
}
*::-webkit-scrollbar-thumb {
    background-color: #7490c7;
   
}

img {
  height: auto;
  max-width: 100%;
  object-fit: cover;
}
h1,h2,h3,h4,h5,h6{
  color: inherit;
  font-weight: inherit;
  font-size:inherit;
}
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0px auto;
  padding: 0 8px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background: #e1e2db;
  color: #2b3244;
`;
