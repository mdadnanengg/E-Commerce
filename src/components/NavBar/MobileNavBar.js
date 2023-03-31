import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["Home", "Products", "About", "Contact"]

function MobileNavBar() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        >
            <List>
                {
                    PAGES.map((page, index)=>(
                    <ListItemButton onClick={()=> setOpenDrawer(false)} key={index} >
                    <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
        <IconButton sx={{color:'black'}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
        <Typography sx={{ color: "Black", fontWeight: "1.5rem", marginLeft:"10%" }}>
            E-Commerce
        </Typography>
        </>
    )
}

export default MobileNavBar