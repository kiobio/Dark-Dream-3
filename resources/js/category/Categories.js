import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Categories(){

    const[categories, setCategories] = useState([])
    
    

    async function fetchCategories(){
        const response = await fetch('/api/categories')
        const data = await response.json();
        //console.log(data)
        setCategories(data);
    }

    useEffect(()=>{
        fetchCategories()
    }, []);



    return(
        <div className="Categories">
            {categories.map((category, index)=>(
                
                   <Link to ={`/items/all/${category.id}`}>
                        <div key={index} className="Category">
                            <h2>{category.name}</h2>
                            <img src={category.image} alt={category.name}/>
                        </div>
                   </Link>
                
            ))}
        </div>
    )
}
export default Categories;