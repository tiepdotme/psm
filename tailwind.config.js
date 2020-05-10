// https://tailwindcss.com/docs/configuration/

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    colors: {
      transparent: "transparent",
      black: "#111",
      text: "#111",
      white: "white",
      brand: {
        red: "#ff3f00", // red-orange
        highlight: "#d81b1b",
        neutral: "#f2f2f2",
        header: "#efefe9",
        bg: "#fefefe",
      },
      gray: {
        100: "#f7fafc",
        200: "rgba(0, 0, 0, 0.05)",
        300: "rgba(0, 0, 0, 0.1)",
        // 400: "#dedede",
        400: "rgba(0, 0, 0, 0.2)",
        // 500: "#aaa",
        500: "rgba(0, 0, 0, 0.4)",
        600: "rgba(0, 0, 0, 0.5)",
        700: "#777",
        // 800: "#231F20",
        // 900: "#1a202c",
      },
      form: {
        good: "#38a169",
        bad: "#e53e3e",
      },
    },
    spacing: {
      px: "1px",
      "2px": "2px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "5.5rem",
      "32": "7rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
    },
    screens: {
      /* https://tailwindcss.com/docs/breakpoints/ */
      mobile: { max: "513px" },
      sm: "513px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      hu: "1680px",
      su: "1900px",
    },
    fontFamily: {
      sans: [
        "'Text'",
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      /* serif: ['"Serif"', "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], */
      /* mono: [
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "Monaco",
        '"Courier New"',
        "monospace",
      ], */
    },
    fontSize: {
      xxs: "11px",
      xs: "13px",
      sm: "15px",
      base: "15px",
      lg: "18px",
      xl: "21px",
      "2xl": "23px",
      "3xl": "27px",
      "4xl": "32px",
      "5xl": "48px",
      "6xl": "60px",
      "7xl": "72px",
    },
    /* Corresponding to breakpoints */
    responsiveScale: {
      textXs: "0.842105263", // 16 or 17
      textSm: "0.933333333",
      textMd: "1",
      headingXs: "0.727272727",
      headingSm: "0.818181818",
      headingMd: ".925",
      headingHu: "1",
      blockXs: "0.5",
      blockSm: "0.7",
      blockMd: "1",
      spaceXs: "0.842105263",
      spaceSm: "0.933333333",
      spaceMd: "1",
      gridXs: "1",
      gridSm: "1",
      gridMd: "1",
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    lineHeight: {
      title: "0.925",
      none: "1.075",
      tight: "1.25",
      snug: "1.4",
      copy: "1.5",
      normal: "1.375",
      relaxed: "1.625",
      loose: "2",
      nav: "4.5",
    },
    letterSpacing: {
      hyphen: "-0.075em",
      tighter: "-0.015em",
      tight: "-0.003em",
      // text: "-0.02em",
      text: "-0.005em",
      normal: "0",
      wide: "0.0125em",
      wider: "0.06em",
      widest: "0.1em",
    },
    textColors: theme => ({
      ...theme("colors"),
      base: theme("colors.gray.600"),
    }),
    backgroundColor: theme => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "8px",
    },
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.gray.300", "currentColor"),
    }),
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      lg: "0.5rem",
      full: "9999px",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "2/6": "33.33333%",
      "3/6": "50%",
      "4/6": "66.66667%",
      "5/6": "83.33333%",
      "1/12": "8.33333%",
      "2/12": "16.66667%",
      "3/12": "25%",
      "4/12": "33.33333%",
      "5/12": "41.66667%",
      "6/12": "50%",
      "7/12": "58.33333%",
      "8/12": "66.66667%",
      "9/12": "75%",
      "10/12": "83.33333%",
      "11/12": "91.66667%",
      full: "100%",
      screen: "100vw",
    }),
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    padding: theme => theme("spacing"),
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "100": "100",
    },
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "100": "1",
    },
    fill: {
      current: "currentColor",
    },
    stroke: {
      current: "currentColor",
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      "0": "0",
      default: "1",
    },
    flexShrink: {
      "0": "0",
      default: "1",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    inset: {
      "0": "0",
      auto: "auto",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [
    require("tailwindcss-grid")({
      grids: [2, 3, 4, 5, 6, 8, 10, 12],
      gaps: {
        0: "0",
        4: "1rem",
        8: "2rem",
        "4-x": "1rem",
        "4-y": "1rem",
      },
      autoMinWidths: {
        "16": "4rem",
        "24": "6rem",
        "300px": "300px",
      },
      variants: ["responsive"],
    }),
  ],
};