import React ,{useContext} from 'react'
import Share from "./Share"
import Feeds from "./Feeds"
import { AuthContext } from "../context/State"

const Center = () => {
    const {state} =useContext(AuthContext)

    return (
        <>
        <div className="center_container ">
        <div className="row d-flex justify-content-center pt-5">
            <div className="col-lg-8 col-12 share_container p-3  mb-5  shadow">
               <Share/>
               
            </div>
            <div className="col-sm-8 col-10 ">
            {/* mapping feeds in reverse order */}
            {state.slice(0).reverse().map((element,id)=>{
                return  <Feeds key={id} text={element.text}
                                gify={element.gify}
                />
            })}
             
               
            </div>
        </div>
            
        </div>
            
        </>
    )
    
}

export default Center
