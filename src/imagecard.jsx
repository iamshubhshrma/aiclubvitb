import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ src, heading, text, isCenter }) => {
    return (
        <Card elevation={0}


            style={{
                transition: 'transform 0.1s ease',
                transform: isCenter ? 'scale(1)' : 'scale(0.5)', // Scale the center card larger
                opacity: isCenter ? 1 : 0.7, // Slightly reduce the opacity of non-center cards
            }}
            sx={{ borderRadius: '20px', color: "white", bgcolor: "transparent" }}
        >
            <CardMedia
                component="img"
                image={src}
                alt={heading}
                style={{ height: '400px', objectFit: 'cover' }} // Adjust height and fit

                sx={{
                    borderRadius: '20px',

                }}
            />
            {isCenter ?
                <CardContent>
                    <Typography variant="h4"
                        sx={{
                            color: '#e6e6fa', // Light purple text color
                            textShadow: `
                          0 0 5px #e6e6fa,
                          0 0 10px #e6e6fa,
                          0 0 15px #d8bfd8,
                          0 0 20px #d8bfd8
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
                    >{heading}</Typography>
                    <Typography variant="body2"
                        sx={{
                            color: '#e6e6fa', // Light purple text color
                            textShadow: `
                          0 0 5px #e6e6fa,
                          0 0 10px #e6e6fa,
                          0 0 15px #d8bfd8,
                          0 0 20px #d8bfd8
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
                    >
                        {text}
                    </Typography>
                </CardContent>
                : ''}
        </Card>
    );
};

export default ImageCard;

