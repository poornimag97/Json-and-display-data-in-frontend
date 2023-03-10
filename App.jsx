import React from 'react'
import JSON from "./userdata.json"
import Company from './Company'
import "./global.css"


const App=()=>{
    return(
        <>
       <Company data={JSON}/>
        </>)
}  
export default App;