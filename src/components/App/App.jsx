import React from "react";
import styled from "styled-components";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import GlobalStyles from "../GlobalStyles/index.js";
import { QUERIES } from "../../constants.js";

const App = () => {
    const [sortId, setSortId] = React.useState("newest");

    return (
        <>
            <GlobalStyles />
            <Header />
            <Main>
                <ShoeIndex sortId={sortId} setSortId={setSortId} />
            </Main>
        </>
    );
};

const Main = styled.main`
    padding: 64px 32px;

    @media ${QUERIES.tablet} {
        padding: 48px 32px;
    }

    @media ${QUERIES.mobile} {
        padding: 48px 16px;
    }
`;

export default App;
