import React, { useCallback, useState } from 'react'

export const Textfield = () => {
    const [state,setState]=useState("");
    const [value,setValue]=useState("")
    const handleChange =useCallback((e:  React.ChangeEvent<HTMLInputElement>)=>{
        console.log('one')
            setState(e.target.value);
    },[]) 
  return (
    <div style={{marginTop:100}}>
          Name:     
          <input style={{marginLeft:10}} type="text" value={state} onChange={handleChange} />
          <button style={{marginLeft:20}} onClick={()=>{
            setValue(state);
            setState("");
          }}>Submit</button>
          <div style={{color:"red"}}>
            {value}
            </div> 
    </div>
  )
}
