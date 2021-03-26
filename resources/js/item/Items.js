import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '../../../storage/img/search.png';



function Items(){
    const[items, setItems]= useState([])
    const[searchedTerm, setSearchedTerm] = useState("") 
    
   

    async function fetchItems(){
        const response = await fetch("/api/items")
        const data = await response.json();
        setItems(data)
    }


    useEffect(()=> {
         fetchItems()
      },[])

      function handleChange(e){
          setSearchedTerm(e.target.value)

      }

    return(
        
        <div >
            
                <div className="SearchBar">
                    <div>
                       <p> Search by name  or  choose a category</p>
                    </div>
                   <div>
                       
                        <img className="img" src={SearchIcon} />
                        <input type="text" placeholder="Search by name"
                            value ={searchedTerm}
                            onChange={handleChange}
                        />
                   </div>
                    <div className="select">
                       
                        <select 
                        onChange={(e)=> setSearchedTerm(e.target.value)}
                        >
                            <option value="">All categories</option>
                            <option value="planet">Planets</option>
                            <option value="moon">Moons</option>
                            <option value="star">Stars</option>
                            <option value="nebula">Nebulas</option>
                            <option value ="black hole">Black holes</option>
                            <option value="spaceship">Spaceships</option>
                            <option value="others">Others</option>
    
                        </select>
                    </div>
                
            </div>
            <div className = "Items">
                {items.filter((item)=>{
                    if(searchedTerm === ""){
                        return item
                    } else if(item.name.toLowerCase().includes(searchedTerm.toLowerCase()) || item.subcategory && item.subcategory.name.toLowerCase().includes(searchedTerm.toLowerCase())){
                        return item
                    } 
                }).map((item, index)=>(
    
                    <Link to={`/items/${item.id}`}>
                        <div key={index} className = "Galaxy">
                            <h2>{item.name}</h2>
                            {item.subcategory ?        
                            <p>{item.type}, {item.subcategory.name} </p>:<p>{item.type}, Starship </p>}
                            <img src={item.image} alt={item.name}/> 
                            {item.user_id ?
                            <h3>Sold to {item.user.name}</h3> :                
                            <h3>{item.price}</h3>}
                        </div>
                    </Link>
                ))}   
                
                
            </div>
        </div>
    )
}
export default Items;