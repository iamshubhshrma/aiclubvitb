import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
export default function BoxBasic() {
    return (
        <Box component="section" sx={{ p: 5, height: "100vh" }}>
            <Stack direction="row" spacing={8} sx={{ justifyContent: 'space-evenly' }}>
                <Box component="section" sx={{ p: 5, maxWidth: '50%' }}>
                    <Typography variant='h2' sx={{ textAlign: 'center', mb: 3 }}>Engineering Dreams with Artificial Intelligence</Typography>
                    <Typography variant='h4' sx={{ textAlign: 'center', color: 'white' }}>
                        Welcome to the VIT Bhopal University’s AI Club, where technology enthusiasts and innovators connect to explore the endless possibilities of artificial intelligence. Join us to collaborate, learn, and push the boundaries of what AI can achieve.
                    </Typography>
                </Box>

                <Card sx={{

                    height: "500px",
                    borderRadius: "40%", // Makes it circular, adjust or remove if rectangular
                    overflow: "hidden", // Ensures image does not exceed container bounds
                    boxShadow: "0px 0px 20px 10px rgba(128, 0, 128, 0.9)", // Initial soft glow
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(128,0,128,0.6), rgba(128,0,128,0) 80%)", // Purple gradient glow
                        zIndex: -1,
                        transform: "scale(2)", // Scale for larger glow effect
                        filter: "blur(40px)", // Blurs gradient for soft glow
                    },
                }}>

                    <CardMedia
                        component="img"
                        height="500px"
                        image="image1.jpg"
                        title="bg image"
                    />

                </Card>
            </Stack>

        </Box>
    );
}