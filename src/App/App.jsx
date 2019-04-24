import React from 'react';
import styles from './App.css';
import { Map } from '../Map/Map';

export const App = () => (
  <div className={styles['container']}>
    <Map />
  </div>
);