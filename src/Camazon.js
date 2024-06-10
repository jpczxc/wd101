import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Items from './components/Items';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


function Camazon() {
    return(
        <>
            <Navbar/>
            <Slider/>
            <Items/>
            <Footer/>
        </>
    );
}

export default Camazon;