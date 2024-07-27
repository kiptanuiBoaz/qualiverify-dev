import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Element } from 'react-scroll';
import employersImg from '../assets/solutions_employers.jpeg';
import individualsImg from '../assets/solutions_individual.jpeg';
import licensingImg from '../assets/solutions_licencing.jpeg';
import educational from '../assets/solutions_educational.jpeg';
import bg from "../assets/solutions_bg.png"

const options = [
    {
        title: "Employers",
        description: "Verify candidate qualifications for recruitment decisions.",
        image: employersImg // Replace with actual image paths
    },
    {
        title: "Educational Institutions",
        description: "Streamline admissions by verifying student transcripts and diplomas.",
        image: educational,
    },
    {
        title: "Licensing bodies",
        description: "Ensure regulatory compliance by verifying professional licenses.",
        image: licensingImg,
    },
    {
        title: "Individuals",
        description: "Get your own qualifications verified for international opportunities.",
        image: individualsImg,
    },
];

export const Solutions = () => {
    const [activeOption, setActiveOption] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Element name="Solutions">
            <Container sx={{ py: 10 }}>
                <Grid container spacing={4} p={0}>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ mt: 2, fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" >
                            Tailored   <span style={{ backgroundColor: '#ff9f61' }}>Solutions</span>
                        </Typography>

                        <Typography sx={{ mt: 2, fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" gutterBottom>
                            for your needs
                        </Typography>
                        <Typography sx={{
                            mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                        }} color={"text.secondary"} variant="body1" gutterBottom>
                            QualiVerify caters for different verification needs
                        </Typography>
                        <List >
                            {options.map((option, index) => (
                                <ListItem
                                    key={index}
                                    button
                                    onClick={() => setActiveOption(index)}
                                    sx={{
                                        backgroundColor: activeOption === index ? "background.paper" : "background.default",
                                        borderBottom: activeOption === index ? '2px solid #20447A' : 'none',
                                        position: 'relative',
                                        pl: 3,
                                        my: 1,
                                        py: 1

                                    }}
                                >
                                    {activeOption === index && (
                                        <ArrowForwardIosOutlinedIcon
                                            fontSize='small'
                                            sx={{
                                                position: 'absolute',
                                                left: -24,
                                                top: 0,
                                                color: '#000',
                                            }}
                                        />
                                    )}
                                    <Box>

                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: activeOption === index ? 600 : 400,
                                                color: '#000',
                                                fontSize: "20px"
                                            }}
                                        >
                                            {option.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;'
                                            }}
                                        >
                                            {option.description}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Card sx={{
                            backgroundImage: `url(${bg})`,
                            padding: 0,
                            boxShadow: 'none',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundColor: "#fff"
                        }}>
                            <CardContent sx={{ display: "flex", justifyContent: "center" }}>

                                <img
                                    src={options[activeOption].image}
                                    alt={options[activeOption].title}
                                    style={{ width: isMobile ? "95%" : '90%', objectFit: 'cover', height: isMobile ? "50vh" : '60vh', borderRadius: 7 }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Element>

    );
};
