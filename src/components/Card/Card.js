import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

function CardComponent() {
  return (
    <div style={{display:"flex", justifyContent:'space-evenly'}}>
      <Box maxWidth='250px'>
        <Card >
          <CardMedia
            title='image'
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Mens Casual</Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              <Box component="span" fontWeight="bold">$22.3</Box>
              <>
                {' '}
                (<Box component="span" color="text.secondary" textDecoration="line-through">${100 + 100 * (10 / 100)}</Box>
                {' '}
                <Box component="span" color="error.main">-10%</Box>)
              </>
            </Typography>
            <Box>
              3 stars
            </Box>
          </CardContent>
          <CardActions>
            <Button variant='outlined' color='info'>Buy Now</Button>
          </CardActions>
        </Card>
      </Box>
      <Box maxWidth='250px'>
        <Card>
          <CardMedia
            title='image'
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Mens Casual</Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              <Box component="span" fontWeight="bold">$22.3</Box>
              <>
                {' '}
                (<Box component="span" color="text.secondary" textDecoration="line-through">${100 + 100 * (10 / 100)}</Box>
                {' '}
                <Box component="span" color="error.main">-10%</Box>)
              </>
            </Typography>
            <Box>
              3 stars
            </Box>
          </CardContent>
          <CardActions>
            <Button variant='outlined' color='info'>Buy Now</Button>
          </CardActions>
        </Card>
      </Box>
      <Box maxWidth='250px'>
        <Card>
          <CardMedia
            title='image'
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Mens Casual</Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              <Box component="span" fontWeight="bold">$22.3</Box>
              <>
                {' '}
                (<Box component="span" color="text.secondary" textDecoration="line-through">${100 + 100 * (10 / 100)}</Box>
                {' '}
                <Box component="span" color="error.main">-10%</Box>)
              </>
            </Typography>
            <Box>
              3 stars
            </Box>
          </CardContent>
          <CardActions>
            <Button variant='outlined' color='info'>Buy Now</Button>
          </CardActions>
        </Card>
      </Box>
      <Box maxWidth='250px'>
        <Card>
          <CardMedia
            title='image'
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Mens Casual</Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              <Box component="span" fontWeight="bold">$22.3</Box>
              <>
                {' '}
                (<Box component="span" color="text.secondary" textDecoration="line-through">${100 + 100 * (10 / 100)}</Box>
                {' '}
                <Box component="span" color="error.main">-10%</Box>)
              </>
            </Typography>
            <Box>
              3 stars
            </Box>
          </CardContent>
          <CardActions>
            <Button variant='outlined' color='info'>Buy Now</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

export default CardComponent