import { Box, Grid, Typography } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import bgImg from "../img/hd_bg.jpg"
import CardComponent from '../Card/Card'

function Home() {
  return (
    <>
      <div style={{
        marginTop: "74px", backgroundImage: `url(${bgImg})`, width: "100%",
        height: "550px", backgroundRepeat: "round",
        borderRadius: "5px", 
      }}>
        <Box
          sx={{
            width: "100%",
            height: 550,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Grid containe sx={{ marginLeft: "7%" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant='h2' sx={{ fontWeight: 'bold', color: "white" }}>NEW SESSION ARRIVALS</Typography>
              <Typography variant='h3' sx={{ color: "white" }}>
                CHECK OUT ALL TRENDS <span style={{ color: 'red', fontWeight: 'bold' }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={['MENS', 'WOMENS', 'JEWELERY', 'ELECTRONICS']}
                    onLoop={(loopCount) =>
                      console.log(`Just completed loop ${loopCount}`)
                    }
                  />
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <br/>
        <CardComponent/>
        <br/>
      </div>
    </>
  )
}

export default Home