import { Box, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { RootState } from "app/store/types";
import cls from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as BrandSVG } from "./brand.svg";
import { ReactComponent as BrandSVGDark } from "./brand-dark.svg";
import { ReactComponent as BrandLogoSVG } from "./brand-logo.svg";
import { ReactComponent as BrandTextSVG } from "./brand-text.svg";
import { ReactComponent as BrandTextSVGDark } from "./brand-text-dark.svg";
import { AppTheme } from "app/theme/types";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    '& svg': {
      height: 36,
      "background-image": "linear-gradient(45deg, #fbe80a, #f58949, #ba38e4a6, #00b8ff, #00ff37, #fff700)",
      "background-size": "200%",
      "background-position-x": "20%",
      "-webkit-animation": `$logoAnimate 8s 10`,
      animation: `$logoAnimate 8s 10`,
      '& .st0': {
        fill: '#169BA3!important',
      }
    },
  },
  darkMode: {
    '& svg': {
      "background-image": "linear-gradient(46deg, #fbe80a, #f58949, #ba38e4a6, #00b8ff, #00ff37, #fff700)", 
      '& svg .st0': {
      	fill: '#29CCC4!important',
      }
    },
  },
  "@keyframes logoAnimate": {
    "0%": {
      "background-position-x": "20%",
    },
    "50%": {
      "background-position-x": "75%",
    },
    "100%": {
      "background-position-x": "20%",
    },
  },
}));

const Brand: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  const classes = useStyles(props);
  const isXs = useMediaQuery((theme: AppTheme) => theme.breakpoints.down("xs"));
  const themeType = useSelector<RootState, string>(state => state.preference.theme);

  const BrandSVGTheme = themeType === "dark"? BrandSVGDark : BrandSVG;  
  const BrandTextSVGTheme = themeType === "dark"? BrandTextSVGDark : BrandTextSVG;  
  const BrandFullSVG = () => {
	return ( 
	<>
	  <BrandSVGTheme />
	  <BrandTextSVGTheme />
	</>
	);
  };

  const Logo = isXs ? BrandLogoSVG : BrandFullSVG;

  return (
    <Box className={cls(classes.root, { [classes.darkMode]: themeType === "dark" }, className)} {...rest}>
      <Logo />
    </Box>
  );
};

export default Brand;
