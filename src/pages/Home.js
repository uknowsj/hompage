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

  //스크롤 위치
  // const [pos, setPos] = useState(0); //나중에 context APi 로 빼기
  // const [localPos, setLocalPos] = useState(pos);
  const [snapE,setSnapE] = useState(true);
console.log("렌더링됨")
console.log("out sanpeE",snapE)
const idx = useRef(0);
const prePos = useRef(0);

// const onScroll = (flag) => {
  //   console.log("snap",snapE) //예전에 등록한 snape값이라 게속 false였음 밖에서 true고쳐줘도 ...이벤트에 등록된건 ㅅ정되지 않아.
  //   setPos(window.scrollY);
  // };
  const targets = useRef([]);
  const testTarget = useRef(3);
  const triggerPos = targets.current.map((target,idx) => target.offsetTop);
  const [scrolling,setScrolling] = useState(false);
  const [stop,setStop] = useState(false);
  console.log("out stop",stop)
  // useEffect(() => { 
    //   window.addEventListener('scroll',onScroll);
    //   return () => {
      //     window.removeEventListener("scroll",onScroll);
      //   }
      // },[]);\
      
      console.log("test targets!!",testTarget);
      // const test = () 
      // setTimeout(()=>{
      //   console.log("targets!!",targets.current[1]);
      //   targets.current[1].scrollIntoView({behavior:'smooth'});
      // },5000);

  // console.log("idx",idx.current);
  // console.log("targets",targets.current[idx.current]);
  const test = (callback) => {
    console.log("이동해야지!")
    // window.scrollTo({top:triggerPos[1],behavior:'smooth'});
    console.log("target를 못?",targets.current[0]);
    targets.current[0].scrollIntoView({behavior:'smooth'}); 
    callback(true);
  }

  const waitScroll = () => {
    return new Promise ((resolve,reject)=>{
      console.log("다운중")
      window.scrollTo({top:1800,behavior:'smooth'});
      // console.log("inseid scrolling",scrolling) 이전 scrolling값
      setTimeout(()=>{resolve(true)},500);
      // setTimeout(()=>{resolve(true)},1000)
      // resolve(true);
      // setSnapE(true);
    })
  }

  const callbackTest = (callback) => {
    window.scrollTo({top:1800,behavior:'smooth'});
    callback();
  }
  let scrollTimer;

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

  const handleScroll = async() => {
      const pos = window.scrollY; 
      console.log("prePos pos",prePos.current,pos); 
      console.log("snapE",snapE)
      if (prePos.current < pos && snapE) {
        console.log("scroll down")
        // console.log("snapeE",snapE)
        // setSnapE(true);
        // setIdx(prev => prev +1);
        // test2();
        console.log("1")
        setSnapE(false);
        console.log("2")
        window.scrollTo({top:500,behavior:'smooth'});
        setStop(true);
        setTimeout(()=>{setSnapE(true);setStop(false)},500);
        // await waitScroll();
        // setSnapE(true);
        console.log("3")
        // setSnapE(true);
        console.log("4")
        // setTimeout(()=>{setSnapE(false)},100);
        // console.log("다운중")
        // var timer = setInterval(()=>{
        //   clearInterval(timer);
        // },300)
  
        // setSnapE(true);
        // test2();
        // test(setSnapE);
  
        // targets.current[1].scrollIntoView({behavior:'smooth'});
        // setSnapE(false);
      }  
      else if (prePos.current > pos) {
        // 
        console.log("scroll up");
        // window.scrollTo({top:triggerPos[0],behavior:'smooth'})
      
      }
      prePos.current = pos;
  }

  useEffect(() => {
    console.log("effec실행")
    let timer;
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", ()=>{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        console.log("scroll end");
        setScrolling(true);
        console.log("scroll end?");
      },100)
    });
    return () => window.removeEventListener("scroll", handleScroll);
  },[snapE]);

  const test2 = async() => {
    console.log("test 시작")
    // await targets.current[0].scrollIntoView({behavior:'smooth'}); 
    await P();
    
    // window.scrollTo({top:triggerPos[0],behavior:'smooth'})
    console.log("test 끝")

    // window.scrollTo({top:triggerPos[0],behavior:'smooth'})
    // setSnapE(false);

  }
  // setTimeout(()=>{setSnapE(true)},1000);
  
  const P = () => {
    return new Promise ((resolve,reject)=>{
      window.scrollTo({top:triggerPos[0],behavior:'smooth'})
      console.log("스크롤")
      setSnapE(true);
      resolve();
    })
  }
  //스크롤 trigger 지점


  // const scrollSnap = () => {
  //   if (localPos < pos) {
  //     //scrollDown
  //     if(pos>100 & pos<triggerPos[1]) {
  //       setSnapE(true);
  //       setTimeout(()=>{setSnapE(false)},1000);
  //       targets.current[1].scrollIntoView({behavior:'smooth'})
  //     }

  //   }
  //   else if(localPos>pos) {
  //     //scrollUp
  //   }
  // }
//callback scoll 이동 후 setLocal pos
// const func = (tpos1,callback) => {
//   console.log("?")
//   window.scrollTo({top:tpos1, behavior:'smooth'});
//   callback(pos);
// }
  // useEffect(() => {
  //   const [tpos1,tpos2,tpos3,tpos4] = triggerPos;
  //   console.log("pos",pos,"localPos",localPos)

  //   if (localPos<pos) {
  //     // scrollDown
  //     if (pos>100&&pos<tpos1) {
  //       func(tpos1,setLocalPos);
  //     } 

  //   }
  //   else if(localPos>pos) {
  //     //scrollUp
  //     setLocalPos(pos)
  //     if(pos>tpos2&&pos<tpos3) {
  //       func(tpos2,setLocalPos);
  //     }
  //   }
  // },[triggerPos, pos, localPos]);

  // if (200<pos&&pos<triggerPos[1]) {
  //   window.scrollTo({top:triggerPos[0],behavior:'smooth'})
  // }
  // console.log("out",snapE);
  // console.log("pos는 ",pos);

  // setTimeout(()=>{setSnapE(true);console.log("this is in set")},5000)
  // // console.log("snapeE",snapE)
  // if (snapE) {
  //   console.log("instide",snapE)
  //   targets.current[1].scrollIntoView({behavior:'smooth'})
  // }

  return (
    <div>
      <div style={{scrollSnapAlign: 'start'}} ref={testTarget}>
        <Video src={sample} texts={["텍스트 너머의 가치를","만들어 나갑니다."]} />
        <Navbar />
      </div>
      <div className="test" ref={(el)=>targets.current[0]=el}>
        <SectionCulture 
          title={'문화를 만들어 나갑니다'}
          discription={'텍스트 너머의 가치'}
          infoText={[
            "오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게", 
            "만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!",
            "세상의 모든 이야기를 카카오페이지에서 즐겨보세요."
          ]}
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
