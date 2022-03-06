import { types } from "../types/types";

const initialState={
  dataUser:''
}


export  const addUserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.addUser:
            return{
                dataUser:action.payload
            }
        default:
            return state;
    }
}