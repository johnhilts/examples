import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Header from './Header';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
ReactDOM.render(
  <Button />,
  document.getElementById('main')
);
