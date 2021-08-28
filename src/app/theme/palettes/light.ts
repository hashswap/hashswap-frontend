import { colors } from '@material-ui/core';
import { zilliqa, switcheo } from './colors';

const TEXT_COLORS = {
  primary: "#000000",
  secondary: "rgba(0, 51, 64, 0.5)",
};

const theme = {
  type: "light",
  toolbar: {
    main: "#ffffff",
  },
  primary: {
    contrastText: "#000",
    dark: "#000000",
    main: "#000000",
    light: "rgba(0, 51, 64, 0.5)",
  },
  error: {
    contrastText: TEXT_COLORS.secondary,
    dark: colors.red[900],
    main: zilliqa.danger,
    light: colors.red[400]
  },
  success: {
    contrastText: TEXT_COLORS.secondary,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  text: {
    primary: TEXT_COLORS.primary,
    secondary: TEXT_COLORS.secondary,
    disabled: "rgba(222, 255, 255, 0.5)",
  },
  button: {
    primary: "#02586D",
  },
  background: {
    default: "#ffffff",
    gradient: "#596f90",
    contrast: "#dbe3ef",
    contrastAlternate: "#ffffff",
    paper: zilliqa.neutral[100],
    paperOpposite: zilliqa.neutral[190],
    tooltip: "#ffffff",
    readOnly: zilliqa.primary["004"]
  },
  action: {
    active: "#b14887",
    disabled: "rgba(222, 255, 255, 0.5)",
    disabledBackground: "rgba(0, 51, 64, 0.5)",
    selected: "#b14887"
  },
  tab: {
    active: "#b14887",
    disabled: "rgba(222, 255, 255, 0.5)",
    disabledBackground: "#7B999E",
    selected: "#FFFFFF"
  },
  mainBoxShadow: "0 8px 16px 0 rgba(20,155,163,0.16)",
  cardBoxShadow: "0 4px 8px 2px rgba(20, 155, 163, 0.16)",
  navbar: "#DEFFF5",
  switcheoLogo: switcheo.logoLight,
  colors: { zilliqa, switcheo },
  currencyInput: "#dbe3ef",
  icon: "#b14887",
  label: "#000000",
  warning: {
    main: "#FF5252"
  },
  link: "#02586D",
};

export default theme;
