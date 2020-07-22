import React from "react";
import styled from "styled-components";
import { LeftSide } from "./left/LeftSide";
import { Header } from "../header/Header";

/**
 *   Top
 *
 *  @component
 *
 */
export const Top = ( props ) => {
  
  return ( <>
    <Header/>
    <LeftSide/>
  </> );
};

const Container = styled.div`
`;

Top.propTypes = {};
