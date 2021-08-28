import { Box, IconButton, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Notifications, ShowAdvanced } from "app/components";
import MainCard from "app/layouts/MainCard";
import { actions } from "app/store";
import { LayoutState, OpenCloseState, PoolFormState, RootState } from "app/store/types";
import cls from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePoolDialog, NewPoolMessage, PoolDeposit, PoolManage, PoolToggleButton, PoolWithdraw, SponsorDeposit, SponsorWithdraw } from "./components";
import AddLiquidityEarnMessage from "./components/AddLiquidityEarnMessage";
// import { ReactComponent as PlusSVG } from "./plus_icon.svg";
import { ReactComponent as SettingsGearIcon } from "app/components/SvgIcons/setting-icon.svg";
// import BrightnessLowIcon from '@material-ui/icons/BrightnessLowRounded';
import { AppTheme } from "app/theme/types";

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
  },
  container: {
    padding: theme.spacing(4, 5, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 2, 0),
    },
    marginBottom: 12
  },
  colContainer: {
    padding: theme.spacing(0, 4, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 2, 0),
    },
    marginBottom: 12
  },
  rowContainer: {
    padding: 0,
    width: "100%",
    lineHeight: "initial",
    fontSize: "2em",
  },
  panelName: {
    flex: 1,
    flexDirection: "row",
  },
  createButton: {
    borderRadius: 12,
  },
  actionButton: {
    marginTop: 45,
    marginBottom: 40,
    height: 46
  },
  iconButton: {
    color: theme.palette.label,
    borderRadius: 12,
    padding: 5,
    marginLeft: 5,
  },
  advancedSettingContainer: {
    padding: theme.spacing(0, 0, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 0, 2),
    },
  },
  plusIcon: {
    "& path": {
      fill: theme.palette.icon
    }
  }
}));
const PoolView: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const poolFormState = useSelector<RootState, PoolFormState>(state => state.pool);
  const layoutState = useSelector<RootState, LayoutState>(state => state.layout);

  const { token: poolToken } = poolFormState;
  const { showPoolType: poolType, showCreatePool } = layoutState;

  const onShowCreatePool = (override: OpenCloseState) => {
    dispatch(actions.Layout.toggleShowCreatePool(override));
  };

  const toggleAdvancedSetting = () => {
    dispatch(actions.Layout.showAdvancedSetting(!layoutState.showAdvancedSetting));
  }

  return (
    <MainCard {...rest} className={cls(classes.root, className)}>
      <Notifications />
      {!poolToken?.pool && (
        <NewPoolMessage token={poolToken || undefined} />
      )}
      <AddLiquidityEarnMessage />

            
	  <Box display="flex" justifyContent="space-between" mb="28px" className={classes.container}>
        <Box display="flex" className={classes.rowContainer}>
          <Box display="flex" className={classes.panelName} justifyContent="flex-start">
           Pool 
	  </Box>
          {poolType === "add" && (
            <Box display="flex" justifyContent="flex-end" className={classes.advancedSettingContainer}>
              <IconButton onClick={() => toggleAdvancedSetting()} className={classes.iconButton}>
		  <SettingsGearIcon />
              </IconButton>
            </Box>
          )}
	  </Box>
	  </Box>
      {!layoutState.showAdvancedSetting && (
        <Box display="flex" flexDirection="column">
          {poolType !== "remove" && (
            <Box display="flex" justifyContent="space-between" mb="28px" className={classes.colContainer}>
              <PoolToggleButton />
	  {/* <Button className={classes.createButton} startIcon={<PlusSVG className={classes.plusIcon}/>} onClick={() => onShowCreatePool("open")}>
                Create Pool
            </Button> */}
            </Box>
          )}
          {poolType === "add" && (<PoolDeposit />)}
          {poolType === "manage" && (<PoolManage />)}
          {poolType === "remove" && (<PoolWithdraw />)}
          {poolType === "addSponsor" && (<SponsorDeposit />)}
          {poolType === "removeSponsor" && (<SponsorWithdraw />)}

        </Box>
      )}
      <ShowAdvanced showAdvanced={layoutState.showAdvancedSetting} />
      <CreatePoolDialog open={showCreatePool} onCloseDialog={() => onShowCreatePool("close")} />
    </MainCard>
  );
};

export default PoolView;
