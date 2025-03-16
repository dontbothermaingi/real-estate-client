import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import LocationCity from "@mui/icons-material/LocationCity";
import { Alert, Box, Divider, IconButton, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import { motion } from "motion/react"
import './universal.css'
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import { useState } from "react";


function MobileFooter (){

    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1700px)')
    const [successMessage, setSuccessMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [formData, setFormData] = useState({
        email:"",
    })

    const quicklinks = (name, onClickHandler) => (
        <motion.div whileHover={{ x:20 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200 }}>
            <Typography fontFamily={'GT Light'} fontSize={'16px'} style={{cursor:'pointer'}} onClick={onClickHandler}>{name}</Typography>
        </motion.div>
    )

    function handleCloseSnackbar(event,reason){
        if(reason === 'clickaway') return;
        setOpenSnackBar(false)
    }

    function handleChange(event){
        const {name,value} = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value,
        }))
    }


    function handleSubmit(event) {
        event.preventDefault(); // ✅ Prevent default submission first
    
        if (!formData.email) {
            setSuccessMessage("Please put in your email address");
        } else {
            setSuccessMessage("Subscribed Successfully");
        }
    
        setOpenSnackBar(true); // ✅ Avoid duplicate calls in both conditions
    
        // ✅ Reset form using the previous state approach (Best Practice)
        setFormData((prev) => ({ ...prev, email: '' }));
    }
    

    return ( 

        <Box>
            {isTablet ? (
                <Box sx={{backgroundColor:'#242424'}} >
                    <Box padding={'40px'}>

                        <Box mb={'30px'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} gap={'20px'} alignItems={'center'}>
                            <Box>
                                <Typography fontFamily={'GT Medium'} fontSize={'50px'} lineHeight={'0.9'}>Join our newsletter</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={'19px'}>Sign up and we'll keep you int the loop</Typography>
                            </Box>

                            <Box>
                                <form style={{display:'flex', alignItems:'left', gap:'30px'}} onSubmit={handleSubmit}>
                                    <TextField
                                        type="text"
                                        value={formData.email}
                                        name="email"
                                        onChange={handleChange}
                                        variant="standard"
                                        placeholder="Your email address"
                                        InputProps={{
                                            disableUnderline: true, // Removes the underline
                                            style: { fontSize: 19, color:'white', fontFamily:'GT Regular' }, // Adjust text size if needed
                                            
                                        }}
                                        style={{
                                            backgroundColor: "transparent", // No background
                                            width: "100%", // Adjust width as needed
                                            color:'white',
                                            fontFamily:'GT Regular'
                                        }}
                                    />

                                    <IconButton type="submit" style={{backgroundColor:'white'}}>
                                        <ChevronRightOutlined style={{color:'black', fontSize:'23px'}}/>
                                    </IconButton>
                                </form>

                                <Divider style={{backgroundColor:'white', marginTop:'10px'}} orientation="horizontal"/>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mb={'25px'} gap={'40px'}>
                            <Box>
                                <Typography fontFamily={'GT Bold'} fontSize={'30px'}>House.</Typography>

                                <Box display={'flex'} alignItems={'center'}>
                                    <IconButton>
                                        <LocationCity style={{color:'white'}}/>
                                    </IconButton>
                                    {quicklinks('Woodland Hills, CA., U.S.A.')}
                                </Box>

                                <Box display={'flex'} alignItems={'center'}>
                                    <IconButton>
                                        <EmailOutlined style={{color:'white'}}/>
                                    </IconButton>
                                    {quicklinks('www@house.com')}
                                </Box>

                                <Box display={'flex'} alignItems={'center'}>
                                    <IconButton>
                                        <LocalPhoneOutlined style={{color:'white'}}/>
                                    </IconButton>
                                    {quicklinks('(818) 225-2800')}
                                </Box>

                                
                            </Box>

                            <motion.div>
                                <Box display={'flex'} flexDirection={'column'}>
                                    <Typography fontFamily={'GT Bold'} fontSize={'30px'}>Quick Links</Typography>
                                    {quicklinks('Home')}
                                    {quicklinks('About')}
                                    {quicklinks('Services')}
                                </Box>
                            </motion.div>
                        </Box>

                        <Divider orientation="horizontal" style={{backgroundColor:'gray', marginBottom:'30px'}}/>

                        <Box>
                            <Typography fontFamily={'GT Light'} fontSize={'17px'} style={{cursor:'pointer'}} textAlign={'center'}>Copyright © 2025 House. All Rights Reserved.</Typography>
                        </Box>

                    </Box>
                </Box>
            ):(
                <Box sx={{backgroundColor:'#242424'}} >
                    <Box paddingTop={'40px'} className="landing">

                        <Box mb={'30px'} display={'flex'} flexDirection={'column'} gap={'20px'} alignItems={'center'}>
                            <Box>
                                <Typography fontFamily={'GT Medium'} fontSize={'25px'} >Join our newsletter</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={'15px'}>Sign up and we'll keep you int the loop</Typography>
                            </Box>

                            <Box>
                                <form style={{display:'flex', alignItems:'left', gap:'30px'}} onSubmit={handleSubmit}>
                                    <TextField
                                        type="text"
                                        value={formData.email}
                                        name="email"
                                        onChange={handleChange}
                                        variant="standard"
                                        placeholder="Your email address"
                                        InputProps={{
                                            disableUnderline: true, // Removes the underline
                                            style: { fontSize: 17, color:'white', fontFamily:'GT Regular' }, // Adjust text size if needed
                                            
                                        }}
                                        style={{
                                            backgroundColor: "transparent", // No background
                                            width: "100%", // Adjust width as needed
                                            color:'white',
                                            fontFamily:'GT Regular'
                                        }}
                                    />

                                    <IconButton type="submit" style={{backgroundColor:'white'}}>
                                        <ChevronRightOutlined style={{color:'black', fontSize:'20px'}}/>
                                    </IconButton>
                                </form>

                                <Divider style={{backgroundColor:'white', marginTop:'10px'}} orientation="horizontal"/>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mb={'25px'} gap={'40px'}>
                            <Box>
                                <Typography fontFamily={'GT Bold'} fontSize={'25px'} textAlign={'center'}>House.</Typography>

                                <Box display={'flex'} alignItems={'center'}>
                                    <IconButton>
                                        <LocationCity style={{color:'white'}}/>
                                    </IconButton>
                                    {quicklinks('Woodland Hills, CA., U.S.A.')}
                                </Box>

                                <Box display={'flex'} alignItems={'center'}>
                                    <IconButton>
                                        <EmailOutlined style={{color:'white'}}/>
                                    </IconButton>
                                    {quicklinks('www@house.com')}
                                </Box>

                                <Box display={'flex'} alignItems={'center'}>
                                    <IconButton>
                                        <LocalPhoneOutlined style={{color:'white'}}/>
                                    </IconButton>
                                    {quicklinks('(818) 225-2800')}
                                </Box>

                                
                            </Box>

                            <motion.div>
                                {/* <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Typography fontFamily={'GT Bold'} fontSize={'30px'} textAlign={'center'}>Quick Links</Typography>
                                    {quicklinks('Home')}
                                    {quicklinks('About')}
                                    {quicklinks('Services')}
                                </Box> */}
                            </motion.div>
                        </Box>

                        <Divider orientation="horizontal" style={{backgroundColor:'gray', marginBottom:'30px'}}/>

                        <Box>
                            <Typography fontFamily={'GT Light'} fontSize={'17px'} style={{cursor:'pointer'}} textAlign={'center'}>Copyright © 2025 House. All Rights Reserved.</Typography>
                        </Box>

                    </Box>
                </Box>
            )}

            <Snackbar
               open={openSnackBar}
               onClose={handleCloseSnackbar}
               autoHideDuration={6000}
               anchorOrigin={{horizontal:"center", vertical:'top'}}
            >
                <Alert
                  onClose={handleCloseSnackbar}
                  severity={successMessage.startsWith('Please') ? 'error': 'success'}
                  sx={{ width: '100%' }}
                >
                    {successMessage}
                </Alert>
            </Snackbar>
            
        </Box>
     );
}
 
export default MobileFooter;