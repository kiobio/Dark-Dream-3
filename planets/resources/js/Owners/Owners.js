import { useState, useEffect } from 'react';




function Owners(){
    const[owners, setOwners] = useState("")
    const[ownItems, setOwnItems] = useState("")
    const[show, setShow] = useState(false)


    async function fetchOwners(){
        const response = await fetch('/api/users')
        const data = await response.json()
        
        setOwners(data)
    }

    useEffect(()=> {
        fetchOwners()
      },[])

    async function fetchOwnItems(user){
        const response = await fetch(`/api/item/user_id/${user}`)
        const data = await response.json()
        setOwnItems(data)
        console.log(data)
    }

    

    return(
        <div>
          <div class="owners">
              <h3>List of Owners</h3>
              {owners && owners.map((owner, index)=>(
                <div key = {index}
                onClick={()=>{
                    fetchOwnItems(owner.id)
                    setShow(true)
                }

                }>
                    
    
                      {owner.owner ? 
                      
                      <h2>{owner.name}</h2> 
                      :
                      <div></div>}
                  </div>     ))}
          </div>
          <div>
             <div className = "purchased">
                 {
                        show ? 
                        <h3>Purchased Items</h3>:null
                    }
             </div>
            <div className = "Items">
               
                
                {ownItems && ownItems.map((item, index)=>(
                <div key = {index} className = "Galaxy">
                    
                    <h2>{item.name}</h2>
                    {item.subcategory ?        
                            <p>{item.subcategory.name}</p>:<p>Starship</p>}  
                    <p>Type: {item.type}</p>
                    <img src={item.image} alt={item.name}/> 
                    
                    
                         
                </div>    
            

              
                ))}   
            </div>          
            </div>
        </div>
    )
}
export default Owners;