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
        <Box className='firstcomp' component="section" sx={{ p: 5, height: "80vh", width: '90%', m: 5, borderRadius: '20px' }}>
            <Stack direction="row" spacing={8} sx={{ alignContent: 'flex-start' }}>
                <Box component="section" sx={{ p: 5, maxWidth: '50%' }}>
                    <Typography variant='h2'
                        sx={{
                            textAlign: 'center', mb: 3,
                            color: '#e6e6fa', // Light purple text color
                            textShadow: `
                          0 0 4px #e6e6fa,
                          0 0 8px #e6e6fa,
                          0 0 12px #d8bfd8,
                          0 0 16px #d8bfd8
                        `,
                            transition: 'text-shadow 0.3s ease-in-out', // Optional transition for hover effect
                            '&:hover': {
                                textShadow: `
                            0 0 10px #e6e6fa,
                            0 0 20px #e6e6fa,
                            0 0 25px #d8bfd8,
                            0 0 30px #d8bfd8
                          `,
                            },
                        }}
                    >Engineering Dreams with Artificial Intelligence</Typography>
                    <Typography variant='h4' sx={{ textAlign: 'center', color: 'white' }}>
                        Welcome to the VIT Bhopal University’s AI Club, where technology enthusiasts and innovators connect to explore the endless possibilities of artificial intelligence. Join us to collaborate, learn, and push the boundaries of what AI can achieve.
                    </Typography>
                </Box>


            </Stack>

        </Box>
    );
}