
import ReactDOM from 'react-dom';
import Navigation from '../galaxy/Navigation';
import Subcategories from './Subcategories';



function App() {

   

    return (

        <div>
        <Navigation/>
        <Subcategories/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));