import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ReactComponent as SvgMinus } from "./minus_pool.svg";
import { ReactComponent as SvgPlus } from "./plus_pool.svg";
import { AppTheme } from "app/theme/types";

export interface PoolIconProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "plus" | "minus";
}

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    borderRadius: 12,
    margin: "0 auto", 
    // margin: "16px auto",
    height: 20,
    width: 20,
    padding: 0,
    background: "none", 
    // background: theme.palette.type === "dark" ? "#303637": "#F7FAFA",
    [theme.breakpoints.down("sm")]: {
       height: 18,
       width: 18,
    },
  },
  icon: {
    height: 20,
    width: 20,
    [theme.breakpoints.down("sm")]: {
       height: 18,
       width: 18,
    },
    "& path": {
      stroke: "#000000",	    
      fill: theme.palette.icon
    }
  }
}));
const PoolIcon: React.FC<PoolIconProps> = (props: PoolIconProps) => {
  const { children, className, type, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      {type === "plus" && <SvgPlus className={classes.icon} />}
      {type === "minus" && <SvgMinus className={classes.icon} />}
    </Box>
  );
};

export default PoolIcon;
