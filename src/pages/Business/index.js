import { PageContainer } from 'components/Container'
import React from 'react'
import { Section1, Section2 } from './MainSection'
import TopSection from './TopSection'

const Business = () => {
  return (
    <PageContainer>
      <TopSection />
      <Section1 />      
      <Section2 />      
    </PageContainer>
  )
}

export default Business
