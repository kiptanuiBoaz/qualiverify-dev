import BackToUp from '@uiw/react-back-to-top';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ScrollToTop = () => {
    return (
        <BackToUp
            smooth
            hideProgress style={{ border: '2px solid #fff', background: "primary", borderRadius: "50%", padding: 0, zIndex: 10 }}>
            <ExpandLessIcon
                sx={{ background: "primary.main", borderRadius: "50%", margin: 0 }}
                fontSize={"medium"}
                component={"button"}
            />
        </BackToUp>
    )
}



