import React, { FC, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GameLevels, LevelNames } from '@/modules/GameSettings';

import { Scoreboard } from '@/components/scoreboard';
import { Grid } from '@/components/grid';
import { GameOver } from '@/components/game';

import { useGame } from './useGame';

export const GameWithHooks: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlLevelParam = (searchParams.get('level') || undefined) as LevelNames;

  const {
    level,
    time,
    isGameOver,
    isWin,
    settings,
    playerField,
    flagCounter,
    onClick,
    onContextMenu,
    onChangeLevel,
    onReset,
  } = useGame(urlLevelParam);

  const [, bombs] = settings;

  const onChangeLevelHandler = useCallback(
    ({ target: { value: level } }: React.ChangeEvent<HTMLSelectElement>) => {
      setSearchParams({ level });
      onChangeLevel(level as LevelNames);
    },
    // Stryker disable next-line ArrayDeclaration
    []
  );

  return (
    <>
      <Scoreboard
        time={String(time)}
        bombs={String(bombs - flagCounter)}
        levels={GameLevels as unknown as string[]}
        defaultLevel={level}
        onChangeLevel={onChangeLevelHandler}
        onReset={onReset}
      />
      {isGameOver && <GameOver onClick={onReset} isWin={isWin} />}
      <Grid onClick={onClick} onContextMenu={onContextMenu}>
        {playerField}
      </Grid>
    </>
  );
};
