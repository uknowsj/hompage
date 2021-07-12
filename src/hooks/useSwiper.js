import { useRef, useState, useEffect, useCallback } from 'react'

// moveY, snapE값 , 이벤트 함수들
const useSwiper = (number) => {
  const idx = useRef(1);
  const [moveY, setMoveY] = useState(0);
  const [snapE,setSnapE] = useState(false);

  // 데스크탑 스크린 : wheel
  const desktopWheel = (e) => {
    if (snapE) return; //translate 기다림
    if (e.deltaY > 0) { // scroll down
      if (idx.current >= number) return; // 스크롤 범위 넘어가도 return
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},600); //800ms 동안 block
      setMoveY(-window.innerHeight * (idx.current));
      idx.current++;
    }
    else { //scroll up
      if (idx.current <=1) return;
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},600);
      setMoveY(-window.innerHeight * (idx.current - 2));
      idx.current--;
    }
  }

  // 모바일 스크린 : touch
  const startY = useRef(0);
  const getStartY = (e) => { //처음 터치한 Y좌표
    startY.current = e.touches[0].screenY;
  }
  const mobileWheel = (e) => {
    const endY = e.changedTouches[0].screenY; //마지막 터치한 Y좌표
    const deltaY = startY.current - endY; 
    if (snapE) return; 
    if (deltaY >= 0) { //scroll down
      if (idx.current >= number) return;
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},600);
      setMoveY(-window.innerHeight * (idx.current));
      idx.current++;
    }
    else {
      if (idx.current <=1) return;
      setSnapE(true);
      setTimeout(()=>{setSnapE(false)},600);
      setMoveY(-window.innerHeight * (idx.current - 2));
      idx.current--;
    }
  }

  //innerHeight 대로 늘어나야함
  const reSize = () => {setMoveY(-window.innerHeight * (idx.current-1))};
  
  useEffect(() => {
    window.addEventListener("wheel", desktopWheel);
    return () => window.removeEventListener("wheel", desktopWheel);
  },[snapE]); 

  useEffect(() => {
    // 기본 스크롤 이벤트 막기
    window.addEventListener("scroll", (e) => {e.preventDefault()}, { passive:false })
    window.addEventListener("resize", () => {reSize()});
    window.addEventListener("touchstart", getStartY);
    window.addEventListener("touchend", mobileWheel);
    return () => {
      window.removeEventListener("scroll", (e) => {e.preventDefault()}, { passive:false })
      window.removeEventListener("resize", () => {reSize()});
      window.removeEventListener("touchstart", getStartY);
      window.removeEventListener("touchend", mobileWheel);
    }
  },[]);

  return [moveY, snapE];
}

export default useSwiper
