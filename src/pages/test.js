import React,{useState,useRef,useEffect} from 'react'

const Test = () => {
  const [name,setName] = useState(''); 
  const inputRef = useRef();
  const onChange = (e) => {
    setName(e.target.value);
  }
  console.log("렌더링 됨")
  console.log("inputRef : ",inputRef);
  
  useEffect(()=>{
    // 선택한 돔에 대한 코드
    console.log("inputRef in useEffect",inputRef);
  },[inputRef]);

  return (
    <div>
      <input 
        type='text' 
        value={name} 
        onChange={onChange}
        ref={inputRef}
        />
    </div>
  )
}

export default Test
