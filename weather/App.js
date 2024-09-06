import React, { useEffect, useState } from "react";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const App =()=>{
    const [city, setCity]=useState(null);
    const [search, setSearch]=useState("pune");

    useEffect(()=>{
        const fetchApi = async ()=>{        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=30c357a7c395159cf9fcb4e6960cd788`
        const response= await fetch(url);
        const resjson =  await response.json();
        setCity(resjson.main);
        };
        fetchApi();
    },[search])

    const handle =(event)=>{
        setSearch(event.target.value);
    }

    return(
        <>
            <div className="main-div">
             <div className="input">
               <input type="search" 
               className="int"
                value={search}
                 placeholder="search" 
                 onChange={handle}/>
             </div>
             <br/>
             <br/>
             <br/>
             { !city?( <p> Not Data Found </p>
             )  : (
                <div>
                <div className="head">
                <h1 className="loc"><CloudQueueIcon/>{search} </h1>
                <h2 className="weath">{city.temp}°C</h2>
                <br/>
                <h3 className="min-max">min:{city.temp_min}°C|  max:{city.temp_max}°C</h3>                
             </div>
             <div className="wave -one"></div>
             <div className="wave -two"></div>
             <div className="wave -three"></div>  
                
             </div>
             )}
                      

            </div>
        </>
    );
};

export default App;