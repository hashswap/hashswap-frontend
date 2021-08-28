const MuiToggleButton = theme => ({
    root: {
        "&$selected": {
            color: theme.palette.type === "dark" ? "#b14887" : "#FFFFFF",
            backgroundColor: theme.palette.type === "dark" ? "#00FFB0" : "#b14887",
            "&:hover": {
                backgroundColor: theme.palette.type === "dark" ? "#00FFB0" : "#b14887",
            }
        },
    },
    sizeSmall: {
        padding: "5px"
    }
});
  
export default MuiToggleButton;
