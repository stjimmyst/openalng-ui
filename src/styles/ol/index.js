import { Typography, Box, List,Stack, TableRow, Button, Container} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getInitColorSchemeScript } from "@mui/system";

//Parent box
export const OLBox = styled(Box) ( () => ({
    justifyContent: 'center',
    //border: '1px dashed grey',
    display: "flex",
    alignItems: 'center',
}));

export const OLContainer = styled(Container) ( () => ({
    justifyContent: 'center',
    //border: '1px dashed grey',
    display: "flex",
    alignItems: 'center',
}));

export const OLButton = styled(Button) ( () => ({
    justifyContent: 'center',
    variant: "contained"
}));

export const OLLogo = styled(OLBox) ( () => ({
    bgcolor: "primary.main"
}));

export const OLMenuItem = styled(OLButton) ( () => ({
    bgcolor: "primary.main"
    
}));

export const OLSectionBox = styled(OLBox) ( () => ({
    height: 500, 
}));

export const OLImageBox = styled(OLBox) ( () => ({
    height: 100,
    width: 100,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
    
}));

export const OLSectionBoxBright = styled(OLBox) ( ({ theme }) => ({
    height: 500, 
    backgroundColor: theme.palette.ol_bright.main
}));

export const OLSectionBoxDark = styled(OLBox) ( ({ theme }) => ({
    height: 100, 
    backgroundColor: theme.palette.ol_dark.main
}));

export const OLSectionLeft = styled(OLBox) ( () => ({

}));

export const OLSectionRight = styled(OLBox) ( () => ({
    color: 'secondary.main',
}));
