import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Legend, LegendProps } from './Legend';
import { GameName, GameNameProps } from './GameName';

export type TopComponentType = LegendProps & GameNameProps;

export const Top = memo(
  ({ children, ...legendProps }: TopComponentType): JSX.Element => (
    <Header>
      <GameName>{children}</GameName>
      <Legend {...legendProps} />
    </Header>
  )
);

// Stryker disable next-line StringLiteral
Top.displayName = 'Top';

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;
