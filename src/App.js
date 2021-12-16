import logo from './logo.svg';
import './App.css';

import { render } from 'react-dom';
import Header from './Header';
import Carousel from './Carousel';
import Banner from './Banner';
import Product from './Product';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Carousel/>
     
     <div className ='product_row'>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
     </div>
     <Banner/>
     <Footer/>
    </div>
  );
}
// render(<App />, document.getElementById('root'));

export default App;
