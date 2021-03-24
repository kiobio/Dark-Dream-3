import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Galaxy from "./Galaxy";





function Galaxies(){
    const [galaxy, setGalaxy] = useState([])

    async function fetchGalaxies(){
        const response = await fetch('/api/galaxies')
        const data = await response.json();
        setGalaxy(data);

    }

    useEffect(()=> {
        fetchGalaxies()
      },[])

    return(
        <div className ="Galaxies">
            {galaxy.map((galaxy, index)=>(
             <Link to ={`/Galaxy/${galaxy.id}`}>
                <Galaxy
                key={index}
                galaxy={galaxy}
                />
             </Link>
            ))}
             
        </div>
    )
}

export default Galaxies;