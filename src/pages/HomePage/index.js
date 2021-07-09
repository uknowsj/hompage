import React, { useRef, useContext, useState, useEffect, useCallback } from 'react'
import { Context } from 'context'
import { PageContainer } from 'components/Container'
import TopSection from './TopSection'
import { Section0, Section1, Section2, Section3 } from './MainSection'
import { Slide } from 'components/Slide'

//모바일 컴포넌트
import { MobSection1, MobSection2, MobSection3 } from './MainSectionMob'

import { HomeKr, HomeEng } from 'data';
import Footer from 'components/Footer'

import main from 'assets/videos/main.mp4';
import useSwiper from 'hooks/useSwiper'

import Navbar from 'components/Navbar'
const HomePage = () => {
  const {state:{language}} = useContext(Context);
  let langType = language.selected==='KOR'?HomeKr:HomeEng

  // 전체 페이지 Swiper
  const [moveY, snapE] = useSwiper(4);
  
  return (
    <>
    {/* moveY가 0이 아니면 navBar 배경 추가 */}
    <Navbar moveY={moveY}/> 
    <Slide moveY={moveY} snapE={snapE} className="slide">
      <PageContainer>
        <TopSection/>
        {/* <Section0/> */}
        <Section1 
          header={langType.section1.header} 
          title={langType.section1.title} 
          desc={langType.section1.desc}
        />
        <MobSection1
          header={langType.section1.header} 
          title={langType.section1.title} 
          desc={langType.section1.desc}
        />
        <Section2
          header={langType.section2.header}
          desc={langType.section2.desc}
          cards={langType.section2.cards}
        />
        <MobSection2
          header={langType.section2.header}
          desc={langType.section2.desc}
          src={main}
        />
        <Section3
          header={langType.section3.header}
          companyName={langType.section3.companyName}
          companyInfo={langType.section3.companyInfo}
          desc={langType.section3.desc}
          inquiryTitle1={langType.section3.inquiryTitle1}
          inquiryTitle2={langType.section3.inquiryTitle2}
          inquiryText={langType.section3.inquiryText}
        />
        {/* <MobSection3 
          header={langType.section3.header}
          companyName={langType.section3.companyName}
          companyInfo={langType.section3.companyInfo}
          desc={langType.section3.desc}
          inquiryTitle1={langType.section3.inquiryTitle1}
          inquiryTitle2={langType.section3.inquiryTitle2}
          inquiryText={langType.section3.inquiryText}
        /> */}
        <Footer></Footer>
      </PageContainer>
    </Slide>
    </>
  )
}

export default HomePage