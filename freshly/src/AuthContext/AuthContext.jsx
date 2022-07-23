import React, { createContext } from 'react';
import { useReducer } from 'react';
const reducer =(state,action)=>{
switch(action.type){
   case "LOGIN_SUCCESS":{
return{
    ...state,
    isAuth: true,
    token: action.token
}
   }
   case"LOGOUT_SUCCESS":{
    return{
        ...state,
        isAuth: false,  
        token:null
    }
   }
   default:{
    return state ;
   }

}
}
export const AuthContext=createContext()
const initial={
    isAuth: false,
    token: null
}
const AuthProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initial)
    return (<AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>)
}
export default AuthProvider