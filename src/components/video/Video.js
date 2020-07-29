import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../videos/Calendar component from scratch.mp4";

/**
 *   Video
 *
 *  @component
 *
 */
export const Video = ( props ) => {
  const videos = [ Calendar ];
  const [ video, setVideo ] = useState( videos[ 0 ] );
  return ( <Container>
    <video src={ video }></video>
  </Container> );
};

const Container = styled.div`
background: rgb(254, 213, 134);
min-height: 1rem;
`;

Video.propTypes = {};
