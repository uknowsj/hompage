import React from 'react';
import Navbar from './Navbar';
import sample from '../videos/main.mp4';
import { Video } from './Util';

const Header = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Video src={sample} texts={["텍스트 너머의 가치를","만들어 나갑니다."]} />
      <Navbar />
    </div>
  )
}

export default Header
