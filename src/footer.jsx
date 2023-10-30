// import { Flare } from "@mui/icons-material";
import logo from "./images/Logo.png"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Box} from "@mui/material";

function Footer(){

    return(
        <AppBar position="relative" sx={{ top: 'auto', bottom: 0 , backgroundColor:"#151515" ,borderTop:"1px solid #4d4d4e"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                <img style={{maxWidth:"80px"}}src={logo} alt="logo" /> 
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sanserif',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                    >
                    Romi Finance
                </Typography>

                
            </div>
            <Box sx={{display:"flex" ,justifyContent:"center", marginBottom:2}}>
                <TwitterIcon sx={{fontSize:30}}></TwitterIcon>
                <GitHubIcon sx={{marginX:5, fontSize:30}}></GitHubIcon>
                <TelegramIcon sx={{fontSize:30}}></TelegramIcon>
            </Box>
            <Box sx={{display:"flex" ,justifyContent:"center", marginBottom:2}}>
                <Typography>Terms and Conditions</Typography>
                <Typography sx={{marginX:2}}>Referral Terms</Typography>
                <Typography>Media Kit</Typography>
            </Box>
        
        </AppBar>
    )
}

export default Footer;