import { useState } from "react";
import {setFruit} from "./slices/fruitSlice";
import { useDispatch } from "react-redux";


export default function Fruit(){
    const dispatch=useDispatch()
    const [obj,setObj]=useState("")

    const addfruits=(formdata)=>{
        formdata.preventDefault()
        dispatch(setFruit(obj))
    }


    function updData(data){
        var val=data.target.value
        setObj(val)
        console.log(obj)
    }


    return(
        <>
        
            fruitName: <input type='text' onChange={updData}></input><br/><br/>
            <input type="submit" onClick={addfruits}value="addFruits"></input>
        
        </>
    )
}