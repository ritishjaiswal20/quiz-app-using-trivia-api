
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
    <Header/>
      <Switch>
        
        <Route path="/" exact>
          <Home/>
        </Route>
      
      </Switch>
    </div>
    <Footer/>
   </Router>
     

  );
}

export default App;
