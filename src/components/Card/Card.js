import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

function CardComponent() {
  const [productData, setProductData] = useState({})
  console.log(productData)
  useEffect(()=>{
    axios
  .get("https://dummyjson.com/products/1")
  .then((res) => setProductData(res.data))
  .catch((err) => console.log("Something Went Wrong"))
  },[])
  return (
    <>
      <Grid container justifyContent='space-evenly'>
        <Grid item sx={10} sm={10} md={10}>
          <Grid container spacing={2} justifyContent='space-around'>
            {/* Cart Start */}
            <Grid item xs={6} md={3} sx={{ display: 'flex', justifyContent: "center" }}>
              <Box sx={{ width: "250px" }}>
                <Card >
                  <CardMedia
                    title='image'
                    component='img'
                    height='140'
                    image={productData.thumbnail}
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'> {productData.title} </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Box sx={{ fontSize: '18px' }} color='#2A88AD'>{productData.rating}</Box>
                      <Box><Rating name="rating" value={productData.rating} readOnly /></Box>
                    </Box>
                    <Typography variant='subtitle1' color='textSecondary'>
                      <Box component="span" fontWeight="bold" fontSize='150%' color='black'>${Math.floor(productData.price - (productData.price * (productData.discountPercentage / 100)))}</Box>
                      <>
                        {' '}
                        <Box component="span" color="text.secondary" textDecoration="line-through"><del>{productData.price}</del></Box>
                        {' '}
                        <Box component="span" color="error.main">({productData.discountPercentage}% off)</Box>
                      </>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant='outlined' color='info'>Buy Now</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CardComponent