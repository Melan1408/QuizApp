import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Component } from 'react';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default class DrawerComp extends Component {

    state = {
        open: false
    }

    constructor() {
        super();
        this.handleToggleOpen = this.handleToggleOpen.bind(this);
    }

    render() {
        const { links } = this.props;
        return (
            <>
                <Drawer PaperProps={{
                    sx: { backgroundColor: "#709bf0" }
                }} open={this.state.open} onClose={() => this.setState({ open: false })}>
                    <List>
                        {links.map((link, index) => (
                            <ListItemButton onClick={() => this.setState({ open: false })} key={index} divider>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
                <IconButton sx={{ color: "white", marginLeft: "auto" }} onClick={this.handleToggleOpen}>
                    <MenuRoundedIcon />
                </IconButton>
            </>
        );
    }

    handleToggleOpen() {
        this.setState({ open: !this.state.open });
    }
}
