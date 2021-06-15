import React from 'react';
import Navbar from './Navbar';
import sample from '../videos/main.mp4';
import { Video } from './Util';
import styled from 'styled-components';

// const container = styled.div`

// `
const Header = ({children}) => {
  return (
    <div>
    <Video src={sample} texts={["텍스트 너머의 가치를","만들어 나갑니다."]} />
    <Navbar />
    </div>
  )
}

export default Header
