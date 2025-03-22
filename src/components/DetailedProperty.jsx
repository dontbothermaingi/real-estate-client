import LocationOn from "@mui/icons-material/LocationOn";
import { Alert, Box, Button, Divider, FormControlLabel, Grow, IconButton, InputAdornment, Snackbar, Switch, TextField, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import "./universal.css"
import Bed from "@mui/icons-material/Bed";
import Shower from "@mui/icons-material/Shower";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { AccountCircle, EmailOutlined, Person, Phone } from "@mui/icons-material";
import ImageGallery from "./ImageGallery";

function DetailedProperty ({houseId, aim, pupose}){
    const [house, setHouse] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const isMobile = useMediaQuery("(max-width:1700px)")
    const [checked, setChecked] = useState(false)

    useEffect(()=>{
        fetch(` http://127.0.0.1:9712/house/${houseId}`)
        .then(response => response.json())
        .then((data) => {
            setHouse(data)
        })
    },[houseId])

    if (!house) {
        return <Typography>Loading...</Typography>; // ✅ Handles initial null state
    }

    const handleChange = () => {
        setChecked((prev) => !prev);
      };
    

    function handleCloseSnackBar(event, reason){
        if(reason === 'clickaway') return;
        setOpenSnackBar(false)
    }

    function handleSubmit(e){
        e.preventDefault()

        if(!name || !email || !phoneNumber || !message){
            setOpenSnackBar(true)
            setSuccessMessage("Please fill in all the fieds!")
        }else{
            setOpenSnackBar(true)
            setSuccessMessage("Request was successfull")   
            setName("")
            setEmail("")
            setPhoneNumber("")
            setMessage("")
        }
    }
      
    return ( 

        <Box>

            <Snackbar
                onClose={handleCloseSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{horizontal:'center', vertical:'bottom'}}
                open={openSnackBar}
            >
                <Alert onClose={handleCloseSnackBar} severity={successMessage.startsWith("Please") ? "error":"success"}>
                    {successMessage}
                </Alert>
            </Snackbar>

            {isMobile ? (
                <Box>
                {pupose === "Buy" ? (
                    <Box paddingBottom={'50px'}>
                    <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>Property Details.</Typography>
    
                    <Box>
                        <Box display={'flex'} gap={'20px'}>
                            <Box
                                sx={{
                                    backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "500px", // Adjust height as needed
                                    borderRadius:'15px',
                                    position:'relative'
                                }}
                            >
                                <Button onClick={handleChange} variant="contained" sx={{backgroundColor:'white', color:'black', borderRadius:'15px', position:'absolute', bottom:20, right:20}}><Typography fontSize={'14px'} fontFamily={"GT Bold"}>{checked ? "Hide": "Show all images"}</Typography></Button>
                            </Box>
    
                        </Box>
                        
                        
                        <Box>
                            {checked && <ImageGallery images={house?.photos || []} /> }
                        </Box>

    
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'} mt={'30px'}>
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Typography fontFamily={'GT Medium'} fontSize={'40px'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}</Typography>
                            </Box>
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box mt={'30px'}>
                            <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.location}</Typography>
                            <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                                <IconButton>
                                    <LocationOn sx={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Light'} fontSize={'20px'} color="black">{house.address}</Typography>
                            </Box>
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'25px'} marginTop={'15px'}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Bedroom</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <Bed style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.beds}</Typography>
                                </Box>
                            </Box>
    
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Bathroom</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <Shower style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.bathrooms}</Typography>
                                </Box>
                            </Box>
    
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Unit</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <ZoomOutMap style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.square_feet}</Typography>
                                </Box>
                            </Box>
    
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'180px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.year_built}</Typography>
                                </Box>
                            </Box>
    
                            
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box>
                            <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Key Information</Typography>
                            <Box 
                                display={'grid'} 
                                gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} 
                                mt={'10px'} 
                                gap={'10px'}
                                // display="grid"
                                // gridTemplateColumns={{ xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
                                // gap="10px"
                                // mt="10px"
                            >
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property Type</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.property_type}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Completion</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.completion}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Purpose</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.purpose}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property ID</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.propertyId}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Furnishing</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.furnishing}</Typography>
                                </Box>
    
    
                            </Box>
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'} paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'20px'}>Description</Typography>
                        {house.descriptions.map((description, index) => (
                            <Box display={'flex'} flexDirection={'column'} gap={'20px'} padding={'20px'}>
                                <Typography fontFamily={'GT Light'} color="black" key={index}>{description.description}</Typography>
                            </Box>
                        ))}
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box>
                            <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Amenities</Typography>
                            <Box
                                display={'grid'}
                                gridTemplateColumns={{xs:'repeat(3, 1fr)'}}
                                mt={'10px'}
                                gap={'30px'}
                            >
                                {house.amenities.map((amenity,index) => (
                                    <Box display={'flex'} alignItems={'center'} gap={'7px'}>
                                        <CheckCircle style={{color:'black'}}/>
                                        <Typography color="black" fontFamily={"GT Light"} key={index}>{amenity.amenity}</Typography>
                                    </Box>
                                ))}
    
                            </Box>
                        </Box>
                    </Box>
    
                
                </Box>
                ):(
                    <Box paddingBottom={'50px'}>
                    <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>Property Details.</Typography>
    
                    <Box>
                        <Box display={'flex'} gap={'20px'}>
                            <Box
                                sx={{
                                    backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "500px", // Adjust height as needed
                                    borderRadius:'15px',
                                    position:'relative'

                                }}
                            >
                                <Button onClick={handleChange} variant="contained" sx={{backgroundColor:'white', color:'black', borderRadius:'15px', position:'absolute', bottom:20, right:20}}><Typography fontSize={'14px'} fontFamily={"GT Bold"}>{checked ? "Hide": "Show all images"}</Typography></Button>
                                
                            </Box>
    
                        </Box>
                        
                        <Box>
                            {checked && <ImageGallery images={house?.photos || []} /> }
                        </Box>
    
                        <Box mt={'30px'}>
                            <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.location}</Typography>
                            <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                                <IconButton>
                                    <LocationOn sx={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Light'} fontSize={'20px'} color="black">{house.address}</Typography>
                            </Box>
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'} mt={'30px'}>
                            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                <Typography fontFamily={'GT Light'} color="black">Monthly Rental:</Typography>
                                <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>month</span></Typography>
                            </Box>
                            
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'25px'} marginTop={'15px'}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Bedroom</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <Bed style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.beds}</Typography>
                                </Box>
                            </Box>
    
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Bathroom</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <Shower style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.bathrooms}</Typography>
                                </Box>
                            </Box>
    
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Unit</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <ZoomOutMap style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.square_feet}</Typography>
                                </Box>
                            </Box>
    
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                <Box>
                                    <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'180px'} height={'25px'} justifyContent={'center'}>
                                    <IconButton>
                                        <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Regular'} color="black">{house.year_built}</Typography>
                                </Box>
                            </Box>
    
                            
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box>
                            <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Key Information</Typography>
                            <Box 
                                display={'grid'} 
                                gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} 
                                mt={'10px'} 
                                gap={'10px'}
                            >
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property Type</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.property_type}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Completion</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.completion}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Purpose</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.purpose}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property ID</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.propertyId}</Typography>
                                </Box>
    
                                <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                    <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Furnishing</Typography>
                                    <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.furnishing}</Typography>
                                </Box>
    
    
                            </Box>
                        </Box>
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'} paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'20px'}>Description</Typography>
                        {house.descriptions.map((description, index) => (
                            <Box display={'flex'} flexDirection={'column'} gap={'20px'} padding={'20px'}>
                                <Typography fontFamily={'GT Light'} color="black" key={index}>{description.description}</Typography>
                            </Box>
                        ))}
    
                        <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
    
                        <Box>
                            <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Amenities</Typography>
                            <Box
                                display={'grid'}
                                gridTemplateColumns={{xs:'repeat(3, 1fr)'}}
                                mt={'10px'}
                                gap={'30px'}
                            >
                                {house.amenities.map((amenity,index) => (
                                    <Box display={'flex'} alignItems={'center'} gap={'7px'}>
                                        <CheckCircle style={{color:'black'}}/>
                                        <Typography color="black" fontFamily={"GT Light"} key={index}>{amenity.amenity}</Typography>
                                    </Box>
                                ))}
    
                            </Box>
                        </Box>
                    </Box>
                </Box>
                )}
            </Box>
            ):(
                <Box>
                    {aim === "Buy" ? (
                        <Box paddingBottom={'50px'}>
                        <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>Property Details.</Typography>
        
                        <Box>
                            <Box display={'flex'} gap={'20px'}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`, // Use `url()`
                                        backgroundSize: "cover", // Ensure the image covers the box
                                        backgroundPosition: "center", // Center the image
                                        width: "100%", // Adjust width as needed
                                        height: "500px", // Adjust height as needed
                                        borderRadius:'15px',
                                        position:'relative'

                                    }}
                                >
                                    <Button onClick={handleChange} variant="contained" sx={{backgroundColor:'white', color:'black', borderRadius:'15px', position:'absolute', bottom:20, right:20}}><Typography fontSize={'14px'} fontFamily={"GT Bold"}>{checked ? "Hide": "Show all images"}</Typography></Button>
                                    
                                </Box>
        
                            </Box>

                            <Box>
                                {checked && <ImageGallery images={house?.photos || []} /> }
                            </Box>
                            
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'} mt={'30px'}>
                                <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                    <Typography fontFamily={'GT Medium'} fontSize={'40px'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}</Typography>
                                </Box>
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box mt={'30px'}>
                                <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.location}</Typography>
                                <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                                    <IconButton>
                                        <LocationOn sx={{color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Light'} fontSize={'20px'} color="black">{house.address}</Typography>
                                </Box>
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'25px'} marginTop={'15px'}>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Bedroom</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <Bed style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.beds}</Typography>
                                    </Box>
                                </Box>
        
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Bathroom</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <Shower style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.bathrooms}</Typography>
                                    </Box>
                                </Box>
        
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Unit</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <ZoomOutMap style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.square_feet}</Typography>
                                    </Box>
                                </Box>
        
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'180px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.year_built}</Typography>
                                    </Box>
                                </Box>
        
                                
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box>
                                <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Key Information</Typography>
                                <Box 
                                    display={'grid'} 
                                    gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} 
                                    mt={'10px'} 
                                    gap={'10px'}
                                    
                                >
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property Type</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.property_type}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Completion</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.completion}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Purpose</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.purpose}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property ID</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.propertyId}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Furnishing</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.furnishing}</Typography>
                                    </Box>
        
        
                                </Box>
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'} paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'20px'}>Description</Typography>
                            {house.descriptions.map((description, index) => (
                                <Box display={'flex'} flexDirection={'column'} gap={'20px'} padding={'20px'}>
                                    <Typography fontFamily={'GT Light'} color="black" key={index}>{description.description}</Typography>
                                </Box>
                            ))}
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box>
                                <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Amenities</Typography>
                                <Box
                                    display={'grid'}
                                    gridTemplateColumns={{xs:'repeat(3, 1fr)'}}
                                    mt={'10px'}
                                    gap={'30px'}
                                >
                                    {house.amenities.map((amenity,index) => (
                                        <Box display={'flex'} alignItems={'center'} gap={'7px'}>
                                            <CheckCircle style={{color:'black'}}/>
                                            <Typography color="black" fontFamily={"GT Light"} key={index}>{amenity.amenity}</Typography>
                                        </Box>
                                    ))}
        
                                </Box>
                            </Box>
                        </Box>
        
                        <Box padding={'10px'} >
                            <Typography fontFamily={"GT Medium"} color="black" marginTop={'30px'} fontSize={'30px'}>Interested? Fill in the form.</Typography>
                            <Box sx={{border:'2px #ddd solid', padding:'10px'}} display={'flex'} flexDirection={'column'}>
                                {/* Consultant Image */}
                                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} marginTop={'20px'} marginBottom={'20px'}>
                                    <Box>
                                        <IconButton>
                                            <Person style={{color:'black', fontSize:'50px'}}/>
                                        </IconButton>
                                    </Box>
        
                                    <Box>
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'14px'}>James Carter</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'14px'}>Consultant - secondary sales.</Typography>
                                    </Box>
                                    
                                </Box>
        
                                {/* Form */}
                                <Box>
        
                                    <form style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit}>
                                        <TextField
                                            name="name"
                                            value={name}
                                            type="text"
                                            onChange={(e) => setName(e.target.value)}
                                            sx={{mb:'20px'}}
                                            style={{fontFamily:'GT Medium'}}
                                            label='Name'
                                            variant="outlined"
                                            slotProps={{
                                                input: {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                    <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                                },
                                            }}
                                        />
        
                                        <TextField
                                            name="email"
                                            value={email}
                                            type="text"
                                            onChange={(e) => setEmail(e.target.value)}
                                            sx={{mb:'20px'}}
                                            label='Email'
                                            variant="outlined"
                                            slotProps={{
                                                input: {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                    <EmailOutlined />
                                                    </InputAdornment>
                                                ),
                                                },
                                            }}
                                        />
        
                                        <TextField
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            type="text"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            sx={{mb:'20px'}}
                                            label='Phone Number'
                                            variant="outlined"
                                            helperText="* Include country code."
                                            slotProps={{
                                                input: {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                    <Phone />
                                                    </InputAdornment>
                                                ),
                                                },
                                            }}
                                        />
        
                                        <TextField
                                            name="message"
                                            value={message}
                                            type="text"
                                            onChange={(e) => setMessage(e.target.value)}
                                            sx={{mb:'20px'}}
                                            label='Message'
                                            variant="outlined"
                                            multiline
                                            minRows={4}
                                            maxRows={30}
                                            fullWidth
                                            
                                        />
        
                                        <Button type="submit" variant="contained" sx={{backgroundColor:'orange'}}><Typography fontFamily={"GT Bold"}>Request Information</Typography></Button>
                                    </form>
                                </Box>
        
                            </Box>
                        </Box>
                    </Box>
                    ):(
                        <Box paddingBottom={'50px'}>
                        <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>Property Details.</Typography>
        
                        <Box>
                            <Box display={'flex'} gap={'20px'}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`, // Use `url()`
                                        backgroundSize: "cover", // Ensure the image covers the box
                                        backgroundPosition: "center", // Center the image
                                        width: "100%", // Adjust width as needed
                                        height: "500px", // Adjust height as needed
                                        borderRadius:'15px',
                                        position:'relative'
                                    }}
                                >
                                    <Button onClick={handleChange} variant="contained" sx={{backgroundColor:'white', color:'black', borderRadius:'15px', position:'absolute', bottom:20, right:20}}><Typography fontSize={'14px'} fontFamily={"GT Bold"}>{checked ? "Hide": "Show all images"}</Typography></Button>
                                    
                                </Box>

                            </Box>


                            <Box>
                                {checked && <ImageGallery images={house?.photos || []} /> }
                            </Box>
                            
        
                            <Box mt={'30px'}>
                                <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.location}</Typography>
                                <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                                    <IconButton>
                                        <LocationOn sx={{color:'black'}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Light'} fontSize={'20px'} color="black">{house.address}</Typography>
                                </Box>
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'} mt={'30px'}>
                                <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                    <Typography fontFamily={'GT Light'} color="black">1 Day Rental:</Typography>
                                    <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
                                </Box>
                                {/* <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                    <Typography fontFamily={'GT Light'} color="black">Week Rental:</Typography>
                                    <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                                    <Typography fontFamily={'GT Light'} color="black">Month Rental:</Typography>
                                    <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
                                </Box> */}
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'25px'} marginTop={'15px'}>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Bedroom</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <Bed style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.beds}</Typography>
                                    </Box>
                                </Box>
        
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Bathroom</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'80px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <Shower style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.bathrooms}</Typography>
                                    </Box>
                                </Box>
        
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Unit</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <ZoomOutMap style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.square_feet}</Typography>
                                    </Box>
                                </Box>
        
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                                    <Box>
                                        <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'180px'} height={'25px'} justifyContent={'center'}>
                                        <IconButton>
                                            <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                                        </IconButton>
                                        <Typography fontFamily={'GT Regular'} color="black">{house.year_built}</Typography>
                                    </Box>
                                </Box>
        
                                
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box>
                                <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Key Information</Typography>
                                <Box 
                                    display={'grid'} 
                                    gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} 
                                    mt={'10px'} 
                                    gap={'10px'}
                                >
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property Type</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.property_type}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Completion</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.completion}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Purpose</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.purpose}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property ID</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.propertyId}</Typography>
                                    </Box>
        
                                    <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                        <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Furnishing</Typography>
                                        <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>{house.furnishing}</Typography>
                                    </Box>
        
        
                                </Box>
                            </Box>
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'} paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'20px'}>Description</Typography>
                            {house.descriptions.map((description, index) => (
                                <Box display={'flex'} flexDirection={'column'} gap={'20px'} padding={'20px'}>
                                    <Typography fontFamily={'GT Light'} color="black" key={index}>{description.description}</Typography>
                                </Box>
                            ))}
        
                            <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>
        
                            <Box>
                                <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Amenities</Typography>
                                <Box
                                    display={'grid'}
                                    gridTemplateColumns={{xs:'repeat(3, 1fr)'}}
                                    mt={'10px'}
                                    gap={'30px'}
                                >
                                    {house.amenities.map((amenity,index) => (
                                        <Box display={'flex'} alignItems={'center'} gap={'7px'}>
                                            <CheckCircle style={{color:'black'}}/>
                                            <Typography color="black" fontFamily={"GT Light"} key={index}>{amenity.amenity}</Typography>
                                        </Box>
                                    ))}
        
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    )}
                </Box>
            )}
            

                <Box padding={'10px'} >
                    <Typography fontFamily={"GT Medium"} color="black" marginTop={'30px'} fontSize={'30px'}>Interested? Fill in the form.</Typography>
                    <Box sx={{border:'2px #ddd solid', padding:'10px'}} display={'flex'} flexDirection={'column'}>
                        {/* Consultant Image */}
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} marginTop={'20px'} marginBottom={'20px'}>
                            <Box>
                                <IconButton>
                                    <Person style={{color:'black', fontSize:'50px'}}/>
                                </IconButton>
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'14px'}>James Carter</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'14px'}>Consultant - secondary sales.</Typography>
                            </Box>
                            
                        </Box>

                        {/* Form */}
                        <Box>

                            <form style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit}>
                                <TextField
                                    name="name"
                                    value={name}
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{mb:'20px'}}
                                    style={{fontFamily:'GT Medium'}}
                                    label='Name'
                                    variant="outlined"
                                    slotProps={{
                                        input: {
                                          startAdornment: (
                                            <InputAdornment position="start">
                                              <AccountCircle />
                                            </InputAdornment>
                                          ),
                                        },
                                    }}
                                />

                                <TextField
                                    name="email"
                                    value={email}
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{mb:'20px'}}
                                    label='Email'
                                    variant="outlined"
                                    slotProps={{
                                        input: {
                                          startAdornment: (
                                            <InputAdornment position="start">
                                              <EmailOutlined />
                                            </InputAdornment>
                                          ),
                                        },
                                    }}
                                />

                                <TextField
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    type="text"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    sx={{mb:'20px'}}
                                    label='Phone Number'
                                    variant="outlined"
                                    helperText="* Include country code."
                                    slotProps={{
                                        input: {
                                          startAdornment: (
                                            <InputAdornment position="start">
                                              <Phone />
                                            </InputAdornment>
                                          ),
                                        },
                                    }}
                                />

                                <TextField
                                    name="message"
                                    value={message}
                                    type="text"
                                    onChange={(e) => setMessage(e.target.value)}
                                    sx={{mb:'20px'}}
                                    label='Message'
                                    variant="outlined"
                                    multiline
                                    minRows={4}
                                    maxRows={30}
                                    fullWidth
                                    
                                />

                                <Button type="submit" variant="contained" sx={{backgroundColor:'orange'}}><Typography fontFamily={"GT Bold"}>Request Information</Typography></Button>
                            </form>
                        </Box>

                    </Box>
                </Box>
            
        </Box>
     );
}
 
export default DetailedProperty;