import React, { useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './component' ;
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState({});

     const fetchProducts = async () => {
          const { data } = await commerce.products.list();
          setProducts(data);
     }

     const fetchCart = async () => {
          setCart( await commerce.cart.retrieve());
     }

     const handleAddToCart = async (productId, quantity) => {
          const item = await commerce.cart.add(productId, quantity);
          fetchCart();
          setCart(item.cart);
     }

     const handleUpdateCartQty = async ( productId, quantity ) => {
          await commerce.cart.update(productId, {quantity});
          fetchCart();
     }

     const handleRemoveFromCart = async (productId) => {
          await commerce.cart.remove(productId);
          fetchCart();
     }

     const handleEmptyCart = async () => {
        await commerce.cart.empty();
        fetchCart();
     }

     useEffect(() => {
         fetchProducts();
         fetchCart();
     }, []);

     console.log(cart);

     

  return (
     <BrowserRouter>
          <Navbar totalItems={cart !== undefined && cart.total_items} />
          <Routes>
               <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} /> }  />
               <Route path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleEmptyCart={handleEmptyCart} handleRemoveFromCart={handleRemoveFromCart} />}  />
          </Routes>
     </BrowserRouter>
          
     
  );
}

export default App;