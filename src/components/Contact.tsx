import { Grid, Typography, TextField, Card, CardContent, Box, Container, Stack } from '@mui/material';

export const Contact = () => {
    return (
        <Box sx={{ backgroundColor: "background.paper", pb: 20 }}>
            <Container>
                <Grid container spacing={6} alignItems="center" justifyContent="space-between" sx={{ px: 0, py: 4 }}>
                    {/* Left Column */}
                    <Grid px={0} item xs={12} md={6}>
                        <Typography sx={{ mt: 7, fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" gutterBottom>
                            Let's  <span style={{ backgroundColor: '#c2eed8' }}>Talk</span>
                        </Typography>

                        <Typography sx={{
                            mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                        }} color={"text.secondary"} variant="body1" gutterBottom>
                            If you have any questions about the subscription or are not sure which plan is right for you, contact our team and let’s schedule a call.
                        </Typography>
                        <Stack direction="row" justifyContent="space-around">
                            <Box sx={{ backgroundColor: "color.primary" }}>
                                <Typography>Call us</Typography>
                                <Typography>+0712345678</Typography>
                                Call Us
                            </Box>
                            <Box>
                                <Typography>Email us</Typography>
                                <Typography>qualifverify@mail.com</Typography>
                                Call Us
                            </Box>
                        </Stack>


                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{ backgroundColor: "background.default", py: 2, px: 1 }}>
                            <CardContent>
                                <Typography color={"text.primary"} variant="h6" gutterBottom>
                                    Contact Us
                                </Typography>
                                <Typography color={"text.secondary"} variant="body2" gutterBottom>
                                    If you have any question or issue’s to use our product. Fill the form below. We’ll help you.
                                </Typography>
                                <Grid container component="form" noValidate autoComplete="off">
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            label="Your Name*"

                                            sx={{ backgroundColor: "#EFEFEF" }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        label="Your Email*"
                                        placeholder='example@domain.com'

                                        sx={{ backgroundColor: "#EFEFEF" }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        label="Message*"
                                        placeholder='Your message here'

                                        sx={{ backgroundColor: "#EFEFEF" }}
                                    />
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </Box>

    );
};

