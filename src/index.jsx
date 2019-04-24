import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App/App';
import 'normalize.css';
import '../node_modules/leaflet/dist/leaflet.css'

render(
  <App />,
  document.getElementById('app')
);