import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function GalaxyDetail() {


    let { id } = useParams();
    const [items, setItems] = useState([]);
    const [galaxy, setGalaxy] = useState("");



    async function fetchItems() {
        const response = await fetch(`/api/item/galaxyid/${id}`);
        const data = await response.json();
        //console.log(data);
        setItems(data);
      }



      useEffect(() => {
          fetchItems();
      }, [])


      async function fetchGalaxy(){
        const response = await fetch(`/api/galaxy/id/${id}`)
        const data = await response.json();
        console.log(data)
        setGalaxy(data)
        
      }


      useEffect(()=>{
        fetchGalaxy();
      }, [])


    return(
      
        <div>
          <div className="UniverseDetail">
                <img src={galaxy.image}/>
                <div className="UniverseText">
                    <h3>{galaxy.name}</h3>
                    <p>{galaxy.info}</p>
                    <p className="belongs">Belongs to {galaxy.universe && galaxy.universe.name} universe</p>
                    <img className ="Universeimg" src={galaxy.universe && galaxy.universe.image}/>
                    <p className="Number">There are {items.length} discovered items in {galaxy.name} galaxy</p>
                    
                    
                </div>
          </div>
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
        </div>
     
) }
export default GalaxyDetail;