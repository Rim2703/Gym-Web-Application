import React from 'react';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { programsData } from '../utils/programsData';

const SearchExercises = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack alignItems="center" mt="75px" justifyContent="center" p="30px" id='exercises'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Explore Our Programs <br /> To Shape You
      </Typography>

      <Stack
        direction={isSmallScreen ? 'column' : 'row'} 
        alignItems={isSmallScreen ? 'center' : 'flex-start'} 
        justifyContent="center"
        spacing={isSmallScreen ? 4 : 2} 
        className="bodyPart-card"
      >
        {programsData.map((program) => (
          <div key={program.heading} className='category'>
            <span>{program.image}</span>
            <span>{program.heading}</span>
            <Typography fontSize={isSmallScreen ? '12px' : '14px'} fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {program.details}</Typography>
            <div className='join-now'><span>Join Now</span></div>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default SearchExercises;
