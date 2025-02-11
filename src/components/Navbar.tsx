import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, Hidden, Stack, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import mobileLogo from "/public/mobile-logo.png";
import desktopLogo from "/public/logo.png";
import { Link } from 'react-scroll';


export const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = ["About Us", "Features", "Solutions", "Pricing", "Contact Us"];

    return (
        <AppBar sx={{ backgroundColor: "background.paper", boxShadow: "none", py: isMobile ? 0 : 1 }} position="fixed">
            <Toolbar>
                <img
                    style={{ width: isMobile ? "40px" : "200px", height: isMobile ? "40px" : "70px" }}
                    src={isMobile ? mobileLogo : desktopLogo}
                    alt="Qualiverify logo"
                />

                <Stack gap={1} direction={"row"} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Hidden mdDown>
                        {menuItems.map((item, index) => (
                            <Button
                                size='large'
                                sx={{ textTransform: "none", color: "#201F22", fontWeight: 500, fontSize: 16, fontFamily: '"Plus Jakarta Sans", sans-serif;' }}
                                key={index}

                            >
                                <Link
                                    activeClass="active"
                                    to={item}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                // onSetActive={handleSetActive}
                                >
                                    {item}
                                </Link>

                            </Button>
                        ))}
                    </Hidden>
                </Stack>

                <Hidden mdDown>
                    <Button onClick={() => window.open("https://app.qualiverify.com/")} sx={{ textTransform: "none" }} size="large" variant="contained" color="primary">Get Started</Button>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="primary"
                        edge="end"
                        onClick={handleDrawerToggle}
                        size='large'
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} onClick={handleDrawerToggle}>
                            <ListItemText onClick={() => setDrawerOpen(false)}>
                                <Link
                                    activeClass="active"
                                    to={item}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                // onSetActive={handleSetActive}
                                >
                                    {item}
                                </Link>
                            </ListItemText>

                        </ListItem>
                    ))}
                    <ListItem button onClick={handleDrawerToggle}>
                        <Button onClick={() => window.open("https://app.qualiverify.com/")} sx={{ textTransform: "none" }} size="large" variant="contained" color="primary">Get Started</Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};
