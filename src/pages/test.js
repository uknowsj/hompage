import React,{useState,useRef,useEffect} from 'react'
import { Slide } from 'components/Slide'
import styled from 'styled-components'
import _ from 'lodash'

const Test = () => {
  const idx = useRef(1);
  const prePos = useRef(0);
  const [moveY, setMoveY] = useState(0);
  const { innerHeight, scrollY } = window;
  const [snapE,setSnapE] = useState(false);

  //데스크톱


  const handleScroll = (e) => {
      // 스크롤 중이면 return
      console.log("이몸 입장~", prePos.current, window.scrollY)
      if (snapE) return; 
      // 스크롤 방향 판단
      if (e.deltaY>0) { //scroll down
        if (idx.current >=4) return; // 스크롤 범위 넘어가도 return
        setSnapE(true);
        setTimeout(()=>{setSnapE(false)},800); //600ms 동안 block
        setMoveY( -window.innerHeight * (idx.current));
        idx.current++;
      }
      else { //scroll up
        if (idx.current <=1) return;
        setSnapE(true);
        setTimeout(()=>{setSnapE(false)},800); //600ms 동안 block
        setMoveY(-innerHeight * (idx.current - 2));
        idx.current--;
      }
  }

  const startY = useRef(0);
  const getStartY = (e) => {
    startY.current = e.touches[0].screenY;
  }
  const moblieScroll = (e) => {
    const endY = e.changedTouches[0].screenY;
    console.log("start end",startY,endY);
    const deltaY = startY.current - endY; 
    if (snapE) return; 
    if (deltaY >= 0) { //scroll down
      if (idx.current >=4) return; // 스크롤 범위 넘어가도 return
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},800); //600ms 동안 block
      setMoveY( -window.innerHeight * (idx.current));
      idx.current++;
    }
    else {
      if (idx.current <=1) return;
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},800); //600ms 동안 block
      setMoveY(-innerHeight * (idx.current - 2));
      idx.current--;
    }
  }

  useEffect(() => {
    // prePos.current = window.scrollY;
    window.addEventListener("wheel", handleScroll);
  
    return () => window.removeEventListener("wheel", handleScroll);
  },[snapE]); 

  const reSize = () => {
    //innerHeight 대로 늘어나야함
    console.log("idx",idx.current);
    setMoveY(-window.innerHeight * (idx.current-1))

  }

  useEffect(() => {
    
    window.addEventListener("resize",()=>{
      reSize();
    })
    window.addEventListener("touchstart", getStartY);
    window.addEventListener("touchend", moblieScroll);
  },[]);
  
  const LClick = () => {
    console.log("idx",idx.current);
    
    if (idx.current <= 1) return;
    setMoveY(-innerHeight * (idx.current - 2));
    idx.current--;
  } 
  const handleClick = () => {
    if (idx.current >= 4) return;
    setMoveY(moveY - innerHeight);
    console.log("r idx",idx.current)
    idx.current++;
  }
  return (
    <div>
      <Button onClick={LClick}>이전</Button>
      <RButton onClick={handleClick}>다음</RButton>
      <Slide number={moveY} snapE={snapE}>
        <Compo bg="#ffe3e3"/>
        <Compo bg="#ffc9c9"/>
        <Compo bg="#ffa8a8"/>
        <Compo bg="#ff8787"/>
      </Slide>
    </div>
  )
}

const Compo = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.bg};
`

const Button = styled.button`
  position: fixed;
  width:50px;
  height:50px;
  background: black;
  color: white;
  z-index: 100;
`

const RButton = styled(Button)`
  left: 10%;
`
export default Test
