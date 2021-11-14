import {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';
import Home from './components/Home';
import Search from './components/Search';
import AfterLogin from './components/AfterLogin';
import Sellitem from './components/Sellitem';

import MartItemDetail from './components/MartItemDetail';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App(){


   useEffect(() => {
    
    fetch('/api/users').then(resp => {
        return resp.json();
    }).then(data => {
        console.log(data);
    }).catch(e => {
      console.log(e)
    });

   }, [])
  return (
    <Router>
    <div class="App">
      <Switch>
        <Route path='/search'>
          <Search></Search>
        </Route>
        <Route path='/sellitem'><Sellitem></Sellitem></Route>
        <Route path='/martitemdetail'><MartItemDetail></MartItemDetail></Route>
      </Switch>
    </div>
    </Router>
  );


}

export default App;
