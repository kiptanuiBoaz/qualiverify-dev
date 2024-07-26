import { Box, Container, Typography, Grid, Card, CardContent, Icon } from '@mui/material';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { Element } from 'react-scroll';

export const WhyChoose = () => {
    const features = [
        {
            icon: <LanguageIcon />,
            title: "Reliable Verification",
            description: "We provide accurate and efficient verification services for all your needs.",
            bg: "#F23936",
        },
        {
            icon: <SpeedOutlinedIcon />,
            title: "Fast Turnaround",
            description: "Our processes ensure quick results without compromising quality.",
            bg: "#008EFF"
            ,
        },
        {
            icon: <GppGoodOutlinedIcon />,
            title: "Global Reach",
            description: "Our services are available in multiple countries across the globe.",
            bg: "#45C646",
        },
        {
            icon: <AssignmentTurnedInOutlinedIcon />,
            title: "Expert Team",
            description: "Our team consists of industry experts with years of experience.",
            bg: "#FABB18",
        },
    ];

    return (
        <Element name="About Us">

            <Box sx={{ backgroundColor: "background.default", pb: 0, position: "relative", pt: "7%" }}>
                <Container sx={{ py: 8, }}>
                    <Typography
                        sx={{
                            py: 2,
                            fontWeight: 400,
                            fontFamily: '"Libre Baskerville", serif',
                            textAlign: "center"
                        }}
                        variant="h3"
                        gutterBottom
                    >
                        Why Choose <span style={{ backgroundColor: "#C2EED8" }}>Qualiverify</span>
                    </Typography>
                    <Grid container spacing={3}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card sx={{ display: "flex", boxShadow: "none", backgroundColor: "background.default" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", p: 4 }}>
                                        <Icon sx={{ color: "#fff", p: 2, m: 1, backgroundColor: feature.bg, borderRadius: 50 }}>
                                            {feature.icon}
                                        </Icon>

                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant='h6'
                                                sx={{ fontSize: "18px", color: "#000", fontWeight: 700, fontFamily: '"Plus Jakarta Sans", serif;' }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography sx={{ color: '#52525B', fontWeight: 400, fontSize: "16px", fontFamily: '"Plus Jakarta Sans", serif;' }} >
                                                {feature.description}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Element>

    );
};
