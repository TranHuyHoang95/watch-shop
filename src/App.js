
import React from "react";
// import TestAPI from './TestAPI';
import {loggedIn} from './Utils/Common'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import indexCat from './pages/Category/indexCat';
import indexOrder from './pages/Orders/indexOrder';
import indexProduct from './pages/Product/indexProduct';
import editProduct from './pages/Product/editProduct';
import addProduct from './pages/Product/addProduct';
import indexUser from './pages/Users/indexUser';
import {useLocation,BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';

function App(){
  return (
    <div>
      <Router>
        <Switch>
          
          {/* <Route  path='/test' component={TestAPI}/> */}
          <Route path='/login' component ={Login}/>

          <Route exact path='/' component = {Home}/>
          <Route path='/cat' component ={indexCat}/>
          <Route path='/order' component={indexOrder}/> 

          <Route path='/product' component ={indexProduct}/>
          <Route path='/addProduct' component ={addProduct}/>
          <Route path='/editProduct' component ={editProduct}/>
          <Route path='/user' component ={indexUser}/>

          
        </Switch>
        {/* <Header/>
        <Leftbar/>
        <Footer/> */}
      </Router>
       

    </div>

  );
}

export default App