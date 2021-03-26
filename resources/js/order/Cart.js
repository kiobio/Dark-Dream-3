import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





function Cart(){

    const [cartItems, setCartItems] = useState("")
   // const [clearOrder, setClearOrder] = useState(false)
    const [money, setMoney] = useState('sold/item')

    const MySwal = withReactContent(Swal)
    

    async function fetchCartItems(){
        const response = await fetch('/api/order')
        const data = await response.json()
       // console.log(data)
        setCartItems(data)
    }

    useEffect(()=>{
        fetchCartItems()
    }, [])

    async function cleanOrders(){        
        const response = await fetch(`/api/sold/item`)
        const data = await response.json()
        setCartItems("")
        
    }

    async function noMoney(){        
        const response = await fetch(`/api/notsold/item`)
        const data = await response.json()
        setCartItems("")
        
    }

    return(
        cartItems.length ?
        
        <div className="Cart">
        <button
        onClick={ () =>{
        noMoney()        
        fetchCartItems()
        fetchCartItems()
        }}>Cancel </button>
          
        
             {cartItems.map((item, index) => (
            
            <div  key={index} className="ImageText">
                
                    <div className="ItemPrice">
                        <h2>{item.item.name}</h2>
                        <h2>{item.item.price}</h2>
                    </div>
                
                <img src={item.item.image}/>
                
            </div>
            
            
        ))}

         <button
         onClick ={ () =>{
            const Number = Math.random() 
            if(Number > 0.5){
               cleanOrders() 
               MySwal.fire("Congratulation",
             "You just purchased your items",
             "check your profile in Owners")
            }else{
                noMoney()
                MySwal.fire("Nice try!", 
                "You don't have that kind of a money")
            }        
            
             fetchCartItems()
             fetchCartItems()   
                   
            }
        }
         >Purchase</button>
      </div>
      
      :
      <div></div>

    )
}
export default Cart;