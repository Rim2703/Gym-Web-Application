import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import Logo from '../assets/images/Logo.png';
import nike from '../assets/icons/nike.png';
import nb from '../assets/icons/nb.png';
import adidas from '../assets/icons/adidas.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box mt="70px" bgcolor="#FFF3F4" className='footer_wrapper'>
      <Box sx={{ px: '60px', pt: '14px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap">
        <img src={Logo} alt="logo" style={{ width: '30px', height: '21px' }} />
          <h2>Fitness Hub
          <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '20px' } }} mt="7px" textAlign="center" pb="40px">
            Made By Rimsha ❤️
          </Typography>
          </h2>
        </Stack>
      </Box>

        <div className="footer_box">
          <h4 className="footer_title">Company</h4>
          <ul className="footer_links">
            <li>
              <a href="/">Our Programs</a>
            </li>
            <li>
              <a href="/">Our Plan</a>
            </li>
            <li>
              <a href="/">Become a Member</a>
            </li>
          </ul>
        </div>

        <div className="footer_box">
          <h4 className="footer_title">Quick Links</h4>
          <ul className="footer_links">
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer_box">
          <h4 className="footer_title">Connect</h4>
          <ul className="footer_connect">
            <FacebookIcon />
            <YouTubeIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </ul>
        </div>

        <div className="footer_box">
          <h4 className="footer_title">Partners</h4>
          <div className="footer_partners">
            <img src={nb} alt="nb" />
            <img src={adidas} alt="adidas" />
            <img src={nike} alt="nike" />
          </div>
        </div>

      <Typography
        className="copyright"
        sx={{ textAlign: 'center', marginTop: '2rem', fontSize: '14px' }}
      >
        Copyright - {year}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
