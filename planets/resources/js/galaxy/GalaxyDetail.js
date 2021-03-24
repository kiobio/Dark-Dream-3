import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function GalaxyDetail() {


    let { id } = useParams();
    const [items, setItems] = useState([]);



    async function fetchItems() {
        const response = await fetch(`/api/item/galaxyid/${id}`);
        const data = await response.json();
        //console.log(data);
        setItems(data);
      }



      useEffect(() => {
          fetchItems();
      }, [])



    return(
      items.length ?
        <div className = "Items">
          
        
             {items.map((item, index) => (
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
) }
export default GalaxyDetail;