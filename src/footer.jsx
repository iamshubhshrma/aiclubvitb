import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography, IconButton } from "@mui/material";

export default function BoxBasic() {
    return (
        <Box
            component="footer"
            sx={{

                color: "#fff",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Main Links */}
            <Box sx={{ display: "flex", gap: "2rem", marginBottom: "1rem" }}>
                <Typography sx={{ textAlign: 'center', fontWeight: 1000 }}>Home</Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 1000 }}> About Us</Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 1000 }}>Events</Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 1000 }}>Contact</Typography>













            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#fff" }}
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#fff" }}
                >
                    <TwitterIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#fff" }}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#fff" }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>

            {/* Footer Bottom Text */}
            <Typography variant="body2" color="inherit">
                &copy; {new Date().getFullYear()} AI Club VIT Bhopal University. All rights reserved.
            </Typography>
        </Box>
    );
}