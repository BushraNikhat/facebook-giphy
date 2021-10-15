import React,{createContext,useReducer} from "react"
import Reducer from "./Reducer"


// IntialState
const InitialState=[

]

// AuthContext

export const AuthContext=createContext(InitialState)

// globalProvider
export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,InitialState)
    return <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
}