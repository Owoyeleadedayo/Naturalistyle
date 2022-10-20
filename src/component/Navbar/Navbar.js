import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/commerce.png';

import classes from './Navbar.module.css';


const Navbar = ({ totalItems }) => {
     const location = useLocation();
     const navigate = useNavigate()

  return (
    <>
          <AppBar position='fixed' className={classes.appBar} color="inherit">
               <Toolbar>
                    <Typography component={Link} to="/cart" variant='h6' className={classes.title} color="inherit">
                         <img src={logo} alt='Commerce js' height="25px" className={classes.image} />
                         <p>NaturaliStyle</p>
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                         <IconButton  onClick={() => {navigate('/cart')}}  aria-label='show cart items' color='inherit'>
                              <Badge badgeContent={totalItems} color="secondary">
                                   <ShoppingCart />
                              </Badge>
                         </IconButton>
                    </div> )}
               </Toolbar>
          </AppBar>
    </>
  )
}

export default Navbar;