import { Grid, Typography, TextField, Card, CardContent, Box, Container, Stack, Button, useTheme, useMediaQuery } from '@mui/material';

export const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (<>

        <Box sx={{ backgroundColor: "background.paper", pb: 7 }}>
            <Container>
                <Grid container spacing={6} justifyContent="space-between" sx={{ px: 0, py: 4 }}>
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" gutterBottom>
                            Let's  <span style={{ backgroundColor: '#c2eed8' }}>Talk</span>
                        </Typography>

                        <Typography sx={{
                            mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                        }} color={"text.secondary"} variant="body1" gutterBottom>
                            If you have any questions about the subscription or are not sure which plan is right for you, contact our team and let’s schedule a call.
                        </Typography>
                        <Stack direction="row" spacing={6}>
                            <Box sx={{ backgroundColor: "primary.main", borderRadius: "10px", p: 2 }}>
                                <Typography sx={{ fontWeight: 800, fontFamily: '"Libre Baskerville", sans-serif;', color: "#fff" }}>Call us</Typography>
                                <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville",sans-serif;', color: "#fff" }} >+0712345678</Typography>

                            </Box>
                            <Box sx={{ borderRadius: "10px", border: "2px solid #20447A", p: 2 }}>
                                <Typography sx={{ fontWeight: 800, fontFamily: '"Libre Baskerville",sans-serif;' }} color="primary">Email us</Typography>
                                <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville",sans-serif;' }} color="primary">qualifverify@mail.com</Typography>

                            </Box>
                        </Stack>


                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{
                            width: isMobile ? "85%" : "30%",
                            backgroundColor: "background.default",
                            py: 2,
                            px: 1,
                            boxShadow: 2,
                            position: "absolute",
                            left: !isMobile ? "" : '50%',
                            transform: !isMobile ? "" : 'translateX(-50%)',
                        }}>
                            <CardContent>
                                <Typography color={"text.primary"} variant="h5" gutterBottom>
                                    Contact Us
                                </Typography>
                                <Typography sx={{ fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;' }} color={"text.secondary"} variant="body2" gutterBottom>
                                    If you have any question or issue’s to use our product.<br /> Fill the form below. We’ll help you.
                                </Typography>
                                <Grid container component="form" noValidate autoComplete="off">
                                    <Grid item xs={5.85}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            label="Your Name"
                                            required
                                            sx={{ backgroundColor: "#EFEFEF", mr: 1 }}
                                        />
                                    </Grid>
                                    <Grid item xs={5.85}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            label="Your Email"
                                            placeholder='example@domain.com'
                                            required
                                            sx={{ backgroundColor: "#EFEFEF", ml: 1 }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            label="Message"
                                            placeholder='Your message here'
                                            required
                                            multiline
                                            minRows={4}
                                            maxRows={10}
                                            name="description"

                                            sx={{ backgroundColor: "#EFEFEF" }}
                                        />
                                    </Grid>
                                </Grid>

                                <Button
                                    sx={{ mt: 1, mb: 2, textTransform: "none", py: 2 }}
                                    size="large" type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth>
                                    Check Verification
                                </Button>


                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </Box>
        <Box sx={{ backgroundColor: "#fff", height: isMobile ? "55vh" : "30vh" }}>

        </Box>
    </>
    );
};

