import React, { useState, useEffect, useRef} from 'react'
import Navbar from 'components/Navbar'
import { VideoBanner } from 'components/Util'
import sample from 'assets/videos/main.mp4';

import { SectionCulture, SectionValue, SectionCompany} from 'components/HomeElements';


const Home = () => {
  const [snapE,setSnapE] = useState(false);
  const prePos = useRef(0);
  const idx = useRef(-1);
  const targets = useRef([]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (snapE) {
      document.body.classList.add("stop-scroll");
      console.log("stop scorll")
    }
    else {
      document.body.classList.remove("stop-scroll")
    } 
    return () => window.removeEventListener("scroll", handleScroll);
  },[snapE]);


  console.log("out snapE",snapE);

  let timer;
  const handleScroll = (e) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer=null;
        const pos = window.scrollY; 
        console.log(prePos.current,' ',pos)
        console.log("inside idx",idx.current);
        if (prePos.current < pos && !snapE) {
          console.log("scroll down")
          setSnapE(true);
    
          e.preventDefault();
          
          if (idx.current < 2) {
            window.scrollTo({top:targets.current[++idx.current].offsetTop,behavior:'smooth'});
            // targets.current[0].scrollIntoView({behavior:'smooth', block: "end", inline: "nearest"})
            console.log("moving down")
          }
          setTimeout(()=>{setSnapE(false)},600);
        }  
        else if (prePos.current > pos && !snapE) {
          console.log("scroll up")
          setSnapE(true)
          if (idx.current > 0) {
            console.log("moving up")
            window.scrollTo({top:targets.current[--idx.current].offsetTop,behavior:'smooth'});
          }
          else if (idx.current===0) {
            console.log("moving up")
    
            window.scrollTo({top:0,behavior:'smooth'});
            idx.current=-1;
          } 
          setTimeout(()=>{setSnapE(false)},600);
        }
        prePos.current = pos;
      },200);
    }
  }




  return (
    <div>
      <div >
        <VideoBanner src={sample} texts={`텍스트 너머의 가치를\n만들어 나갑니다`} />
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
