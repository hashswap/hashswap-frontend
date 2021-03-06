import { FormControlLabel, FormGroup, Switch, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { actions } from "app/store";
import { RootState } from "app/store/types";
import { AppTheme } from "app/theme/types";
import { hexToRGBA } from "app/utils";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeSwitchProps } from "./types";

const THEME_TOGGLE_SELECTED = "light";

const useStyles = makeStyles((theme: AppTheme) => ({
  root: (props: ThemeSwitchProps) => ({
    "& .MuiSwitch-track": {
      position: "relative",
      ...props.forceDark && {
        backgroundColor: `rgba${hexToRGBA("#DEFFFF", 0.5)}`,
      },
    },
    "& .Mui-checked+.MuiSwitch-track": {
      backgroundColor: `rgba${hexToRGBA("#b14887", 0.5)}`,
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.type === "dark" ? "#0D1B24" : "#b14887",
      width: 14,
      height: 14,
    },
    "& .MuiSwitch-switchBase": {
      padding: "12px"
    },
  }),
  label: {
    marginLeft: theme.spacing(1),
    marginRight: 0,
    color: theme.palette.type === "dark" ? `rgba${hexToRGBA("#DEFFFF", 0.5)}` : "#b14887"
  },
}));

const ThemeSwitch: React.FC<ThemeSwitchProps> = (props: ThemeSwitchProps) => {
  const { className, forceDark, ...rest } = props;
  const classes = useStyles(props);

  const themeType = useSelector<RootState, string>(state => state.preference.theme);
  const dispatch = useDispatch();

  const onToggleTheme = () => {
    const theme = themeType === "light" ? "dark" : "light";
    dispatch(actions.Preference.update({ theme }));
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch
          color="secondary"
          checked={themeType === THEME_TOGGLE_SELECTED}
          onChange={() => onToggleTheme()}
          {...rest}
          className={clsx(classes.root, className)} />}
        label={<Typography variant="h6">Classic</Typography>}
        labelPlacement="start"
        className={classes.label}
      />
    </FormGroup>
  );
};

export default ThemeSwitch;
