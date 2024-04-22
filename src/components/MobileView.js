import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { formattedPrice } from '../utils';

const MobileView = ({ product }) => (
  <Box sx={{ padding: '20px' }}>
    <CardMedia
      component="img"
      sx={{ width: '100%', height: 'auto' }}
      image={product.image}
      alt={product.image}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'flex-start' }}>
      <Typography component="div" variant="h5" gutterBottom>{product.category}</Typography>
      <Typography variant="h6" sx={{ color: 'gray', fontSize: { xs: '16px', sm: '18px' } }}>{product.name}</Typography>
      <Typography component="div" color="text.secondary">{product.type}</Typography>
      <Typography color="text.secondary">{formattedPrice(product.price)}</Typography>
      <Button variant="contained" size="large" sx={{ width: '100%', marginTop: '20px' }}>
        {/* Добавьте кнопку для мобильной версии */}
      </Button>
    </Box>
  </Box>
);

export default MobileView;