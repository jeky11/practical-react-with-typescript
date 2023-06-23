import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from '@/components/top';
import { Scoreboard } from '@/components/Scoreboard/Scoreboard';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <>
    <Top feature="flag" firstAction="ctrl" secondAction="click">
      Minesweeper
    </Top>
    <Scoreboard
      time="000"
      levels={['1', '2', '3']}
      onReset={() => null}
      onChangeLevel={() => null}
      bombs="010"
    />
  </>,
  rootElement
);
