import React from 'react'
import { Stack, Typography, Button } from '@mui/material';
import { plansData } from '../utils/plansData';

const Plans = () => {

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" id='plans'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Ready To Start Your Journey Now With Us
      </Typography>

      <Stack
        direction='row'
       justifyContent="center"
       spacing={2}
      >
        <div className='plans'>
          {plansData.map((plan, i) => (
            <div className='plan' key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <span>{plan.name}</span>

              <div className='features'>
                {plan.features.map((feature, i) => (
                  <div className="feature" key={i}>
                    <img src="" alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className='search-btn' style={{color:'black', backgroundColor: 'white'}}>Join Now</Button>
            </div>
          ))}
        </div>
      </Stack>
    </Stack>
  )
}

export default Plans