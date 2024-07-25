import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const options = [
    {
        title: "Employers",
        description: "Verify candidate qualifications for recruitment decisions.",
        image: "image1.png", // Replace with actual image paths
    },
    {
        title: "Educational Institutions",
        description: "Streamline admissions by verifying student transcripts and diplomas.",
        image: "image2.png",
    },
    {
        title: "Licensing bodies",
        description: "Ensure regulatory compliance by verifying professional licenses.",
        image: "image3.png",
    },
    {
        title: "Individuals",
        description: "Get your own qualifications verified for international opportunities.",
        image: "image4.png",
    },
];

export const Solutions = () => {
    const [activeOption, setActiveOption] = useState(0);

    return (
        <Container sx={{ py: 10 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 400, fontFamily: '"Libre Baskerville", serif;' }} variant="h3" >
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
                                    my: 2,
                                    py: 2
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
                <Grid item xs={12} md={6}>
                    <Card sx={{ padding: 0, boxShadow: 'none', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CardContent>
                            <img
                                src={options[activeOption].image}
                                alt={options[activeOption].title}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
