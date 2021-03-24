import { useEffect, useState } from "react";
import { Link } from "react-router-dom";






function Universes(){

    const[universes, setUniverses] = useState([]);
    
    

    

    async function fetchUniverses(){
        const response = await fetch('/api/universes')
        const data = await response.json()
        setUniverses(data);
        
    }

    useEffect(()=> {
        fetchUniverses()
      },[])

      

    return(
        <div className="Galaxies">
            
           
                <div >
                    
                        {universes.map((universe, index)=>(
                        <Link to={`/universes/${universe.id}`}>
                            <div key={index}
                            className="Universe">
                                           
                                       
                                <h2>{universe.name}</h2>
                                <img  src={universe.image} alt={universe.name}/>
                            </div> 
                        </Link>
                    ))}
        
                  
                </div>
           
        </div>
    )
}
export default Universes;