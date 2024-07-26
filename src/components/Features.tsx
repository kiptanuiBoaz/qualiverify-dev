import { useState } from 'react';
import { Box, Container, Typography, Grid, List, ListItem } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Element, } from 'react-scroll';


const options = [
    {
        title: "Secure verification methods",
        description: "Verify candidate qualifications for recruitment decisions.",
        image: "image1.png", // Replace with actual image paths
    },
    {
        title: "Data encryption",
        description: "Streamline admissions by verifying student transcripts and diplomas.",
        image: "image2.png",
    },
    {
        title: "Compliance with relevant data privacy regulations",
        description: "Ensure regulatory compliance by verifying professional licenses.",
        image: "image3.png",
    },

];

export const Features = () => {
    const [activeOption, setActiveOption] = useState(0);

    return (
        <Element name="Features">


            <Box sx={{ backgroundColor: "background.paper" }}>


                <Container sx={{ py: 10 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography sx={{ mb: 2, fontWeight: 400, fontFamily: '"Libre Baskerville", serif;', textAlign: "center" }} variant="h3" >
                                Verify with <span style={{ backgroundColor: '#c0eef5' }}>Confidence</span>
                            </Typography>

                            <Typography sx={{
                                mb: 1, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;', textAlign: 'center'
                            }} color={"text.secondary"} variant="body1" gutterBottom>
                                QualiVerify prioritizes security and data
                            </Typography>
                            <Typography sx={{
                                mb: 2, fontWeight: 400, fontFamily: '"Plus Jakarta Sans", serif;', textAlign: 'center'
                            }} color={"text.secondary"} variant="body1" gutterBottom>
                                protection.
                            </Typography>

                            <List sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                                {options.map((option, index) => (
                                    <ListItem
                                        key={index}
                                        button
                                        onClick={() => setActiveOption(index)}
                                        sx={{
                                            // backgroundColor: activeOption === index ? "background.paper" : "background.default",
                                            borderTop: activeOption === index ? '2px solid #20447A' : '1.5px solid #D1D0D6',
                                            position: 'relative',
                                            pl: 3,
                                            py: 2,
                                            width: { xs: '100%', md: 'auto' },
                                            my: { xs: 1, md: 0 }
                                        }}
                                    >


                                        <Box>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: activeOption === index ? 600 : 400,
                                                    color: '#000',
                                                    fontSize: "20px"
                                                }}
                                            >
                                                {activeOption === index && (
                                                    <ArrowForwardIosOutlinedIcon
                                                        fontSize='small'
                                                        sx={{
                                                            // position: 'absolute',
                                                            // left: -24,
                                                            // top: 0,
                                                            color: '#000',
                                                            fontSize: 16,
                                                        }}
                                                    />
                                                )}  {option.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 400,
                                                    fontFamily: '"Plus Jakarta Sans", serif;'
                                                }}
                                            >
                                                {option.description}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%', height: '70vh' }}>
                                <img
                                    src={options[activeOption].image}
                                    alt={options[activeOption].title}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Element>
    );
};
