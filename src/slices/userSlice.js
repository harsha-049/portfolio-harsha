import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    user:[]
}



export const userSlice= createSlice({
    name:'mySlice',
    initialState,
    reducers:{
        setUsers:(state,action)=> {
            state.user=[...state.user,action.payload]
        }

    }

})

export const{setUsers}=userSlice.actions
export default userSlice.reducer