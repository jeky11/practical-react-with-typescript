﻿import React from 'react';
import { render } from '@testing-library/react';

import { Grid } from '@/components/grid';
import { Top } from '@/components/top';
import { Scoreboard } from '@/components/scoreboard';

import { GameOver } from '@/components/game';

import { Field } from '@/core/Field';
import { fieldGenerator } from '@/core/__mocks__/Field';

import { GameLayout } from './GameLayout';

it('Top renders correctly', () => {
  const { asFragment } = render(
    <GameLayout
      top={
        <Top feature="Flag" firstAction="ctrl" secondAction="click">
          Minesweeper
        </Top>
      }
    >
      <Scoreboard
        time="000"
        bombs="000"
        levels={['beginner', 'intermediate', 'expert']}
        onReset={() => null}
        onChangeLevel={() => null}
      />
      <GameOver onClick={() => null} isWin={true} />
      <Grid onClick={() => null} onContextMenu={() => null}>
        {fieldGenerator(9) as Field}
      </Grid>
    </GameLayout>
  );

  expect(asFragment()).toMatchSnapshot();
});
