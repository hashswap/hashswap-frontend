import { Button, ButtonGroup, ButtonGroupProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { actions } from "app/store";
import { SPoolType, RootState } from "app/store/types";
import cls from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  tab: {
    borderRadius: 12,
    width: "100%",
    padding: theme.spacing(1.5, 4),
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: theme.spacing(1, 2),
      "& .MuiButton-label": {
        fontSize: "14px",
      },
    },
    '&:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      border: 0
      // border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    },
    '&:not(:last-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      border: 0
      // border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    },
  },
}));
const PoolToggleButton: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const spoolType = useSelector<RootState, SPoolType>(state => state.layout.showSPoolType);

  const onTypeChange = (type: SPoolType) => {
    if (type !== spoolType)
      dispatch(actions.Layout.showSPoolType(type));
  };

  return (
    <ButtonGroup {...rest} color="secondary" className={cls(classes.root, className)}>
      <Button
        onClick={() => onTypeChange("addSponsor")}
        variant={spoolType === "addSponsor" ? "contained" : "outlined"}
        className={classes.tab}>
        Add Sponsor
      </Button>
    {/* <Button
        onClick={() => onTypeChange("manage")}
        variant={spoolType === "manage" ? "contained" : "outlined"}
        className={classes.tab}>
        Manage
      </Button> */}
      <Button
        onClick={() => onTypeChange("removeSponsor")}
        variant={spoolType === "removeSponsor" ? "contained" : "outlined"}
        className={classes.tab}>
    	Remove Sponsor
      </Button>
    </ButtonGroup>
  );
};

export default PoolToggleButton;
