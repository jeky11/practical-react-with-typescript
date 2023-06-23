import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from '@/components/top';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Top feature="flag" firstAction="ctrl" secondAction="click">
    Minesweeper
  </Top>,
  rootElement
);
