import React, { useState } from 'react';
import { IconButton, Badge, Modal, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementCount, decrementCount } from '../actions/productActions';
import ProductModalContent from './ProductModalContent';

const CartButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleIncrementBasket = (product) => {
    dispatch(addToCart(product));
    dispatch(incrementCount());
  };

  return (
    <div>
      <IconButton aria-label="cart" onClick={() => handleOpenModal(cartItems[0])}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          {selectedProduct && <ProductModalContent product={selectedProduct} />}
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CartButton;