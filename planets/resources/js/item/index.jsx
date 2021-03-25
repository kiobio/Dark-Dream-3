import Navigation from '../galaxy/Navigation';
import ReactDOM from 'react-dom';
import{Route, BrowserRouter as Router, Switch}from 'react-router-dom';
import Categories from '../category/Categories';
import Universes from '../universe/Universes';
import Items from './Items';
import Galaxies from '../galaxy/Galaxies';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Owners from '../Owners/Owners';
import AboutUs from '../AboutUs/AboutUs';
import ItemDetail from './ItemDetail';

import UniverseItems from '../universe/UniverseItems';
import GalaxyDetail from '../galaxy/GalaxyDetail';
import CategoriesItems from '../category/CategoriesItems';
import Cart from '../order/Cart';




ReactDOM.render((     

         <Router>

             <Navigation
             
             />
             <Switch>
            <Route exact path="/" children = { <Categories/> }/>
            <Route exact path ="/shopping_cart" children = { <Cart/> }/>            
            <Route exact path="/items/all" children = { <Items/> }/> 
            <Route exact path="/items/:id" children = { <ItemDetail/> }/>  
            <Route exact path="/universes" children = { <Universes/> }/>
            <Route exact path="/universes/:id" children = { <UniverseItems/> }/>      
            <Route exact path="/Galaxy" children = { <Galaxies/> }/> 
            <Route exact path="/Galaxy/:id" children = { <GalaxyDetail/> }/> 
            <Route exact path="/items/all/:id" children = {<CategoriesItems/>}/>
            <Route exact path="/owners" children = { <Owners/> }/>
            <Route exact path="/AboutUs" children = { <AboutUs/> } />
            <Route path="/login" children={ <Login /> } />
            <Route path="/register" children={ <Register /> } />           
                
            
            </Switch>                         
        </Router>                     

            
       
   


), document.querySelector('#app'));