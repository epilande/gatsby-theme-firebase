const colors = {
  text: "#4A4A4A",
  background: "#FFF",
  primary: "#3273DC",
  muted: "#F1F1F1",
  green: "#23D160",
  blue: "#209CEE",
  yellow: "#FFDD57",
  red: "#FF3860",
  white: "#FFF",
};

const fonts = {
  body:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  heading:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  monospace: "monospace",
};

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
  light: 300,
  medium: 500,
  semibold: 500,
};

const fontSizes = [0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3].map(n => `${n}rem`);

const space = [0, 0.5, 1, 1.5, 2, 2.5, 3].map(n => `${n}rem`);

const styles = {
  Layout: {
    fontFamily: "body",
    fontSize: [0, 1],
    boxSizing: "border-box",
    backgroundColor: "muted",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  a: {
    color: "primary",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
};

export default {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  styles,
};
