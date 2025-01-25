import {createSlice} from "@reduxjs/toolkit"

const initialState={
    arrays:[]
}

export const  arraySlice=createSlice({
    name:"arrSlice",
    initialState,
    reducers:{
        setArr:(state,action)=>{
            state.arrays=[...state.arrays,action.payload]
            console.log(state.arrays)
        }
    }
}
)

export const {setArr}=arraySlice.actions
export default arraySlice.reducer