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
    <div class="App">
      <Search></Search>
    </div>
  );


}

export default App;
