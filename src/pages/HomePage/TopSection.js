import React from 'react'
import { VideoBanner } from 'components/Util'
import { sample } from 'assets/videos/main.mp4'

const TopSection = () => {
  return (
    <div>
      <VideoBanner 
        src={ sample } 
        texts={
          `텍스트 너머의 가치를
          만들어 나갑니다.`
        } />
      
    </div>
  )
}

export default TopSection
