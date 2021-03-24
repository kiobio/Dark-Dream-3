import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";




function UniverseItems(){
    const[universeItems, setUniverseItems] = useState("")
    const [universeDetail, setUniverseDetail] = useState("")
    let { id }= useParams()

    async function fetchUniverseItems(){
        const response = await fetch(`/api/item/universeid/${id}`)
        const data = await response.json()
        setUniverseItems(data)
        
    }

    useEffect(()=>{
        fetchUniverseItems()
    }, [])

    async function fetchUniverseDetail(){
        const response = await fetch(`/api/universe/id/${id}`)
        const data = await response.json()
        console.log(data)
        setUniverseDetail(data)
    }

    useEffect(()=>{
        fetchUniverseDetail()
    },[])

    

    return(

        <div>
            <div className="UniverseDetail">
                <img src={universeDetail.image}/>
                <div className="UniverseText">
                    <h3>{universeDetail.name}</h3>
                    <p>{universeDetail.info}</p>
                </div>
                
            </div>
            <div className="Items">
                {universeItems && universeItems.map((item, index)=>(
                <Link to={`/items/${item.id}`}>
                    <div key={index} className = "Galaxy">
                        <h2>{item.name}</h2>
                        {item.subcategory ?        
                                <p>{item.subcategory.name}</p>:<p>Starship</p>}
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
export default UniverseItems;