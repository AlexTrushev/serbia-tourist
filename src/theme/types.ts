import { palette } from '@theme/palette';

export enum ETextLevel {
  h1 = 'h1',
  h2 = 'h2',
  p = 'p',
  buttons = 'buttons',
}
export type TPaletteColors = keyof typeof palette;
