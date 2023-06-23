import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { Counter } from './Counter';
import { Level } from './Level';
import { Reset } from './Reset';

export interface ScoreboardProps {
  /**
   * Timer
   */
  time: string;
  /**
   * Possible game scenarios
   */
  levels: string[];
  /**
   * Default selected level
   */
  defaultLevel?: string;
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void;
  /**
   * Action handler when select new lvl
   */
  onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Bombs in the field
   */
  bombs: string;
}

export const Scoreboard = ({
  time,
  levels,
  defaultLevel,
  bombs,
  onReset,
  onChangeLevel: onChange,
}: ScoreboardProps): JSX.Element => (
  <Wrapper>
    <Counter>{time}</Counter>
    <div>
      <Level onChange={onChange} value={defaultLevel}>
        {levels}
      </Level>
      <Reset onReset={onReset} />
    </div>
    <Counter>{bombs}</Counter>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
