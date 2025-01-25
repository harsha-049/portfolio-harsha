import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import fruitReducer from '../slices/fruitSlice';
import arrReducer from '../slices/arrSlice';
const variable=configureStore({
    reducer:{
        userInfo:userReducer,
        fruitInfo:fruitReducer,
        arrInfo:arrReducer
    }
})
export default variable