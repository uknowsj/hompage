import React, { useState, useEffect, useRef} from 'react'
import Navbar from 'components/Navbar'
import { Video } from 'components/Util'
import sample from 'assets/videos/main.mp4';
import Container from 'components/Container';
import building from 'assets/images/building.jpg';
import styled from 'styled-components'

import {default as HomeComponent} from 'components/HomeElements';

import { SectionCulture, SectionValue, SectionCompany} from 'components/HomeElements';


const Home = () => {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });


  const [snapE,setSnapE] = useState(true);
  const prePos = useRef(0);
  const idx = useRef(-1);
  
  console.log("렌더링됨")
  console.log("out sanpeE",snapE)
console.log("out idx",idx.current);


const [stop,setStop] = useState(false);
const targets = useRef([]);

console.log("out stop",stop)
console.log("out targets",targets)


useEffect(()=>{
  console.log("stop effect")
  if (stop) {
    console.log("inside stop",stop);
    document.body.classList.add("stop-scroll");
  }
  else {
    document.body.classList.remove("stop-scroll")
  } 
},[stop])

  const handleScroll = () => {
      const pos = window.scrollY; 
      // console.log("prePos pos",prePos.current,pos); 
      console.log("snapE",snapE)
      if (prePos.current < pos && snapE) {
        console.log("scroll down")
       console.log("1")
        setSnapE(false);
        console.log("2")
        console.log("idx",idx.current);
        console.log("in targets",targets)
        if(idx.current+1<=2){
          idx.current+=1;
          console.log("current",targets.current[idx.current])
          window.scrollTo({top:targets.current[idx.current].offsetTop,behavior:'smooth'});
        }
        setStop(true);
        setTimeout(()=>{setSnapE(true);setStop(false)},1000);
        console.log("3")

      }  
      else if (prePos.current > pos && snapE) {
        // 
        console.log("scroll up");
        console.log("끝까지옴!!!")
        setSnapE(false)
        window.scrollTo({top:0,behavior:'smooth'});
        setStop(true)
        setTimeout(()=>{setSnapE(true);setStop(false)},600);
        idx.current=-1;

        // window.scrollTo({top:triggerPos[0],behavior:'smooth'})
      
      }
      prePos.current = pos;
  }

  useEffect(() => {
    console.log("effec실행")
    let timer;
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[snapE]);



  return (
    <div>
      <div >
        <Video src={sample} texts={["텍스트 너머의 가치를","만들어 나갑니다."]} />
        <Navbar />
      </div>
      <div className="test" ref={(el)=>targets.current[0]=el}>
        <SectionCulture 
          title={'문화를 만들어 나갑니다'}
          discription={'텍스트 너머의 가치'}
          text={
            `오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게
            만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!
            세상의 모든 이야기를 카카오페이지에서 즐겨보세요.`
          }
        />
      </div>
      <div className="standard" ref={(el)=>targets.current[1]=el}>
        <SectionValue 
          title={'우리가 추구하는 가치'}
          middleTitle={['HUMAN','MONEY','TRUST']}
          Texts={[
            ['독자의 시선으로 콘텐츠을 제작하고','건전한 창작 문화를 활성화하기 위하여',
              '시작된 뷰컴즈는 전자책 전문 제작·유통'],
            ['아이들의 별이 아름다운 봅니다.', '가난한 나는 헤일 하나에 계십니다.',
              '이네들은 하나 오면 마리아 청춘이 거외다.','내 못 별 봄이 가득 너무나 까닭입니다.'],
            ['아이들의 별이 아름다운 봅니다.', '가난한 나는 헤일 하나에 계십니다.',
              '이네들은 하나 오면 마리아 청춘이 거외다.','내 못 별 봄이 가득 너무나 까닭입니다.'],
            ['아이들의 별이 아름다운 봅니다.', '가난한 나는 헤일 하나에 계십니다.',
              '이네들은 하나 오면 마리아 청춘이 거외다.','내 못 별 봄이 가득 너무나 까닭입니다.']
          ]}
        />
      </div>
      <div ref={(el)=>targets.current[2]=el}>
        <SectionCompany
          title={'작가의 밝은 미래,\n뷰컴즈가 함께 하겠습니다.'}
          text={[
            `서울특별시 서초구 동광로1길 99 4층
            070-7783-0904\ncontact@viewcommz.com`,
            `현대로맨스 / 로맨스판타지 / BL
            출간일정으로 인하여
            ​당분간 투고접수를 마감합니다. (판타지 / 무협 제외)
            너른 양해 부탁드립니다.`    
          ]}
          mdTitle={'문의하기'}
        />
      </div>
      {/* <HomeComponent></HomeComponent> */}
    </div>
  )
}

export default Home
