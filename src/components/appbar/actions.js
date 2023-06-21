import { ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from '@mui/icons-material/Login';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { Component } from "react";

export default function Actions({matches}) {
    const Coponent = matches
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop

    return (
            <MyList>
                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContext: "center"
                        }}>
                        <LoginIcon></LoginIcon>
                    </ListItemIcon>
                </ListItemButton>


            </MyList>
    )
}