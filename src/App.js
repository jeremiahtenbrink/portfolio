import React from "react";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Top } from "./components/top/Top";
import { Section } from "./components/section/Section";

function App(){
  return ( <AppContainer className="App">
    <Section>
      <Top/>
    </Section>
  </AppContainer> );
}

const AppContainer = styled.div`
min-height: 100vh;
`;

export default App;
