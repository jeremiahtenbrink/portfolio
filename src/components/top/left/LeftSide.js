import React from "react";
import styled from "styled-components";
import { Contact } from "./Contact";

/**
 *   LeftSide
 *
 *  @component
 *
 */
export const LeftSide = ( props ) => {
  
  return ( <Container>
    <Contact/>
  </Container> );
};

const Container = styled.div`
max-width: 40%;
`;

LeftSide.propTypes = {};
