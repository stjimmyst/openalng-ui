import { Typography, Box, List} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getInitColorSchemeScript } from "@mui/system";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(()=>({
    // display: "flex",
    position: "absolute", 
    justifyContent: "center",
    width: "100%",
    heiight: "100%",
    paddiiing: "0px 0px",
    background: Colors.light_gray
}))