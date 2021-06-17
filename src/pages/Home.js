import React, {useEffect} from 'react'
import Navbar from 'components/Navbar'
import { Video } from 'components/Util'
import sample from 'assets/videos/main.mp4';
import Container from 'components/Container';
import building from 'assets/images/building.jpg';
import styled from 'styled-components'

import {default as HomeComponent} from 'components/HomeElements';

const Home = () => {
  useEffect(()=>{
    console.log("렌더링됨~~")
  },[])
  return (
    <div>
      <div>
        <Video src={sample} texts={["텍스트 너머의 가치를","만들어 나갑니다."]} />
        <Navbar />
      </div>
      <HomeComponent></HomeComponent>
    </div>
  )
}

export default Home
