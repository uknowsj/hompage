import React, {useRef} from 'react'
import { PageContainer } from 'components/Container'
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'

const HomePage = () => {
  const targets = useRef();

  return (
      <PageContainer>
        <TopSection ref={targets}/>
        <MiddleSection />
      </PageContainer>
      
  )
}

export default HomePage