import { breakpoints, spacing } from "@carbon/layout";
import { scale } from "@carbon/type";
import { g100 } from "@carbon/themes";

export const theme: ApplicationTheme = {
  colors: g100,
  spacing,
  breakpoints,
  typeScale: scale
};

type ColorTokens = {
  interactive01: string;
  interactive02: string;
  interactive03: string;
  uiBackground: string;
  ui01: string;
  ui02: string;
  ui03: string;
  ui04: string;
  ui05: string;
  text01: string;
  text02: string;
  text03: string;
  text04: string;
  icon01: string;
  icon02: string;
  field01: string;
  field02: string;
  inverse01: string;
  inverse02: string;
  support01: string;
  support02: string;
  support03: string;
  support04: string;
  overlay01: string;
  focus: string;
  hoverPrimary: string;
  activePrimary: string;
  hoverPrimaryText: string;
  hoverSecondary: string;
  activeSecondary: string;
  hoverTertiary: string;
  activeTertiary: string;
  hoverUI: string;
  activeUI: string;
  selectedUI: string;
  hoverSelectedUI: string;
  hoverDanger: string;
  activeDanger: string;
  hoverRow: string;
  visitedLink: string;
  disabled01: string;
  disabled02: string;
  disabled03: string;
  brand01: string;
  brand02: string;
  brand03: string;
};

type Breakpoint = {
  width: string;
  columns: number;
  gutter: string;
  margin: string;
};

// For type hinting
type typeScale = [
  12,
  14,
  16,
  18,
  20,
  24,
  28,
  32,
  36,
  42,
  48,
  54,
  60,
  68,
  76,
  84,
  92,
  102,
  112,
  122,
  132,
  144,
  156
];

export interface ApplicationTheme {
  readonly colors: ColorTokens;
  readonly spacing: (string | number)[];
  readonly breakpoints: {
    sm: Breakpoint;
    md: Breakpoint;
    lg: Breakpoint;
    xlg: Breakpoint;
    max: Breakpoint;
  };
  readonly typeScale: typeScale;
}
