import { useEffect, useState } from "react"





function Cart(){

    const [cartItems, setCartItems] = useState("")
    

    async function fetchCartItems(){
        const response = await fetch('/api/order')
        const data = await response.json()
        console.log(data)
        setCartItems(data)
    }

    useEffect(()=>{
        fetchCartItems()
    }, [])

    return(
        cartItems.length ?
        <div>
          
        
             {cartItems.map((item, index) => (
            
            <div  key={index}>
                <div>
                    <h2>{item.item.name}</h2>
                    <h2>{item.item.price}</h2>
                </div>
                <button>Confirm</button>
            </div>
            
            
        ))}
         
      </div>
      :
      <div></div>

    )
}
export default Cart;