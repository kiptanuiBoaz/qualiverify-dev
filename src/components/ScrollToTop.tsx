import BackToUp from '@uiw/react-back-to-top';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export const ScrollToTop = () => {
    return (
        <BackToUp hideProgress style={{ border: '2px solid #fff', background: "#305949", borderRadius: "50%", padding: 0, zIndex: 10 }}>
            <ExpandLessIcon
                sx={{ background: "#305949", borderRadius: "50%", margin: 0 }}
                fontSize={"medium"}
                component={"button"}
            />
        </BackToUp>
    )
}
"use client"


