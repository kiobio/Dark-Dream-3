
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Earth from '../../../storage/img/Earth.jpg';
import Universes from '../../../storage/img/universes.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function ItemDetail(){
    const[itemDetail, setItemDetail] = useState("")
    let { id } = useParams();

    const MySwal = withReactContent(Swal)
   

    async function fetchItem(){
        const response = await fetch(`/api/item/id/${id}`)
        const data = await response.json();
        setItemDetail(data);
        //console.log(data)
    }

    
    useEffect(()=>{
        fetchItem()
    },[])


    async function postData(){
        const response = await fetch(`/api/order/item/${id}`)//, {
            //method: 'get',
           // mode: 'no-cors',
           // Accept: 'application/json',
            //headers:{'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
       // })
        const data =  await response.json();
        console.log(data);
            
    }

    return(
        <div className="Detail">
           <div className="DeatilImg">
            <div>
                <img className="mainImg" src={itemDetail.image} alt={itemDetail.name}/>
            </div>
            <div className="info">
                    <h2>{itemDetail.name && itemDetail.name}</h2>
                     {itemDetail.subcategory ?        
                        <p>{itemDetail.subcategory.name} type {itemDetail.type}</p>:<p>Starship type {itemDetail.type} </p>}
                    <div className="Galaxyverse">
                        <div>
                            {itemDetail.galaxy ?
                            <div>
                                <p>Located in {itemDetail.galaxy.name} Galaxy</p>
                                <img src={itemDetail.galaxy.image} alt= {itemDetail.galaxy.name}/>
                            </div>
                            : 
                            <div>
                                <p>Crafted on Earth</p>
                                <img src={Earth} alt="Earth"/>
                            </div>}
                        </div>
            
                        <div>
                            {itemDetail.universe ?
                            <div>
                                <p>Universe {itemDetail.universe.name}</p>
                                <img src ={itemDetail.universe.image} alt={itemDetail.universe.name}/>
                            </div>
                            :
                            <div>
                                <p>Shipping to all known universes</p>    
                                <img src={Universes} alt="Universes"/>
                            </div>}
                        </div>
                    </div>
                    <p>{itemDetail.info}</p>
            </div>
           </div>
                              
        {itemDetail.user_id ?
            <div className="Sold">
                <h3>Sold to {itemDetail.user.name}</h3>
            </div>
            :
           <div className="Buy">
                <p>{itemDetail.price}</p>
               <button 
               onClick={ () =>{
                MySwal.fire(
                    'Your Item has been add to shopping cart',
                    
                )
                postData()}}
               >Buy</button>
           </div>}
            
        </div>
    )
}
export default ItemDetail;