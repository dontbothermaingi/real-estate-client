import { Box, FormControl, IconButton, MenuItem, Select, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react"
import Menu from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import LocalPhone from "@mui/icons-material/LocalPhone";
import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

function PropertyDisplayNavbar(){

    const [currency, setCurrency] = useState('AED')
    const [icon, setIcon] = useState("")
    const isMobile = useMediaQuery('(max-width: 1210px)')
    const navigate = useNavigate()

    animate(".menu", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 })

    function handleChangeIcon(type){
        setIcon(icon === type ? null : type)
    }

    function handleBuy(){
        navigate("/properties")
        handleChangeIcon('buy')
    }

    function handleRent(){
        handleChangeIcon('rent')
    }

    function handleServices(){
        handleChangeIcon('services')
    }

    function handleOptions(){
        navigate("/options")
    }

    function handleHome(){
        navigate("/")
    }

    const navBarOption = (option,type, onClickHandler) => (
        <motion.div whileHover={{ y:-9 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200 }} onHoverStart={() => console.log('hover started!')} >
            <Typography 
                fontFamily={"GT Medium"} 
                fontSize={'18px'}
                onClick={onClickHandler}
                color="white"
                sx={{
                    cursor:'pointer',
                    position:'relative',
                    "::after":{
                        content:'""',
                        position:"absolute",
                        width: icon === type ? "100%": '0',
                        height:'3px',
                        backgroundColor:'orange',
                        bottom:'-2px',
                        left:'0',
                        transition:'width 0.3s ease-in-out'
                    },
                    ":hover::after":{
                        width:'100%'
                    }
                }}
            >
                {option}
            </Typography>
        </motion.div>
    )

    return ( 

        <Box>
            
            {isMobile ? (
                <Box display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Typography onClick={handleHome} style={{fontFamily:'GT Medium', fontSize:"25px", cursor:'pointer', color:'white'}}>House<span style={{color:'orange'}}>.</span></Typography>
                        </Box>
                        <Box display={'flex'} gap={'20px'} alignItems={'center'}>
                            <Box>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Select
                                        type="text"
                                        onChange={(e) => setCurrency(e.target.value)}
                                        value={currency}
                                        sx={{
                                            color:'black',
                                            backgroundColor:'white',
                                            height:'30px',
                                            fontSize:'10px',
                                        }}
                                    >
                                        <MenuItem value="AED"><Typography fontFamily={"GT Regular"} fontSize={'12px'}>AED</Typography></MenuItem>
                                        <MenuItem value="USD"><Typography fontFamily={"GT Regular"} fontSize={'12px'}>USD</Typography></MenuItem>
                                        <MenuItem value="EUROS"><Typography fontFamily={"GT Regular"} fontSize={'12px'}>EUROS</Typography></MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <IconButton onClick={handleOptions}>
                                    <Menu style={{fontSize:'25px', color:'white'}}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
            ):(
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Typography onClick={handleHome} style={{fontFamily:'GT Medium', fontSize:"40px", cursor:'pointer', color:'white'}}>House<span style={{color:'orange'}}>.</span></Typography>
                    </Box>

                    <motion.div
                        initial={{ scale: 0.4 }}
                        animate={{ scale: 1 }}
                        transition={{ ease: "circInOut", duration: 1.9, type:'spring', }}
                    >
                        <Box sx={{display:'flex', flexDirection:'row', alignItems:"center", gap:"80px"}}>
                            {navBarOption("Buy","buy", handleBuy)}
                            {navBarOption("Rent", "rent", handleRent)}
                            {navBarOption("Services", "services", handleServices)}
                        </Box>
                    </motion.div>

                    <Box display="flex" flexDirection="row" alignItems="center">
                        <IconButton>
                            <LocalPhone style={{color:'white', fontSize:'30px'}}/>
                        </IconButton>
                        {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <Select
                                type="text"
                                onChange={(e) => setCurrency(e.target.value)}
                                value={currency}
                                sx={{
                                    color:'black',
                                    backgroundColor:'white'
                                }}
                            >
                                <MenuItem value="AED"><Typography fontFamily={"GT Regular"}>AED</Typography></MenuItem>
                                <MenuItem value="USD"><Typography fontFamily={"GT Regular"}>USD</Typography></MenuItem>
                                <MenuItem value="EUROS"><Typography fontFamily={"GT Regular"}>EUROS</Typography></MenuItem>
                            </Select>
                        </FormControl> */}
                        {navBarOption("Contact us")}
                    </Box>
                </Box>
            )}

        </Box>
     );
}
 
export default PropertyDisplayNavbar;