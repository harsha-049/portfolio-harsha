import { useState } from "react";
import {setUsers} from "./slices/userSlice";
import { useDispatch } from "react-redux";


export default function Form(){
    const dispatch=useDispatch()
    const [obj,setObj]=useState({name:'',roll:'',gender:'',city:''})

    const addUser=(formdata)=>{
        formdata.preventDefault()
        dispatch(setUsers(obj))
    }

    // function formSubmit(formdata)
    // {    
    //     formdata.preventDefault()
    //     console.log('success.........',obj.city,obj.gender,obj.name,obj.roll)
    // }

    function updData(data){
        var variable=data.target.name
        var val=data.target.value
        setObj(()=>{return {...obj,[variable]:val}})
    }


    return(
        
        <>
            {/* Name: <input type='text' name="name" onChange={updData}></input><br/><br/>
            Rollno: <input type='text' name="roll" onChange={updData}></input><br/><br/>
            Gender: <input type='text' name="gender" onChange={updData}></input><br/><br/>
            City: <input type='text' name="city" onChange={updData}></input><br/><br/>
            <input type="submit" onClick={addUser}value="signup"></input> */}

        <form>
                <div class='container'>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={updData}></input>
                <div id="name" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">RollNo</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="roll" onChange={updData}></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Gender</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="gender" onChange={updData}></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">City</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="city" onChange={updData}></input>
            </div>
            
            <button type="submit" class="btn btn-primary"onClick={addUser}>SignUp</button>
            </div>
        </form>
    
    </>
    )
}