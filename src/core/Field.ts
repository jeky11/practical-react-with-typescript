﻿import { incrementNeighbours } from '@/core/CellsManipulator';

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; //union
export type Field = Cell[][];
export type Coords = [number, number]; //tuple

//record with string as key and cell as value
export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  mark: 11,
  weakFlag: 12,
};

export const emptyFieldGenerator = (
  size: number,
  state: Cell = CellState.empty
): Field => new Array(size).fill(null).map(() => new Array(size).fill(state));

export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error('Probability must be between 0 and 1');
  }

  let unprocessedCells = size * size;
  let restCellsWithBombs = unprocessedCells * probability;

  const result: Field = emptyFieldGenerator(size);

  // Stryker disable next-line EqualityOperator
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Stryker disable next-line EqualityOperator
      if (restCellsWithBombs / unprocessedCells > Math.random()) {
        result[y][x] = CellState.bomb;
        incrementNeighbours([y, x], result);
        restCellsWithBombs--;
      }
      unprocessedCells--;
    }
  }

  return result;
};
