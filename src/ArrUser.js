import {useState,useEffect} from "react"
import {useDispatch} from "react-redux"
import {setArr} from "./slices/arraySlice"

export default function ArrUser(){
    const dispatch=useDispatch()
    const [arr,setData]=useState([])

    useEffect(() => {
        console.log(arr);
      }
    )

    function addElement(){
        setData([...arr,arr.length+1])
    }

    function resetArr(){
        setData([1])
    }

    function addArr(){
        dispatch(setArr(arr))
    }

    return(
        <>
        <input type="button" onClick={addElement} value="Click Me"></input>
        <input type="button" onClick={addArr} value="Add Array"></input>
        <input type="button" onClick={resetArr} value="Reset"></input>
        </>
    )
}