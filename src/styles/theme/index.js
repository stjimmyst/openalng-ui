import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

export const Colors = {
    primary: "#333",
    secondary: "#444",
    light_gray: "#776",
    ol_bright: "#ffffff",
    ol_dark: "#3399ff"
    
    
};

const OLTheme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        ol_bright: {
            main: Colors.ol_bright
        },
        ol_dark: {
            main: Colors.ol_dark
        }
    }

});

export default OLTheme;