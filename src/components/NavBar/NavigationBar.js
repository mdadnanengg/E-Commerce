import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";
// import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

const PAGES = ["Home", "Products", "About", "Contact"]

function NavigationBar() {
  const [value, setValue] = useState(0);
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  console.log(isMatch)
  return (
    <>
      <AppBar sx={{background:"white"}}>
        <Toolbar sx={{ background: "white", marginLeft:"30px", marginRight:"30px"}}>
          { isMatch ? (
            <>
            <MobileNavBar/>
            </>
          ) : (
            <>
            <Typography sx={{ color: "Black", fontWeight: "1.5rem" }}>
            <span style={{color:"blue"}}>E</span>-Commerce
          </Typography>
            <Tabs
            textColor="primary"
            onChange={(e, value) => setValue(value)}
            value={value}
            indicatorColor="secondary"
          >
            {
              PAGES.map((page, index)=>(
                <Tab key={index} label={page} />
              ))
            }
          </Tabs>
          </>
          ) }
          <Button variant="outlined" color="info" sx={{ marginLeft: "auto" }}>
            <ShoppingCartOutlinedIcon />
            Cart (0)
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavigationBar;
