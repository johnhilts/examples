import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Header from './Header';

let header = document.getElementById('header');
ReactDOM.render(
  <Header {...(header.dataset)} />,
  header
);

ReactDOM.render(
  <Button />,
  document.getElementById('main')
);
