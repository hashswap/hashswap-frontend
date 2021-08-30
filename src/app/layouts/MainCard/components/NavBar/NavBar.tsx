import { Box, Button } from "@material-ui/core";
// import { Box, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { TokenGraph } from "app/components";
import { actions } from "app/store";
import { LayoutState, RootState, SwapFormState, TokenInfo, TransactionState } from "app/store/types";
import { AppTheme } from "app/theme/types";
import cls from "classnames";
import { PaperProps } from "material-ui";
import React, { forwardRef, Fragment } from "react";
//import React, { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as RouterLink, useRouteMatch } from "react-router-dom";

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div ref={ref} style={{ flexGrow: 1, flexBasis: 1 }} >
    <RouterLink {...props} />
  </div>
));

const CARD_BORDER_RADIUS = 12;

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    position: "fixed",    
    display: "none",
    padding: 0,
    zIndex: 100,
    width: "100%",
    // padding: theme.spacing(8, 0, 2),
    // display: "flex",
    // flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      display: "block",
      bottom: "0",
      // padding: theme.spacing(6, 0, 2),
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      display: "block",
      bottom: "0",
      // padding: theme.spacing(6, 2, 2),
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
    background: theme.palette.type === "dark" ? "linear-gradient(#13222C, #002A34)" : "#F6FFFC",
    border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    boxShadow: theme.palette.mainBoxShadow,
    borderRadius: CARD_BORDER_RADIUS,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 450,
    },
  },
  tabs: {
    display: "flex",
    width: "488px",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)",
    borderRadius: 20,
    margin: theme.spacing(0, 2, 2, 2),
    border: "7px solid #ffffff",
    background: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  tab: {
    position: "relative",
    width: "100%",
    borderRadius: 17,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    background: "none",
    color: "#878787",
    "&:hover": {
      backgroundColor: theme.palette.tab.active,
      color: theme.palette.tab.selected
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.tab.disabledBackground,
    }
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
const NavBar: React.FC<PaperProps> = (props: any) => {
  // const { children, className, staticContext, ...rest } = props;
  const classes = useStyles();
  // const isSponsor = useRouteMatch("/sponsor");
  const isPool = useRouteMatch("/pool");
  const isSwap = useRouteMatch("/swap");
  const layoutState = useSelector<RootState, LayoutState>(state => state.layout);
  const swapState = useSelector<RootState, SwapFormState>(state => state.swap);
  const poolToken = useSelector<RootState, TokenInfo | null>(state => state.pool.token);
  const transactionState = useSelector<RootState, TransactionState>(state => state.transaction);
  // const boxRef = useRef<HTMLDivElement | null>(null);
  // const [boxHeight, setBoxHeight] = useState<number>(0);
  const dispatch = useDispatch();

  /* useEffect(() => {
    if(boxRef.current?.clientHeight) {
      setBoxHeight(boxRef.current?.clientHeight || 0);
    }
      // eslint-disable-next-line
  }, [boxRef.current?.clientHeight])
*/ 

  const hasNotification =
    // show new pool warning
    ((isPool && poolToken && !poolToken?.pool) ||

      // show liquidity fee (add liquidity incentive) message
      (isPool && !layoutState.liquidityEarnHidden && layoutState.showPoolType === "add") ||

      // show user created token warning for pool
      (isPool && poolToken?.pool && !poolToken?.registered) ||

      // show user created token warning for swap
      (isSwap && ((swapState.inToken && !swapState.inToken.registered) || (swapState.outToken && !swapState.outToken.registered))) ||

      // show generic notification
      !!layoutState.notification ||

      // show confirming tx message
      transactionState.observingTxs.length > 0 ||

      // show confirmed tx message
      transactionState.submittedTxs.length > 0);

  // const showGraph = (isSwap && (swapState.inToken || swapState.outToken));

  const closeAdvancedSetting = () => {
    dispatch(actions.Layout.showAdvancedSetting(false));
  }

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box display="flex" justifyContent="center">
          <Box className={classes.tabs}>
            <Button
              disableElevation
              onClick={closeAdvancedSetting}
              color="primary"
              variant="contained"
              className={classes.tab}
              activeClassName={cls(classes.tabActive, { [classes.tabNoticeOpposite]: hasNotification })}
              component={CustomRouterLink}
              to="/swap">Swap</Button>
            <Button
              disableElevation
              onClick={closeAdvancedSetting}
              color="primary"
              variant="contained"
              className={classes.tab}
              activeClassName={cls(classes.tabActive, { [classes.tabNoticeOpposite]: hasNotification })}
              component={CustomRouterLink}
              to="/pool">Pool</Button>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              className={classes.tab}
              activeClassName={cls(classes.tabActive, { [classes.tabNoticeOpposite]: hasNotification })}
              component={CustomRouterLink}
              to="/sponsor">Sponsor</Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default NavBar;
