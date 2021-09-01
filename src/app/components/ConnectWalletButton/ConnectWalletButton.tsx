import { Box, Button, Chip, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { actions } from "app/store";
import { RootState } from "app/store/types";
import { hexToRGBA, truncate, useTaskSubscriber, upperLookingCase } from "app/utils";
import cls from "classnames";
import { ConnectedWallet } from "core/wallet";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadableArea from "../LoadableArea";
import { LoadingKeys } from "app/utils/constants";
import { AppTheme } from "app/theme/types";
import { ReactComponent as DotIcon } from "./dot.svg";

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    minWidth: 50,
  },
  button: {
    height: 30,
    padding: "4px 10px",
    border: "0px solid rgb(95 87 87 / 25%)",
    background: "#e3eefd",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)",
    borderRadius: "8px",
    color: '#000',
    marginRight: theme.spacing(2),
    minHeight: 26
  },
  textWhite: {
    color: theme.palette.primary.contrastText,
    letterSpacing: "0.5px",
  },
  mobileButtonBox: {
    padding: theme.spacing(2, 2, 0),
    display: "flex",
    justifyContent: "center",
  },
  mobileButton: {
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: "12px 12px 0 0",
    backgroundColor: theme.palette.type === "dark" ? "#13222C" : "#b14887",
    color: theme.palette.tab.selected,
    border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "" : `rgba${hexToRGBA("#b14887", 0.8)}`
    }
  },
  mobileButtonConnected: {
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: "12px 12px 0 0",
    backgroundColor: theme.palette.type === "dark" ? "#13222C" : "#b14887",
    color: theme.palette.tab.selected,
    border: theme.palette.type === "dark" ? "1px solid #29475A" : "1px solid #D2E5DF",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "" : `rgba${hexToRGBA("#b14887", 0.8)}`
    }
  },
  dotIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ConnectWalletButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const isXs = useMediaQuery((theme: AppTheme) => theme.breakpoints.down("xs"));
  const classes = useStyles();

  const dispatch = useDispatch();

  const wallet = useSelector<RootState, ConnectedWallet | null>(state => state.wallet.wallet);
  const [loading] = useTaskSubscriber(...LoadingKeys.connectWallet);

  const onConnectWallet = () => {
    dispatch(actions.Layout.toggleShowWallet());
  };

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <LoadableArea loading={loading}>
        {!wallet && (
          isXs 
          ? <Box className={classes.mobileButtonBox}>
              <Button
              disableElevation
              variant="outlined"
              onClick={onConnectWallet}
              className={classes.mobileButton}>
              Connect Wallet
              </Button>
            </Box>
          : <Button className={classes.button} onClick={onConnectWallet}>Connect</Button>
        )}
        {!!wallet && (
          isXs 
          ? <Box className={classes.mobileButtonBox}>
              <Button
              disableElevation
              variant="outlined"
              onClick={onConnectWallet}
              className={classes.mobileButtonConnected}>
                  <span>Wallet Connected</span>
                  <span><DotIcon className={classes.dotIcon}/>{truncate(wallet!.addressInfo.bech32, 5, 4)}</span>
              </Button>
            </Box>
          : <Chip
            onClick={onConnectWallet}
            color="primary"
            size="small"
            variant="outlined"
            className={classes.button}
            label={(
              <Typography variant="button" className={classes.textWhite}>
                {upperLookingCase(truncate(wallet!.addressInfo.bech32, 6, isXs ? 2 : 4))}
              </Typography>
            )} />
        )}
      </LoadableArea>
    </Box>
  );
};

export default ConnectWalletButton;
