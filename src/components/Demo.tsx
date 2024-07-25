import { Box } from '@mui/material';
import ReactPlayer from 'react-player/lazy';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
export const Demo = () => {
    return (
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
            <ReactPlayer
                playing={false}
                width={'100%'}
                height={"90vh"}
                style={{ objectFit: "cover" }}
                fallback={<p>Loading...</p>}
                playIcon={<PlayCircleFilledOutlinedIcon sx={{ fontsize: 50 }} fontSize='large' />}
                light='/public/demo-screenshot.png'
                controls={true}
                url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
            />
        </Box>
    )
}
