import { PageContainer } from 'components/Container'
import React from 'react'
import { Section1, Section2_, Section3, Section4, Section5, Section6 } from './MainSection'
import TopSection from './TopSection'
import Footer from 'components/Footer'
const Business = () => {
  return (
    <PageContainer>
      <TopSection />
      <Section1/>      
      <Section2_ />      
      <Section3 />      
      <Section4 />      
      <Section5 />      
      <Section6 />      
      <Footer />
    </PageContainer>
  )
}

export default Business
