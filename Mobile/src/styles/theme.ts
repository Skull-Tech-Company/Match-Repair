import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    orange: {
      40: "rgba(255,196,142,0.4)",
      100: "#FFC48E",
      200: "#FF9B3F",
      300: "#FF7A00",
    },
    gray: {
      100: "#EBEBEB",
      200: "#8F8F8F",
      300: "#2F2924",
      400: "#000000",
    },
    red: {
      100: "#FC5F5F",
      200: "#FF1F00",
      300: "#B40000",
    },
    green: {
      100: "#9DFD95",
      200: "#1BE209",
      300: "#158C0B",
    },
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
    medium: "Roboto_500Medium",
  },
  fontSizes: {},
});
