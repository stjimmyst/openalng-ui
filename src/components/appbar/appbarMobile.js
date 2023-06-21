import { ListItemButton, ListItemText } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";

export default function AppbarMobile({matches}) {
    return (
        <AppbarContainer>
        <AppbarHeader>OpenLang</AppbarHeader>
        <MyList>
            <ListItemText>Home</ListItemText>
        </MyList>
        <Actions matches={matches}></Actions>
        </AppbarContainer>
    )
}
