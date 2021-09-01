// import { AppBar, Box, IconButton, Toolbar } from "@material-ui/core";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brand } from "app/components/TopBar/components";
import RewardsInfoButton from "app/layouts/RewardsInfoButton";
import cls from "classnames";
import React from "react";
// import React, { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import ConnectWalletButton from "../ConnectWalletButton";
// import ThemeSwitch from "../ThemeSwitch";
// import { ReactComponent as MenuIcon } from "./menu.svg";
import { TopBarProps } from "./types";
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'


export const Nav = styled.nav`
    background: orangered;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color: black;  
:active {
  color:black;
}

:hover {
  color: black;
}
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;





const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "100%",
    position: "fixed",
  },
  toolBar: {
    paddingLeft: "5%",
    height: "12vh",
    boxSizing: "border-box",
    boxShadow: "inset 0 -1px #757784",
    [theme.breakpoints.up("sm")]: {
      "&>div": {
        // flex: 1,
        flexBasis: 1,
        display: "flex",
        flexDirection: "row",
      },
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
  },
  brandLogo: {
	flex: 0,
  },
  navBar: {
	flex: 2,
  },
  walletBar: {
	flex: 1,
  },
  themeSwitch: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  chipText: {
    color: theme.palette.text.primary
  },
}));

const TopBar: React.FC<TopBarProps & React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, onToggleDrawer, currentRoute, ...rest } = props;
  const classes = useStyles();


  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log(currentRoute);
  console.log(props);
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")
  console.log("+++++++++TOP BAR+++++++++++")

  return (
    <AppBar {...rest} elevation={0} position="static" className={cls(classes.root, className)}>
      <Toolbar className={classes.toolBar} variant="dense">
    {/*        <Box justifyContent="flex-start">
          <IconButton onClick={onToggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
	*/}

        
    <Box justifyContent="flex-start" className={classes.brandLogo} flexGrow="0">
     <Brand /> Beta    
    </Box>
       
    <Box className={classes.navBar} justifyContent="center">
     <NavMenu>
      <NavLink to="/swap" >
        Swap
      </NavLink>
      <NavLink to="/pool" >
       Pool            
      </NavLink>
      <NavLink to="/sponsor" >
       Sponsor
      </NavLink>
     </NavMenu>
    </Box>
    <Box display="flex" flex={1} justifyContent="flex-end" alignItems="center">
    <RewardsInfoButton />
    <ConnectWalletButton />
          
    {/* <ThemeSwitch className={classes.themeSwitch} /> */}
        </Box>
      </Toolbar>
    </AppBar >
  );
};

export default TopBar;
