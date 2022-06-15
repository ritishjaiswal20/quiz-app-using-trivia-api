import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import React,{ useState } from 'react';

function App() {
  const[questions,setQuestions]= useState();
  const[name,setName]=useState();
  const[score,setScore]=useState(0);  
  const fetchQuestions=()=>{

  }
  return (
    <Router>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
    <Header/>
      <Switch>
        
        <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions }/>
        </Route>
      
      </Switch>
    </div>
    <Footer/>
   </Router>
     

  );
}

export default App;
