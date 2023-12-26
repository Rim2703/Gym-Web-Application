import React from 'react'
import { Box } from '@mui/material'
import Banner from './Banner'
import SearchExercises from './SearchExercises'
import About from './About'
import Plans from './Plans'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExercises />
      <About />
      <Plans />
      <Testimonials />
    </Box>
  )
}

export default Home