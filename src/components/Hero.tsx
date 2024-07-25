import { Grid, Typography, Button, TextField, Card, CardContent, Box, Container, MenuItem, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import desktopLogo from "/public/logo.png";


export const Hero = () => {
    return (
        <Box sx={{ backgroundColor: "background.paper", pb: 20, pt: 20 }}>
            <Container>
                <Grid container spacing={6} alignItems="center" justifyContent="space-between" sx={{ px: 0, py: 4 }}>
                    {/* Left Column */}
                    <Grid px={0} item xs={12} md={6}>
                        <Typography sx={{ mt: 7, fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" gutterBottom>
                            Verify  <span style={{ backgroundColor: '#5ecaea' }}>Credentials</span>
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" gutterBottom>
                            From anywhere. In Seconds
                        </Typography>
                        <Typography sx={{
                            mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                        }} color={"text.secondary"} variant="body1" gutterBottom>
                            QualiVerify provides fast, secure, and reliable verification of academic and professional qualifications.
                        </Typography>
                        <Button sx={{ textTransform: "none" }} size="large" variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
                            Get Started
                        </Button>

                        <Box sx={{ mt: 7, py: 2 }}>
                            <Typography color={"text.secondary"} variant="body2" gutterBottom>
                                Trusted by big brands
                            </Typography>
                            <Stack spacing={2} direction="row">
                                <img
                                    style={{ width: "150px", height: "40px", filter: 'grayscale(1)' }}
                                    src={desktopLogo}
                                    alt="Qualiverify logo"
                                />
                                <img
                                    style={{ width: "150px", height: "40px", filter: 'grayscale(1)' }}
                                    src={desktopLogo}
                                    alt="Qualiverify logo"
                                />
                                <img
                                    style={{ width: "150px", height: "40px", filter: 'grayscale(1)' }}
                                    src={desktopLogo}
                                    alt="Qualiverify logo"
                                />
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{ backgroundColor: "background.default", py: 2, px: 1 }}>
                            <CardContent>
                                <Typography color={"text.primary"} variant="h6" gutterBottom>
                                    Verify Qualifications Instantly
                                </Typography>
                                <Typography color={"text.secondary"} variant="body2" gutterBottom>
                                    Get Quick Verification
                                </Typography>
                                <form noValidate autoComplete="off">

                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        select
                                        margin="normal"
                                        label="Select Institution"

                                        sx={{ backgroundColor: "#EFEFEF" }}
                                    >
                                        <MenuItem value="uon">UON</MenuItem>
                                        <MenuItem value="uon">Africa Nazarene</MenuItem>
                                        <MenuItem value="uon">CUEA</MenuItem>
                                    </TextField>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        label="ID Number"
                                        sx={{ backgroundColor: "#EFEFEF" }}
                                    />

                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        select
                                        margin="normal"
                                        label="Certification type"

                                        sx={{ backgroundColor: "#EFEFEF" }}
                                    >
                                        <MenuItem value="uon">Transcripts</MenuItem>
                                        <MenuItem value="uon">PostGrad Degree</MenuItem>
                                        <MenuItem value="uon">Undergrad Degree</MenuItem>
                                    </TextField>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        select
                                        margin="normal"
                                        label="Qualification type"
                                        sx={{ backgroundColor: "#EFEFEF", fontWeight: "normal" }}
                                    >
                                        <MenuItem sx={{ fontWeight: "normal" }} value="uon">Degree</MenuItem>
                                        <MenuItem value="uon">Diploma</MenuItem>
                                        <MenuItem value="uon">Post-graduate </MenuItem>
                                    </TextField>


                                    <Button sx={{ mt: 1, mb: 2, textTransform: "none", py: 1 }} size="large" type="submit" variant="contained" color="primary" fullWidth>
                                        Check Verification
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </Box>

    );
};

