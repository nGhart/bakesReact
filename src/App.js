import './App.css';
import Routing from './Routing';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routing />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
