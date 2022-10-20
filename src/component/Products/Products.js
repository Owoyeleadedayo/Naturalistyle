import React from 'react';
import { Grid } from '@mui/material';
import Product from '../Product/Product';

import classes from './Products.module.css'
import Section from '../Section/Section';


const Products = ({ products, onAddToCart }) => {
  return (
     <div>
          <Section />
          <main className={classes.content}>
               <div className={classes.toolbar} />
               <Grid container justifyContent='center' alignItems='center' spacing={4}>
                    {products.map((product) => (
                         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                              <Product product={product} onAddToCart={onAddToCart} />
                         </Grid>
                    ))}
               </Grid>
          </main>
     </div>
  )
}

export default Products;