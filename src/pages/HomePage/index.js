import React, { useRef, useContext, useState, useEffect } from 'react'
import { Context } from 'context'
import { PageContainer } from 'components/Container'
import TopSection from './TopSection'
import { Section1, Section2, Section3 } from './MainSection'

//모바일 컴포넌트
import { MobSection1, MobSection2, MobSection3 } from './MainSectionMob'

import { HomeKr, HomeEng } from 'data';
import Footer from 'components/Footer'

import main from 'assets/videos/main.mp4';

const HomePage = () => {
  const targets = useRef([]);
  const {state:{language}} = useContext(Context);
  let langType = language.selected==='KOR'?HomeKr:HomeEng

  // const [snapE,setSnapE] = useState(false);
  // const prePos = useRef(0);
  // const idx = useRef(-1);

  
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   if (snapE) {
  //     document.body.classList.add("stop-scroll");
  //     console.log("stop scorll")
  //   }
  //   else {
  //     document.body.classList.remove("stop-scroll")
  //   } 
  //   return () => window.removeEventListener("scroll", handleScroll);
  // },[snapE]);


  // console.log("out snapE",snapE);

  // let timer;
  // const handleScroll = (e) => {
  //   if (!timer) {
  //     timer = setTimeout(() => {
  //       timer=null;
  //       const pos = window.scrollY; 
  //       console.log(prePos.current,' ',pos)
  //       console.log("inside idx",idx.current);
  //       if (prePos.current < pos && !snapE) {
  //         console.log("scroll down")
  //         setSnapE(true);
    
  //         e.preventDefault();
          
  //         if (idx.current < 3) {
  //           window.scrollTo({top:targets.current[++idx.current].offsetTop,behavior:'smooth'});
  //           // targets.current[0].scrollIntoView({behavior:'smooth', block: "end", inline: "nearest"})
  //           console.log("moving down")
  //         }
  //         setTimeout(()=>{setSnapE(false)},600);
  //       }  
  //       else if (prePos.current > pos && !snapE) {
  //         console.log("scroll up")
  //         setSnapE(true)
  //         if (idx.current > 0) {
  //           console.log("moving up")
  //           window.scrollTo({top:targets.current[--idx.current].offsetTop,behavior:'smooth'});
  //         }
  //         else if (idx.current===0) {
  //           console.log("moving up")
    
  //           window.scrollTo({top:0,behavior:'smooth'});
  //           idx.current=-1;
  //         } 
  //         setTimeout(()=>{setSnapE(false)},600);
  //       }
  //       prePos.current = pos;
  //     },200);
  //   }
  // }

  return (
      <PageContainer>
        {/* 수정필요 forwardRef? 전역변수 -> 자식컴포에서 수정? */}
        <div ref={(el)=>targets.current[0]=el}>  
          <TopSection/>
        </div>
        <div ref={(el)=>targets.current[1]=el}>
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
        </div>
        <div ref={(el)=>targets.current[2]=el}>
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
        </div>
        <div ref={(el)=>targets.current[3]=el}>
          <Section3
            header={langType.section3.header}
            companyName={langType.section3.companyName}
            companyInfo={langType.section3.companyInfo}
            desc={langType.section3.desc}
            inquiryTitle1={langType.section3.inquiryTitle1}
            inquiryTitle2={langType.section3.inquiryTitle2}
            inquiryText={langType.section3.inquiryText}
          />
          <MobSection3 
            header={langType.section3.header}
            companyName={langType.section3.companyName}
            companyInfo={langType.section3.companyInfo}
            desc={langType.section3.desc}
            inquiryTitle1={langType.section3.inquiryTitle1}
            inquiryTitle2={langType.section3.inquiryTitle2}
            inquiryText={langType.section3.inquiryText}
          />
        </div>
        <Footer></Footer>
      </PageContainer>
      
  )
}

export default HomePage