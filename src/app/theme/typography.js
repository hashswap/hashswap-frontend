	const typography = (palette) => ({
	  fontFamily: [
    "Texta"
  ].join(","),
  h1: {
    fontSize: "26px",
    lineHeight: "26px",
    fontWeight: "600",
    letterSpacing: "-0.2px",
  },
  h2: {
    fontFamily: "HSans",
    fontWeight: "normal",
    fontSize: 26,
  },
  h3: {
    fontSize: "18px",
    lineHeight: "20px",
    fontWeight: "bold",
    letterSpacing: "-0.2px",
  },
  h4: {
    fontFamily: "HSans",
    fontSize: "20px",
    lightHeight: "22px",
    fontWeight: "normal",
  },
  h5: {
  },
  h6: {
    fontFamily: "Texta",
    fontWeight: 600,
    fontSize: "14px"
  },
  subtitle1: {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "500",
  },
  subtitle2: {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "bold",
    letterSpacing: 0,
  },
  body1: {
	  fontFamily: "Texta",
    fontSize: "15px",
    lineHeight: "14px",
    fontWeight: "normal",
    letterSpacing: 0,
  },
  body2: {
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "-0.2px",
    fontWeight: 500
  },
  button: {
    fontFamily: "HSans",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "20px",
    letterSpacing: ".25px",
    textTransform: "none",
  },
  caption: {
  },
});

export default typography;
