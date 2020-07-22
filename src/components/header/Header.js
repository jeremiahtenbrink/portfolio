import React from "react";
import styled from "styled-components";
import { Name } from "../nameSvg/Name";

/**
 *   Header
 *
 *  @component
 *
 */
export const Header = ( props ) => {
  return ( <Container>
    <Name/>
    <h1>Full Stack Web Developer</h1>
  </Container> );
};

const Container = styled.div`
display: flex;
align-items: center;
max-width: 1000px;
margin: 5rem auto 0 auto;
h1{
  color: rgba(255,255,255,0.5);
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255,255,255,0.5);
}
`;

Header.propTypes = {};
