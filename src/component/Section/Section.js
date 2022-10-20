import React from 'react';
import { Typography, Button } from '@mui/material';
import {FaShoppingCart} from 'react-icons/fa';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

import classes from './Section.module.css';

const Section = () => {
  return (
    <main className={classes.wrapper}>
          <div className={classes.introDiv}>
               <Typography align='center' variant ='h2' className={classes.text}>NaturaliStyle Store</Typography>
               <div className={classes.buttonDiv}>
                    <Button variant = 'contained ' className={classes.startButton}> <strong>Start Shopping</strong>&nbsp; <FaShoppingCart /></Button>
                    <Button variant = 'outlined' className={classes.learnMore}><strong>Learn More</strong>&nbsp; <BsFillArrowLeftCircleFill /></Button>
               </div>
               
          </div>
          <div className={classes.imgDiv}>
               <img src='/images/bgimg.png' alt='cart' className={classes.image}/>
          </div>
    </main>
  )
}

export default Section;