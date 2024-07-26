import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

export const ScrollToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <IconButton
            onClick={scrollToTop}
            style={{
                border: '2px solid #fff',
                background: "primary",
                padding: 0,
                zIndex: 10,
                position: "fixed",
                bottom: 20,
                right: 20,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
            }}>

            <ExpandLessIcon
                sx={{ background: "primary.main", borderRadius: "50%", margin: 0 }}
                fontSize={"medium"}
                component={"button"}
            />
        </IconButton>
    )
}



