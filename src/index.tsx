import React from 'react';
import { render } from 'react-dom';
import { Legend } from '@/components/top/Legend';

//import { App } from './App';

const rootElement = document.getElementById('root');

render(
  <Legend feature="flag" firstAction="ctrl" secondAction="click" />,
  rootElement
);
