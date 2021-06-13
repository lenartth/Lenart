import "./general.css";
import Header from "./shared/header/header.jsx";
import Footer from "./shared/footer/footer.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from "./Pages/Home/home.jsx";
import Portfolio from "./Pages/Portfolio/portfolio.jsx";
import Contact from "./Pages/Contact/contact.jsx";


function App() {
  
  return (

 



    <Router>
      <div className="App">
        <Header/>
        <Route exact path ='/' component = {Home} />
        <Route path ='/portfolio' component = {Portfolio} />
        <Route path ='/contact' component = {Contact} />
        
        <Footer
        />
      </div>
    </Router>
  );
}

export default App;
