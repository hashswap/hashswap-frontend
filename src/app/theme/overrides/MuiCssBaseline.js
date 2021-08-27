import AvenirNextBoldWoff from "../fonts/AvenirNext-Bold.woff";
import AvenirNextBoldItalicWoff from "../fonts/AvenirNext-BoldItalic.woff";
import AvenirNextDemiBoldWoff from "../fonts/AvenirNext-DemiBold.woff";
import AvenirNextDemiBoldItalicWoff from "../fonts/AvenirNext-DemiBoldItalic.woff";
import AvenirNextHeavyWoff from "../fonts/AvenirNext-Heavy.woff";
import AvenirNextHeavyItalicWoff from "../fonts/AvenirNext-HeavyItalic.woff";
import AvenirNextItalicWoff from "../fonts/AvenirNext-Italic.woff";
import AvenirNextMediumWoff from "../fonts/AvenirNext-Medium.woff";
import AvenirNextMediumItalicWoff from "../fonts/AvenirNext-MediumItalic.woff";
import AvenirNextRegularWoff from "../fonts/AvenirNext-Regular.woff";
import AvenirNextUltraLightWoff from "../fonts/AvenirNext-UltraLight.woff";
import AvenirNextUltraLightItalicWoff from "../fonts/AvenirNext-UltraLightItalic.woff";

import TextaMediumWebFont from "../fonts/new/Texta-Medium-webfont.woff";
import TextaLightWebFont from "../fonts/new/Texta-Light-webfont.woff";
import TextaHeavyWebFont from "../fonts/new/Texta-Heavy-webfont.woff";

const Texta = {
  fontFamily: '"Texta"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
}

const TextaMedium = {
  ...Texta,
  fontWeight: 'normal',
  src: `
    url(${TextaMediumWebFont}) format('woff')
  `,
}

const TextaLight = {
  ...Texta,
  fontWeight: 100,
  src: `
    url(${TextaLightWebFont}) format('woff')
  `,
}

const TextaHeavy = {
  ...Texta,
  fontWeight: 'bold',
  src: `
    url(${TextaHeavyWebFont}) format('woff')
  `,
}

const AvenirNext = {
  fontFamily: '"Avenir Next"',
  fontStyle: 'normal',
  fontDisplay: 'swap',
}

const AvenirNextUltraLight = {
  ...AvenirNext,
  fontWeight: 100,
  src: `
    url(${AvenirNextUltraLightWoff}) format('woff')
  `,
};

const AvenirNextUltraLightItalic = {
  ...AvenirNextUltraLight,
  fontStyle: 'italic',
  src: `
    url(${AvenirNextUltraLightItalicWoff}) format('woff')
  `,
};

const AvenirNextRegular = {
  ...AvenirNext,
  fontWeight: 400,
  src: `
    url(${AvenirNextRegularWoff}) format('woff')
  `,
};

const AvenirNextItalic = {
  ...AvenirNextRegular,
  fontStyle: 'italic',
  src: `
    url(${AvenirNextItalicWoff}) format('woff')
  `,
};

const AvenirNextMedium = {
  ...AvenirNext,
  fontWeight: 500,
  src: `
    url(${AvenirNextMediumWoff}) format('woff')
  `,
};

const AvenirNextMediumItalic = {
  ...AvenirNextMedium,
  fontStyle: 'italic',
  src: `
    url(${AvenirNextMediumItalicWoff}) format('woff')
  `,
};

const AvenirNextDemiBold = {
  ...AvenirNext,
  fontWeight: 600,
  src: `
    url(${AvenirNextDemiBoldWoff}) format('woff')
  `,
};

const AvenirNextDemiBoldItalic = {
  ...AvenirNextDemiBold,
  fontStyle: 'italic',
  src: `
    url(${AvenirNextDemiBoldItalicWoff}) format('woff')
  `,
};

const AvenirNextBold = {
  ...AvenirNext,
  fontWeight: 700,
  src: `
    url(${ AvenirNextBoldWoff}) format('woff')
  `,
};

const AvenirNextBoldItalic = {
  ...AvenirNextBold,
  fontStyle: 'italic',
  src: `
    url(${AvenirNextBoldItalicWoff}) format('woff')
  `,
};

const AvenirNextHeavy = {
  ...AvenirNext,
  fontWeight: 800,
  src: `
    url(${ AvenirNextHeavyWoff}) format('woff')
  `,
};

const AvenirNextHeavyItalic = {
  ...AvenirNextHeavy,
  fontStyle: 'italic',
  src: `
    url(${ AvenirNextHeavyItalicWoff}) format('woff')
  `,
};

const MuiCssBaseline = () => ({
  "@global": {
    "@font-face": [
      AvenirNextBold,
      AvenirNextBoldItalic,
      AvenirNextDemiBold,
      AvenirNextDemiBoldItalic,
      AvenirNextHeavy,
      AvenirNextHeavyItalic,
      AvenirNextItalic,
      AvenirNextMedium,
      AvenirNextMediumItalic,
      AvenirNextRegular,
      AvenirNextUltraLight,
      AvenirNextUltraLightItalic,
      TextaMedium,
      TextaLight,
      TextaHeavy,
    ],
  }
});

export default MuiCssBaseline;
