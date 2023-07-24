import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,body {
        padding : 0;
        margin : 0;
    }


    a {
        color : inherit;
        text-decoration : none;
    }

    ul {
        padding : 0;
        margin : 0;
        list-style : none;
    }
`;

export default GlobalStyle;
