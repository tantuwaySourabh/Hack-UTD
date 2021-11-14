import {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {Button} from '@mui/material';
import{Router} from 'react-router';
import PropTypes from 'prop-types';
import Home from './components/Home';

function App(){


   useEffect(() => {
    
    fetch('/users').then(resp => {
        return resp.json();
    }).then(data => {
        console.log(data);
    }).catch(e => {
      console.log(e)
    });

   }, [])
  return (
    <div class="App">
        <Home></Home>
    </div>
  );


}

export default App;
