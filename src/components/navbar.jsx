import { Box, IconButton,Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react"
import Menu from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import LocalPhone from "@mui/icons-material/LocalPhone";
import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

function NavBar(){

    const [icon, setIcon] = useState("")
    const isMobile = useMediaQuery('(max-width: 1210px)')
    const navigate = useNavigate()

    animate(".menu", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 })

    function handleChangeIcon(type){
        setIcon(icon === type ? null : type)
    }

    function handleBuy(aim){
        navigate(`/properties/${aim}`)
        handleChangeIcon('buy')
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
                color="black"
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
                            <Typography onClick={handleHome} style={{fontFamily:'GT Medium', fontSize:"25px", cursor:'pointer', color:'black'}}>House<span style={{color:'orange'}}>.</span></Typography>
                        </Box>
                        <Box display={'flex'} gap={'20px'} alignItems={'center'}>
                            <Box>
                                <IconButton>
                                    <Menu style={{fontSize:'25px', color:'black'}}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
            ):(
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Typography onClick={handleHome} style={{fontFamily:'GT Medium', fontSize:"40px", cursor:'pointer', color:'black'}}>House<span style={{color:'orange'}}>.</span></Typography>
                    </Box>

                    <motion.div
                        initial={{ scale: 0.4 }}
                        animate={{ scale: 1 }}
                        transition={{ ease: "circInOut", duration: 1.9, type:'spring', }}
                    >
                        <Box sx={{display:'flex', flexDirection:'row', alignItems:"center", gap:"80px"}}>
                            {navBarOption("View Properties","buy", () => handleBuy('Buy'))}
                        </Box>
                    </motion.div>

                    <Box display="flex" flexDirection="row" alignItems="center">
                        <IconButton>
                            <LocalPhone style={{color:'black', fontSize:'30px'}}/>
                        </IconButton>
                        {navBarOption("Contact us")}
                    </Box>
                </Box>
            )}

        </Box>
     );
}
 
export default NavBar;