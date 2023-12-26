import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner5 from '../assets/images/banner5.png';
import banner4 from '../assets/images/banner4.png';
import tick from '../assets/icons/nike.png'

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        mt: { lg: '50px', xs: '70px' },
        ml: { sm: '50px' },
        display: 'flex',
        flexDirection: isSmallScreen ? 'column-reverse' : 'row',
        alignItems: 'center',
      }}
      className="reasons"
    >
      <Box sx={{ flex: '1', position: 'relative', p: isSmallScreen ? '20px 0' : '20px' }} className="hero-img">
        <img src={banner1} alt='banner' />
        <img src={banner2} alt='banner' />
        <img src={banner4} alt='banner' />
        <img src={banner5} alt='banner' />
      </Box>

      <Box sx={{ flex: '1', ml: { sm: '20px' } }}>
        <Typography color="#FF2625" fontWeight="600" fontSize={isSmallScreen ? '20px' : '26px'}>
          Reasons
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb={isSmallScreen ? '7px' : '13px'} mt={isSmallScreen ? '10px' : '10px'}>
          Why Choose Us ?
        </Typography>

        <Typography fontSize={isSmallScreen ? '18px' : '22px'} fontFamily="Alegreya" lineHeight={isSmallScreen ? '30px' : '35px'}>
          <img src={tick} alt="tick" style={{ width: '10px', height: '10px', margin: '0px 10px' }} />
          OVER 140+ EXPERT COACHES
        </Typography>

        <Typography fontSize={isSmallScreen ? '18px' : '22px'} fontFamily="Alegreya" lineHeight={isSmallScreen ? '35px' : '37px'}>
          <img src={tick} alt="tick" style={{ width: '10px', height: '10px', margin: '0px 10px' }} />
          TRAIN SMARTER AND FASTER THAN BEFORE
        </Typography>

        <Typography fontSize={isSmallScreen ? '18px' : '22px'} fontFamily="Alegreya" lineHeight={isSmallScreen ? '33px' : '40px'}>
          <img src={tick} alt="tick" style={{ width: '10px', height: '10px', margin: '0px 10px' }} />
          1 FREE PROGRAM FOR NEW MEMBER
        </Typography>

        <Typography fontSize={isSmallScreen ? '18px' : '22px'} fontFamily="Alegreya" lineHeight={isSmallScreen ? '30px' : '35px'}>
          <img src={tick} alt="tick" style={{ width: '10px', height: '10px', margin: '0px 10px' }} />
          RELIABLE PARTNERS
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
