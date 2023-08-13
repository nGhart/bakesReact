import './App.css';
import Cart from './Components/Cart';
import Faqs from './Components/Faqs';
import Menu from './Components/Menu';
import Review from './Components/Review';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="brand">
          <i className="fas fa-birthday-cake">bakes</i>
        </div>
        <button className="toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <NavigationBar />
      {/* <Menu />
      <Faqs />
      <Cart />
      <Review /> */}
    </>
  );
}

export default App;
