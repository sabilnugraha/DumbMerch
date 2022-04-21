import { useState } from "react"
import { useParams } from "react-router-dom"
import {data} from './list'
import Nav from './navbar'
import './App.css';

function Edit() {
    const params = useParams()
    const index = params.id
    return(
        <div className="editCategory">
            <Nav />
            <div className="listCategory">
               <h3 className="product"> Edit</h3>
               <form>
               <input className='inputEmail col-12 mt-3' type="text" placeholder= {data[index].product} />
               <button className="editButton col-12 mt-3">Save</button>
                   
                  
               </form>
               </div>
              

        </div>
    )
    
   
    
}

export default Edit