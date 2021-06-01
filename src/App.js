import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>

       <Route path="/about">
         <About/>
       </Route>

       <Route path="/contact">
         <Contact/>
       </Route>

       <Route  path="/product/:id">
         <SingleProduct/>
       </Route>

     </Switch>
   </Router>
  );
}

export default App;
