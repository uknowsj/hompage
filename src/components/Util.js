import React from 'react';
import styled from 'styled-components';
import {defaultLayout} from '../style/CommonStyle';

const StyledVideo = styled.div`
  position: relative;
  overflow-x: clip;

  width: 100%;
  height:100vh;
  

  video {
    position: absolute;
    width: 1920px;

    left: 50%;
    transform: translateX(-50%);
  }
  div {
    /* border: 1px solid red; */
    position: absolute;
    width: fit-content;

    //offset
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    font-size: 4rem;
    font-weight: bold;
    color: white;
    text-align: center;

  }
    @media screen and (max-width:768px){
      video {
        width: 1000px;
      }
      div {
        font-size: 2.125rem;
      }
    }

`

export const Video = ({src, texts}) => {
  return (
    <StyledVideo>
      <video muted autoPlay loop>
        <source src={src} type="video/mp4" />
      </video>
      <div>
        {
          texts.map(text => (<p>{text}</p>))
        }
      </div>      
    </StyledVideo>
  )

}