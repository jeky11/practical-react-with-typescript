import React, { FC } from 'react';

import { Top } from '@/components/top';
import { GameLayout } from '@/components/game';

import { GameWithReactRedux } from '@/modules/GameWithRedux';

export const MinesweeperWithReactRedux: FC = () => {
  return (
    <GameLayout
      top={
        <Top feature="Flag" firstAction="right click">
          Minesweeper with ReactRedux special for you
        </Top>
      }
    >
      <GameWithReactRedux />
    </GameLayout>
  );
};
