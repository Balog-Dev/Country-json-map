import React from 'react';
import './App.css';
import { useState } from 'react';
import axios  from "axios";
import { useEffect } from 'react';
import Data from "./gistfile1.json"


 const App = ()=>{
    const [country, setCountry] = useState([]);
    const [states, setStates] = useState([])


    

    useEffect(() => {
       console.log(Data.countries.states);
       setCountry(Data.countries)
    }, [])

    const showStates = (ev)=>{
        let[sel_states]= country.filter(f =>f.country == ev.currentTarget.value);
        setStates(sel_states.states)
    }
    return (

        <main>
             <div className="p-4 d-flex " style={{backgroundColor: "whitesmoke"}}>
                 <h1 style={{color: "darkblue"}}>List of Countries</h1>
             </div>
             
             <div className='d-flex justify-content-between'>

                    <select onChange={(ev)=> showStates(ev)} className="form-select" aria-label='Default select example' style={{width: "20%"}} id="">Select Country
                    <option value='select country'>select country</option>             
                        {country.map((items, index )=>(
                          <option key={index} value={items.country}>{items.country} </option>             

                        ))}
                    </select>


                    <select  className="form-select" aria-label='Default select example' style={{width: "20%"}} id="">Select Country
                    <option value='select country'>select state</option>             
                        {states.map((items, index )=>(
                          <option key={index} value={items}>{items} </option>             

                        ))}
                    </select>

                 
             </div>


             <div>
                 <section>
                     <input type="text" name="" id="" />
                     <input type="password" placeholder="" id="" />
                 </section>
             </div>
  
         </main>

         

    )


    // Password able and disable section

    // const [showPasword, setShowPassword] = useState(false);
    
    
    // const toggle =()=>{
    //     setShowPassword(!showPasword)
    // }

    //     return(
            

    //         <div>
    //             <br />
    //             <input type= {showPasword ? "text":"password"} />
    //             <button onClick={toggle}>Show</button>                    
    //       </div>
    //       )

  
}








export default App;

