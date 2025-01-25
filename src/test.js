import { useEffect, useState } from "react"
export default function Demo(){
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log('rendering......') 
    })
    return(
        <>
        <h1>the state val is {count1}</h1>
        <h1>the state val is {count2}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>count1</button>
        <button onClick={()=>{setCount2(count2+1)}}>count2</button>
        </>


    )
}
