import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";




function CategoriesItems(){
    const [categoryItems, setCategoryItems] = useState("")
    let { id } = useParams()

    async function fetchCategoriesItems(){
        const response = await fetch(`/api/item/categoryid/${id}`)
        const data = await response.json()
        console.log(data)
        setCategoryItems(data)
    }

    useEffect(()=>{
        fetchCategoriesItems()
    }, [])

    return(
        categoryItems.length ?
        <div className = "Items">
          
        
             {categoryItems.map((item, index) => (
            <Link to={`/items/${item.id}`}>
            <div  key={index} className = "Galaxy">
           <h2>{item.name}</h2>
           {item.subcategory ?        
                            <p>{item.subcategory.name}</p>:<p>Starship</p>}
            <img src={item.image} alt={item.name}/>
            { item.user_id ?
            <h3>Sold to {item.user.name}</h3> :
              <h3>{item.price}</h3>
            }
            </div>
            </Link>
        ))}
         
      </div>
      :
      <div></div>

    )
}

export default CategoriesItems;