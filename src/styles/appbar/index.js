import { Typography, Box, List,Stack, TableRow} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getInitColorSchemeScript } from "@mui/system";
import { Colors } from "../theme";


export const AppbarContainer = styled(Box)( () => ({
    // display: 'flex',
    // marginTop: 4,
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: '2px 8px'
}));

export const AppbarHeader = styled(Typography)(() => ({
    // padding: '4px',
    // flexGrow: 1,
    // fontSize: '4em',
    // fontFamily: '"Montez","cursivve"',
    // color: Colors.secondary,

}))

export const MyList = styled(Stack)((type) => ({

    // flexGrow: 3,
    // fontSize: '4em',
    // justifyContent: 'center',
    // alignItems: 'center'

}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    // flexGrow:  0
}))
export const ActionIconsContainerMobile = styled(Box)(() => ({
    // display: "flex",
    // background: Colors.shaft,
    // position: "fixed",
    // bottom: 0,
    // left: 0,
    // widtg: "100%",
    // alignItems: "center",
    // zIndex: 99,
}))

