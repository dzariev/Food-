import React, { useState } from 'react';
import { Card, Typography, Box, Grid, Button, styled } from '@mui/material';
import { formattedPrice } from '../utils';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch } from 'react-redux';
import { decrementCount, incrementCount } from '../store/actions/productActions';



const CounterCircle = styled(Box)(({ theme }) => ({
  width: 25,
  height: 25,
  borderRadius: '50%',
  backgroundColor: 'white',
  color: 'grey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 25,
}));

const CounterQuantity = styled(Box)(({ theme }) => ({
  color: 'grey',
  fontSize: 19,
}));

const ProductCard = ({ product}) => {

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(incrementCount());
    // addToCart(product);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(decrementCount());
    }
  };

  return (
    <Card sx={{
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      marginTop: '50px',
      borderRadius: '20px',
      justifyItems: 'start',
      alignItems: 'center',
      paddingLeft: '20px',
      marginRight: '50px' 
    }}>
      <CardMedia
        component="img"
        sx={{ minWidth: 90, width: 150, objectFit: 'cover' }}
        image={product.image}
        alt={product.image}
      />
      <Grid container justifyContent="flex-start" alignItems="center" item xs={12} sm={8} md={8} >
        <Box sx={{ display: 'grid', flexDirection: 'column', margin: '40px', alignItems: 'flex-start' }}>
          <Typography component="div" variant="h5" gutterBottom> {product.category} </Typography>
          <Typography variant="h6" sx={{ color: 'gray', fontSize: { xs: '16px', sm: '18px' } }}> {product.name} </Typography>
          <Typography component="div" color="text.secondary"> {product.type} </Typography>
          <Typography color="text.secondary" > {formattedPrice(product.price)} . </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'PaleTurquoise',
              width: 120,
              height: 40,
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', margin: '10px 0', alignItems: 'center'}}>
              <Button onClick={handleDecrement} size="small" style={{ minWidth: '30px', width: 'auto'}}>
                <CounterCircle>-</CounterCircle>
              </Button>
              <CounterQuantity variant="h6" sx={{ margin: '0 10px', fontSize: '20px', fontWeight: 'bold' }}>{quantity}</CounterQuantity>
              <Button onClick={handleIncrement} size="small" style={{ minWidth: '30px', width: 'auto' }}>
                <CounterCircle>+</CounterCircle>
              </Button>
            </Box>
          </Button>
        </Box>
       
      </Grid>
    </Card>

  );
}

export default ProductCard;