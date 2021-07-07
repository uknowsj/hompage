import React,{useState,useRef,useEffect} from 'react'
import { Slide } from 'components/Slide'
import styled from 'styled-components'
import _ from 'lodash'

const Test = () => {
  const idx = useRef(1);
  const [moveY, setMoveY] = useState(0);
  const { innerHeight, scrollY } = window;
  const prePos = useRef(0);
  const [snapE,setSnapE] = useState(false);

  const handleScroll = () => {
      console.log("함수실행")
    // console.log("scroll",prePos.current, window.scrollY);
    // console.log("snapE",snapE)
    // if ((prePos.current < window.scrollY) && !snapE) {
      console.log("들어옴 idx",idx.current)
      if (snapE) return; 
      if (idx.current >= 4) return;
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},1000);
      // e.preventDefault();
      // e.stopPropagation();
      console.log("inside snapE",snapE)
      
      setMoveY( -innerHeight * (idx.current));
      idx.current++;
    // }
    // prePos.current = window.scrollY;
  }

  const handle = () => {
    console.log(window.scrollY);
  }
  useEffect(() => {
    console.log("effec실행")
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[snapE]); //moveY가 바뀌자마자 새로 등록되어서 700초 안기다림
  
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
