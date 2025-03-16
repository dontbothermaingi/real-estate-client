import NavBar from "./navbar";
import { Box, Divider,IconButton,Typography,} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { motion } from "motion/react"
import { useState } from "react";

function NavBarOptions(){

    const [icon, setIcon] = useState("")

    function handleChangeIcon(type){
        setIcon(icon === type ? null : type)
    }

    const renderOption = (option) => (
        <motion.div whileHover={{ x:20 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200 }} onHoverStart={() => console.log('hover started!')} >
            <Typography fontFamily={"GT Regular"} style={{cursor:'pointer'}} color="black">{option}</Typography>
        </motion.div>
    )

    function handleBuy(){
        handleChangeIcon('buy')
    }

    function handleRent(){
        handleChangeIcon('rent')
    }

    function handleServices(){
        handleChangeIcon('services')
    }

    return ( 
        <Box display={'flex'} flexDirection={'column'} >
                <Box marginLeft={'20px'} marginRight={'20px'} marginTop={'20px'}>
                    <NavBar />
                </Box>
                <Box>
                    <Box display={'flex'} flexDirection={'column'} mt={'50px'} padding={'30px'}>
                        <Box>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography style={{fontFamily:"GT Medium", fontSize:'20px', cursor:'pointer', marginBottom:'10px', color:'black'}}>Buy</Typography>
                                <IconButton style={{color:'black'}} onClick={handleBuy}>
                                    {icon === 'buy' ? <RemoveIcon /> : <AddIcon />}
                                </IconButton>
                            </Box>
                            {icon === 'buy' ? (
                                <Box display={'flex'} flexDirection={'column'} gap={'10px'} mb={'20px'}>
                                    {renderOption("Apartments")}
                                    {renderOption("Villas")}
                                    {renderOption("Townhouse")}
                                    {renderOption("Penthouses")}
                                    {renderOption("Commercial")}
                                </Box>
                            ):("")}
                            
                        </Box>

                        <Divider orientation="horizontal" sx={{borderColor:'gray'}}/>

                        <Box>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography style={{fontFamily:"GT Medium", fontSize:'20px', cursor:'pointer', marginTop:'5px', marginBottom:'5px', color:'black'}}>Rent</Typography>
                                <IconButton style={{color:'black'}} onClick={handleRent}>
                                    {icon === 'rent' ? <RemoveIcon /> : <AddIcon />}
                                </IconButton>
                            </Box>
                            {icon === 'rent' ? (
                                <Box display={'flex'} flexDirection={'column'} gap={'10px'} mb={'20px'}>
                                    {renderOption("Apartments")}
                                    {renderOption("Villas")}
                                    {renderOption("Townhouse")}
                                    {renderOption("Penthouses")}
                                    {renderOption("Commercial")}
                                </Box>
                            ):("")}
                        </Box>

                        <Divider orientation="horizontal" sx={{ borderColor: 'gray' }} />

                        <Box>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography style={{fontFamily:"GT Medium", fontSize:'20px', cursor:'pointer', marginTop:'5px', marginBottom:'5px', color:'black'}}>Services</Typography>
                                <IconButton style={{color:'black'}} onClick={handleServices}>
                                    {icon === 'services' ? <RemoveIcon /> : <AddIcon />}
                                </IconButton>
                            </Box>
                            {icon === 'services' ? (
                                <Box display={'flex'} flexDirection={'column'} gap={'10px'} mb={'20px'}>
                                    {renderOption("Morgages")}
                                    {renderOption("Short Term Rentals")}
                                    {renderOption("Property Management")}
                                    {renderOption("List Your Property")}

                                </Box>
                            ):("")}
                        </Box>

                    </Box>
                </Box>
        </Box>
     );
}
 
export default NavBarOptions;