import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";

const PAGES = ["Home", "Products", "About", "Contact"]

function NavigationBar() {
  const [value, setValue] = useState(0);
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  console.log(isMatch)
  return (
    <>
      <AppBar>
        <Toolbar sx={{ background: "white" }}>
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
