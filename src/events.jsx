import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CenterMode from './center';
export default function BoxBasic() {

    return (
        <Box component="section" className='ev-bg' sx={{ p: 10, height: "80vh", width: '80%', borderRadius: '40px', m: 5, mx: 'auto' }}>
            {/* <Stack direction="row" spacing={8} sx={{ justifyContent: 'space-evenly' }}>
                <Typography sx={{ color: "white", textAlign: 'center', mb: 3 }}>Event</Typography>
                <Typography sx={{ color: "white", textAlign: 'center', mb: 3 }}>Event</Typography>
                <Typography sx={{ color: "white", textAlign: 'center', mb: 3 }}>Event</Typography>
                <Typography sx={{ color: "white", textAlign: 'center', mb: 3 }}>Event</Typography>


            </Stack> */}
            <CenterMode />

        </Box>
    );
}

{/* <Box component="section" sx={{ p: 5, maxWidth: '50%' }}>
                    <Typography variant='h2' sx={{ textAlign: 'center', mb: 3 }}>Engineering Dreams with Artificial Intelligence</Typography>
                    
                </Box>
                <Box component="section" sx={{ p: 5, maxWidth: '50%' }}>
                    <Typography variant='h2' sx={{ textAlign: 'center', mb: 3 }}>Engineering Dreams with Artificial Intelligence</Typography>
                    <Typography variant='h4' sx={{ textAlign: 'center', color: 'white' }}>
                        Welcome to the VIT Bhopal University’s AI Club, where technology enthusiasts and innovators connect to explore the endless possibilities of artificial intelligence. Join us to collaborate, learn, and push the boundaries of what AI can achieve.
                    </Typography>
                </Box> */}