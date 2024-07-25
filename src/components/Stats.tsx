import {
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useRef } from 'react';
import { useScrollTriggeredCountUp } from '../hooks/import { useScrollTriggeredCountUp } from \'./useScrollTriggeredCountUp';

export const Stats = () => {
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const ourReachAndProgress = [
        {
            id: 1,
            group: 'Number of Verifications completed',
            number: useScrollTriggeredCountUp(ref, 20000),
            concat: ' k+',
        },
        {
            id: 2,
            group: 'Turnaround Time ',
            number: `<${useScrollTriggeredCountUp(ref, 10)}`,
            concat: 'sec',
        },
        {
            id: 3,
            group: 'Countries',
            number: useScrollTriggeredCountUp(ref, 30),
            concat: '+',
        },
    ];

    return (
        <Container
            component="section"
            sx={{
                width: "80%",
                padding: '5%',
                backgroundColor: "primary.main",
                position: "absolute",
                top: { lg: "101%" },
                borderRadius: 5,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100
            }}
        >

            <Grid container spacing={2} justifyContent="center">
                {ourReachAndProgress.map(({ id, group, number, concat }) => (
                    <Grid key={id} item xs={12} sm={6} lg={4}>
                        <Typography
                            ref={ref}
                            variant={isMobile ? "h6" : "h3"}
                            component="p"
                            textAlign="center"
                            color="#fff"
                            sx={{
                                fontFamily: '"Plus Jakarta Sans", serif',
                                fontWeight: "800",
                            }}
                            gutterBottom
                        >
                            {number}
                            {concat}
                        </Typography>
                        <Typography
                            fontWeight="normal"
                            textAlign="center"
                            component="p"
                            sx={{
                                color: "#CBD5E1",
                                fontSize: "16px",
                                fontFamily: '"Plus Jakarta Sans", serif',
                            }}
                        >
                            {group}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
};
