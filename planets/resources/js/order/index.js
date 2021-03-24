
import Navigation from '../galaxy/Navigation';

//api orders
//api post metoda 
//buy - post method - api/order/item/${id}
//fetch v ksoiku - api/order
//odeslat objednavku - post method - api/sold/item
//api orders

import ReactDOM from 'react-dom';
import Cart from './Cart';

  ReactDOM.render ((
    <div>
        <Navigation/>
        <Cart/>
    </div>
        
    
    
    ), document.querySelector('#app'));


