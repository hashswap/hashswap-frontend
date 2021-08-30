import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppTheme } from "app/theme/types";
import { PaperProps } from "material-ui";
import React, { Fragment, useRef } from "react";
import NavBar from "./components/NavBar";

const CARD_BORDER_RADIUS = 12;

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    flex: 1,
    padding: theme.spacing(8, 0, 2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 0, 2),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 2, 2),
    },
  },
  graph: {
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
    [theme.breakpoints.down("xs")]: {
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 0, 2),
      flexDirection: "row",
      width: "100%"
    },
  },
  card: {
    maxWidth: 488,
    margin: "0 auto",
    background: theme.palette.type === "dark" ? "linear-gradient(#13222C, #002A34)" : "#b5c8e2",
    // border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    boxShadow: theme.palette.mainBoxShadow,
    borderRadius: CARD_BORDER_RADIUS,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 450,
    },
  },
  tabs: {
    display: "flex",
    width: "488px",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 450,
    },
  },
  tab: {
    position: "relative",
    width: "100%",
    borderRadius: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.tab.disabledBackground,
    color: theme.palette.tab.disabled,
    "&:hover": {
      backgroundColor: theme.palette.tab.active,
      color: theme.palette.tab.selected
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.tab.disabledBackground,
    }
  },
  tabLeft: {
    borderTopLeftRadius: CARD_BORDER_RADIUS,
    borderBottomLeftRadius: CARD_BORDER_RADIUS,
    border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
  },
  tabNoBorder: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    borderWidth: "1px 1px 1px 0"
  },
  tabRight: {
    borderTopRightRadius: CARD_BORDER_RADIUS,
    borderBottomRightRadius: CARD_BORDER_RADIUS,
    border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    borderWidth: "1px 1px 1px 0",
  },
  tabActive: {
    backgroundColor: theme.palette.tab.active,
    color: theme.palette.tab.selected,
    "&:hover": {
      backgroundColor: theme.palette.tab.active,
      color: theme.palette.tab.selected,
    },
  },
  tabNoticeOpposite: {
    "&:after": {
      borderBottom: `8px solid ${theme.palette.background.paperOpposite!}`,
    }
  },
}));
const MainCard: React.FC<PaperProps> = (props: any) => {
  const { children, className, staticContext, ...rest } = props;
  const classes = useStyles();
  const boxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Fragment>
    <NavBar {...rest} >
    </NavBar >
      <Box className={classes.root}>
        <Box display="flex" justifyContent="center">
          <Box width={488}>
            <Paper {...{ ref:boxRef }} {...rest} className={classes.card}>
              <Box>{children}</Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default MainCard;
