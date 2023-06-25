import React, { FC } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import { Top } from '@/components/top';
import { GameLayout } from '@/components/game';

import { GameWithHooks } from '@/modules/GameWithHooks';

export const MinesweeperWithHooks: FC = () => {
  const [searchParams] = useSearchParams();
  const { username } = useParams<{ username?: string }>();

  const id = searchParams.get('id');

  const userNameForRender = username && `, ${username}`;
  const idForRender = id && `; userId: ${id}`;
  const content = `Minesweeper with ReactHooks special for you ${userNameForRender} ${idForRender}`;
  return (
    <GameLayout
      top={
        <Top feature="Flag" firstAction="right click">
          {content}
        </Top>
      }
    >
      <GameWithHooks />
    </GameLayout>
  );
};
