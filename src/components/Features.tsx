import { useState } from 'react';
import { Box, Container, Typography, Grid, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Element, } from 'react-scroll';
import secureImg from "../assets/features_1.jpeg";
import dataImg from "../assets/features_2.jpeg";
import complianceImg from "../assets/features_3.jpeg";
import bg from "../assets/features_bg.png"

const options = [
    {
        id: 1,
        title: "Secure verification methods",
        description: "Verify candidate qualifications for recruitment decisions.",
        image: secureImg,
    },
    {
        id: 2,
        title: "Data encryption",
        description: "Streamline admissions by verifying student transcripts and diplomas.",
        image: dataImg,
    },
    {
        id: 3,
        title: "Compliance with relevant data privacy regulations",
        description: "Ensure regulatory compliance by verifying professional licenses.",
        image: complianceImg,
    },

];

export const Features = () => {
    const [activeOption, setActiveOption] = useState(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                                        onClick={() => setActiveOption(option.id)}
                                        sx={{
                                            // backgroundColor: activeOption === index ? "background.paper" : "background.default",
                                            borderTop: activeOption === option.id ? '2px solid #20447A' : '1.5px solid #D1D0D6',
                                            position: 'relative',
                                            pl: 3,
                                            py: 1,
                                            width: { xs: '100%', md: 'auto' },
                                            my: { xs: 1, md: 0 }
                                        }}
                                    >

                                        <Box>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: activeOption === option.id ? 600 : 400,
                                                    color: '#000',
                                                    fontSize: "20px"
                                                }}
                                            >
                                                {activeOption === option.id && (
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
                        <Grid style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: "#fff",
                            backgroundSize: 'cover'

                        }} item xs={12}>
                            <Box sx={{

                                width: '100%',
                                justifyContent: "center",
                                display: "flex",

                            }}>
                                <img
                                    src={options.find(o => o.id === activeOption)?.image}
                                    alt={options.find(o => o.id === activeOption)?.title}
                                    style={{ width: isMobile ? "95%" : '80%', height: 'auto', borderRadius: 7 }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Element>
    );
};
