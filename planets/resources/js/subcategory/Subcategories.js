import { useEffect, useState } from "react";





function Subcategories(){
    const [subcategories, setSubcategories] = useState([]);
    
    async function fetchSubcategories(){
        const response = await fetch('/api/subcategories')
        const data = await response.json()
        setSubcategories(data);
        console.log(data)
        
    }

    useEffect(()=> {
        fetchSubcategories()
      },[])


    return(
        <div>
            {subcategories.map((subcategory, index)=>(
               <div key={index}>
                   <h2>{subcategory.name}</h2>
                                      
                </div>
            ))}
        </div>
    )
}
export default Subcategories;