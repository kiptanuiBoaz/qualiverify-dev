import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const pricingPlans = [
    {
        plan: "Basic",
        price: "$19",
        items: ["Feature 1", "Feature 2", "Feature 3"],
        backgroundColor: "background.paper"
    },
    {
        plan: "Standard",
        price: "$49",
        items: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
        backgroundColor: "primary.main",
        textColor: "primary.contrastText"
    },
    {
        plan: "Premium",
        price: "$99",
        items: ["Feature 1", "Feature 2", "Feature 3"],
        backgroundColor: "background.paper"
    }
];

export const Pricing = () => {
    return (
        <Box sx={{ py: 7 }}>
            <Container >
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
                    <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;', mb: 4 }} variant="h3" >
                        <span style={{ backgroundColor: '#ffd2b5' }}>Pricing</span> & Plans
                    </Typography>

                    <Typography sx={{
                        mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                    }} color={"text.secondary"} variant="body1" gutterBottom>
                        Start  your verfification today
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mt: 4, display: "flex", alignItems: "baseline" }}>
                    {pricingPlans.map((plan, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: plan.backgroundColor,
                                    color: plan.textColor || 'text.primary',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pb: 2,

                                }}
                            >
                                <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                        {plan.plan}
                                    </Typography>
                                    <Typography variant="h3" sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                                        <Typography component="span" variant="h5">$</Typography>{plan.price}
                                    </Typography>
                                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                                        {plan.items.map((item, idx) => (
                                            <Typography key={idx} variant="body1" sx={{ mt: 1 }}>
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                                <Button
                                    variant="contained"
                                    color={plan.backgroundColor === "primary.main" ? "secondary" : "primary"}

                                >
                                    Start 14 days trial
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
