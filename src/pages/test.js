import React,{useState,useRef,useEffect} from 'react'
import { Slide } from 'components/Slide'
import styled from 'styled-components'

const Test = () => {
  const handleClick = () => {
    console.log("클릭~")
    //right 클릭시 

  }
  return (
    <div>
      <Button onClick={handleClick}>이전</Button>
      <RButton>다음</RButton>
      <Slide number>
        <Compo bg="#ffe3e3"/>
        <Compo bg="#ffc9c9"/>
        <Compo bg="#ffa8a8"/>
        <Compo bg="#ff8787"/>
      </Slide>
    </div>
  )
}

const Compo = styled.div`
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
`

const RButton = styled(Button)`
  left: 10%;
`
export default Test
