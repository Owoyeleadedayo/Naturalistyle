import React from 'react';
import { Container, Button, Grid, Typography, CircularProgress} from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import {FaShoppingCart} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi'



import classes from './Cart.module.css'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
     // const isEmpty = !cart.line_items.length;
     console.log(cart)

     if(cart.line_items === undefined){
          return (
               <div className={classes.circularContainer}>
                    <div className={classes.circularDiv}>
                         <CircularProgress/>
                    </div>
               </div>
          )
     }

     const EmptyCart = () => (
          <div>
               <FiShoppingCart className={classes.icon} />
               <Typography variant='subtitle1' className={classes.text}>You have no items in your cart <Button variant = 'outlined' className={classes.ButtonLink}><Link className={classes.link} to="/" > start adding some</Link></Button></Typography>
          </div>
     );

     

  return (
    <Container className = {classes.container}>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart  <FaShoppingCart className={classes.titleIcon}/> </Typography>
                 
          { !cart.line_items.length ? <EmptyCart /> : 
     
          <div >
               <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                         <Grid item xs={12} sm={4} key={item.id} > 
                              <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                         </Grid>
                    ))}
               </Grid>
               <div className={classes.cardDetails}>
                    <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div className={classes.buttons}> 
                         <Button className={classes.emptyButton} size="large" type="button" variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                         <Button className={classes.checkoutButton} size="large" type="button" variant='contained' color='primary'>Checkout</Button>
                    </div>
               </div>
          </div>}
    </Container>
  )
}

export default Cart;
// FaShoppingBag