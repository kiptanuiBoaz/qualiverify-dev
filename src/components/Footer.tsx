import { Box, Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import { LocationOn, Email, Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Link } from 'react-scroll';

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'background.default', py: 7 }}>

            <Container>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={8}>
                        <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h4" gutterBottom>
                            QualiVerify provides reliable verification of academic and professional qualifications.
                        </Typography>
                    </Grid>
                    <Grid height={"auto"} item xs={12} md={4}>
                        <Box gap={1.5} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to={"#"} style={{ display: 'flex', marginBottom: 1, color: "#000", textDecoration: "none", }}>
                                <LocationOn sx={{ ml: 1, mr: 1 }} />
                                <Typography sx={{ fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;' }} >8502 Preston Rd. Inglewood, Maine 98380, USA</Typography>
                            </Link>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <Email sx={{ ml: 1, mr: 1 }} />
                                <Typography sx={{ fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;' }} >info@example.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <IconButton sx={{ color: "#0F172A" }}>
                                    <Facebook />
                                </IconButton >
                                <IconButton sx={{ color: "#0F172A" }}>
                                    <Twitter />
                                </IconButton>
                                <IconButton sx={{ color: "#0F172A" }}>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ mb: 2 }} />
                <Grid justifyContent={'space-between'} container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box gap={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {["Pricing", "Solutions", "Features", "Contact Us"].map(l => <Typography
                                key={l}
                                variant="body2"
                                sx={{ fontWeight: 500, fontSize: 16, fontFamily: '"Plus Jakarta Sans", sans-serif;', cursor: "pointer" }}
                            >
                                <Link
                                    to={l}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {l}
                                </Link>
                            </Typography>)}


                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 16, fontFamily: '"Plus Jakarta Sans", sans-serif;' }}>
                                &copy; {new Date().getFullYear()} Company. All rights reserved.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
