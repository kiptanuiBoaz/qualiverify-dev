import { Box, Button, Container, Stack, Typography } from "@mui/material"

export const Cta = () => {
    return (
        <Box sx={{ backgroundColor: "primary.main", py: 7 }}>
            <Container>
                <Box sx={{ color: "#fff", display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;', mb: 3 }} variant="h3" >
                        Start your    <span style={{ backgroundColor: '#6780a5' }}>Verification</span>
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;', mb: 4 }} variant="h3" >
                        Today
                    </Typography>

                    <Typography sx={{
                        color: "#fff",
                        mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                    }} color={"text.secondary"} variant="body1" gutterBottom>
                        Get a free, personalized demo to learn how we can <br /> streamline your verification process.
                    </Typography>

                </Box>

                <Stack spacing={3} direction={"row"} justifyContent={"center"} py={6} >
                    <Button sx={{ py: 2, px: "5%", textTransform: "none", backgroundColor: "secondary.main", color: "#fff" }} size={"large"} variant="contained">
                        Start  Verification
                    </Button>
                    <Button sx={{ py: 2, px: "5%", textTransform: "none", color: "#000", backgroundColor: "#fff" }} size={"large"} variant="contained">
                        Schedule Demo
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}
