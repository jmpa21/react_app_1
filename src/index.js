import React from 'react';
import ReactDom from 'react-dom';
import {App} from './App'
import './style.css'
const divRoot = document.querySelector('#root');
ReactDom.render(<App />, divRoot);
