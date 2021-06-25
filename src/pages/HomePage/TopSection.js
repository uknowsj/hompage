import React from 'react'
import { SectionContainer } from 'components/Container'
import { VideoBanner } from 'components/Util'
import sample from 'assets/videos/main.mp4'
import Navbar from 'components/Navbar'

const TopSection = () => {
  return (
    <SectionContainer>
      <VideoBanner src={ sample } texts={`텍스트 너머의 가치를\n만들어 나갑니다.`} />
      <Navbar />
    </SectionContainer>
  )
}

export default TopSection
