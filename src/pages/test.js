let type = true;
let idx = 0;
setTimeout(()=>{console.log("뭐야");type=false},100);

while(idx<5) {
  console.log("나옴1")
  console.log("idx",idx++);
  console.log("나옴2")
}

//반복문이 계속돌아서 ... setTimeout 콜백함수가 js 스택에 못들어가는듯