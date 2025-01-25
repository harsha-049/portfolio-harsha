import {createSlice} from '@reduxjs/toolkit'

const initialState={
    fuser:[]
}

export const fruitSlices=createSlice({
    name :"fruitSlice",
    initialState,
    reducers : {
        setFruit:(state, action)=>{
            state.fuser=[...state.fuser,action.payload]
        }
    }

}
)
export const{setFruit}=fruitSlices.actions
export default fruitSlices.reducer