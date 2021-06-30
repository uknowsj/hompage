import React from 'react'

const Home = () => {
  return (
    <PageContainer>
      <TopSection>
        <NavBar />
      </TopSection>
      <InnerContentContainer>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
      </InnerContentContainer>
      <Footer />
    </PageContainer>
  )
}

export default Home
