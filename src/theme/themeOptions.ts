import { deviceSize } from "@utils/constants";
import { colors } from "./colors";
import shadows from "./shadows";

const breakpoints: any = Object.keys(deviceSize).map((key) => deviceSize[key] + "px");

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const THEMES = {
  DEFAULT: "DEFAULT",
};

const themesOptions = {
  [THEMES.DEFAULT]: { colors, shadows, breakpoints },
};

function getThemeOptions(publicRuntimeConfig: any, pathname: string) {
  let themeOption: any;

  /*
      YOU CAN ALSO REMOVE updateTheme function
      AND FOLLOWING ENTIRE switch case BLOCK.
    */
  const updateTheme = (themeName: string) => {
    publicRuntimeConfig.theme = themeName;
    themeOption = themesOptions[publicRuntimeConfig.theme];
  };

  switch (pathname) {
    case "/":
      updateTheme(THEMES.DEFAULT);
      break;

    default:
      themeOption = themesOptions[THEMES.DEFAULT];
      break;
  }

  return themeOption;
}

export default getThemeOptions;
