import { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <IconButton
            onClick={scrollToTop}

            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                color: "#fff",
                display: visible ? 'inline-flex' : 'none',
                backgroundColor: 'primary.main',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                }
            }}
        >
            <ExpandLessIcon fontSize="medium" />
        </IconButton>
    );
};
