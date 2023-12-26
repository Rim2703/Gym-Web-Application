import React, { useState } from 'react';
import { Stack, Link, IconButton } from '@mui/material';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/Logo.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
      style={{ cursor: 'pointer' }}
    >
      <Link onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }} />
      </Link>

      <IconButton
        onClick={toggleMenu}
        sx={{
          display: { sm: 'none', xs: 'block' },
          color: '#3A1212',
          fontSize: '30px',
        }}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </IconButton>

      <Stack
        direction={isMenuOpen ? 'column' : 'row'}
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
        sx={{ display: { sm: 'flex', xs: isMenuOpen ? 'flex' : 'none' } }}
      >
        <ScrollLink
          to="exercises"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
          }}
        >
          Exercises
        </ScrollLink>
        <ScrollLink
          to="reasons"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Reasons
        </ScrollLink>
        <ScrollLink
          to="plans"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Plans
        </ScrollLink>
        <ScrollLink
          to="testimonials"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Testimonials
        </ScrollLink>
      </Stack>
    </Stack>
  );
};

export default Navbar;






