import React,{useState,useRef,useEffect} from 'react'

const Test = () => {
  const [name,setName] = useState(''); 
  const pos = useRef();
  const onChange = (e) => {
    console.log("value",e.target.value);
    setName(e.target.value);
  }
  console.log("렌더링 됨")
  console.log("out name",name);
  console.log("out ref",pos);
  
  useEffect(()=>{
    console.log("inner ref",pos);
    
  },[pos]);
  return (
    <div>
      <input type='text' value={name} onChange={onChange}/>
      <div style={{border:'1px solid red', width:'500px',height:'500px',marginTop:'300px'}}
        ref={pos}
      >
        hello
      </div>
    </div>
  )
}

export default Test
