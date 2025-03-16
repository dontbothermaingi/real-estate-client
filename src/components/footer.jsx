import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import LocationCity from "@mui/icons-material/LocationCity";
import { Alert, Box, Divider, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { motion } from "motion/react"
import './universal.css'
import ArrowRight from "@mui/icons-material/ArrowRight";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import { useState } from "react";


function Footer (){

    const [successMessage, setSuccessMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [formData, setFormData] = useState({
        email:"",
    })

    const quicklinks = (name, onClickHandler) => (
        <motion.div whileHover={{ x:20 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200 }}>
            <Typography fontFamily={'GT Light'} fontSize={'18px'} style={{cursor:'pointer'}} onClick={onClickHandler}>{name}</Typography>
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

        <Box sx={{backgroundColor:'#242424'}} padding={'20px'}>
            <Box className="footer">

                <Box mb={'30px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Typography fontFamily={'GT Medium'} fontSize={'60px'} lineHeight={'0.9'}>Join our newsletter</Typography>
                        <Typography fontFamily={'GT Light'} fontSize={'20px'}>Sign up and we'll keep you int the loop</Typography>
                    </Box>

                    <Box>
                        <form style={{display:'flex', alignItems:'center', gap:'30px'}} onSubmit={handleSubmit}>
                            <TextField
                                type="text"
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                                variant="standard"
                                placeholder="Your email address"
                                InputProps={{
                                    disableUnderline: true, // Removes the underline
                                    style: { fontSize: 25, color:'white', fontFamily:'GT Regular' }, // Adjust text size if needed
                                    
                                }}
                                style={{
                                    backgroundColor: "transparent", // No background
                                    width: "100%", // Adjust width as needed
                                    color:'white',
                                    fontFamily:'GT Regular'
                                }}
                            />

                            <IconButton type="submit" style={{backgroundColor:'white'}}>
                                <ChevronRightOutlined style={{color:'black', fontSize:'30px'}}/>
                            </IconButton>
                        </form>

                        <Divider style={{backgroundColor:'white', marginTop:'20px'}} orientation="horizontal"/>
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mb={'25px'}>
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

                <Box display={'flex'} justifyContent={'center'}>
                    <Typography fontFamily={'GT Light'} fontSize={'18px'} style={{cursor:'pointer'}} textAlign={'center'}>Copyright © 2025 House. All Rights Reserved.</Typography>
                </Box>
            </Box>

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
 
export default Footer;