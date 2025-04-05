import LocationOn from "@mui/icons-material/LocationOn";
import { Alert, Box, Button, Divider, IconButton, InputAdornment, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./universal.css"
import { useNavigate, useParams } from "react-router";
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import { AccountCircle, ArrowBack, Bed, CalendarMonth, CheckCircle, EmailOutlined, Person, Shower, ZoomOutMap } from "@mui/icons-material";
import Phone from "@mui/icons-material/Phone";
import ImageGallery from "./ImageGallery";

function DetailedPropertyMobile (){
    const [house, setHouse] = useState(null)
    const {houseId,aim} = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev);
      };
    

    useEffect(()=>{
        fetch(`https://house-db.onrender.com/house/${houseId}`)
        .then(response => response.json())
        .then((data) => {
            setHouse(data)
        })
    },[houseId])

    if (!house) {
        return <Typography>Loading...</Typography>; // ✅ Handles initial null state
    }

    const amenities = [
        "Balcony",
        "BBQ/Barbecue Area",
        "Central A/C & Heating",
        "Built-in Wardrobes",
        "Walk-In Closet",
        "Children's Play Area",
        "Covered Parking",
        "Maid's Room",
        "Private Garden"
      ];

      function handleProperties(aim){
        navigate(`/properties/${aim}`)
    }

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
            <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                <PropertyDisplayNavbar />
            </Box>

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

            {aim === 'Buy' ? (
                <Box>
                    <Box>
                        <Box
                            sx={{
                                backgroundImage: `url(https://house-db.onrender.com/images/${house.photos[0].photo})`, // Use `url()`
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image
                                width: "100%", // Adjust width as needed
                                height: "500px", // Adjust height as needed
                                paddingTop:'10px',
                                position:'relative'
                            }}
                        >

                        <Button onClick={handleChange} variant="contained" sx={{backgroundColor:'white', color:'black', borderRadius:'15px', position:'absolute', bottom:20, right:20}}><Typography fontSize={'14px'} fontFamily={"GT Bold"}>{checked ? "Hide": "Show all images"}</Typography></Button>

                        <Box 
                            onClick={() => handleProperties('Buy')}
                            sx={{
                                backgroundColor:'white',
                                borderRadius:'13px',
                                width:"90px",
                                cursor:'pointer',
                                ml:'10px'
                            }}
                        >
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <IconButton>
                                    <ArrowBack style={{color:'black', fontSize:"14px"}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Bold'} color="black" fontSize={'14px'}>Back</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>

                <Box>
                    {checked && <ImageGallery images={house?.photos || []} /> }
                </Box>
                
                <Box display={'flex'} flexDirection={'column'} padding={'20px'}>
                    <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)'}} gap={'10px'} mt={'10px'} >
                        <Box>
                            <Typography fontSize={'30px'} fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}</Typography>
                        </Box>
                    </Box>

                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px'}}/>

                <Box mt={'15px'} padding={'20px'}>
                    <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.location}</Typography>
                    <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                        <IconButton>
                            <LocationOn sx={{color:'black'}}/>
                        </IconButton>
                        <Typography fontFamily={'GT Light'} fontSize={'16px'} color="black">{house.address}</Typography>
                    </Box>
                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)'}} gap={'10px'} mt={'10px'} padding={'20px'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Bedroom</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <Bed style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">{house.beds}</Typography>
                        </Box>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Bathroom</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <Shower style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">{house.bathrooms}</Typography>
                        </Box>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
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

                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'130px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">{house.year_built}</Typography>
                        </Box>
                    </Box>

                    
                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Box padding={'20px'}>
                    <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'}>Key Information</Typography>
                    <Box 
                        display={'grid'} 
                        gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} 
                        mt={'10px'} 
                        gap={'10px'}
                    >
                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Property Type</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>{house.property_type}</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Completion</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>{house.completion}</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Purpose</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>{house.purpose}</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Property ID</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>{house.propertyId}</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Furnishing</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>{house.furnishing}</Typography>
                        </Box>


                    </Box>
                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'} paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'20px'}>Description</Typography>
                {house.descriptions.map((description, index) => (
                    <Box display={'flex'} flexDirection={'column'} gap={'20px'} padding={'20px'}>
                        <Typography fontFamily={'GT Light'} color="black" key={index}>{description.description}</Typography>
                    </Box>
                ))}

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Box padding={'20px'}>
                    <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'}>Amenities</Typography>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{xs:'repeat(1, 1fr)'}}
                        mt={'10px'}
                        gap={'20px'}
                    >
                        {house.amenities.map((amenity,index) => (
                            <Box display={'flex'} alignItems={'center'} gap={'7px'}>
                                 <CheckCircle style={{color:'black'}}/>
                                 <Typography color="black" fontFamily={"GT Light"} key={index}>{amenity.amenity}</Typography>
                            </Box>
                        ))}

                    </Box>
                </Box>

                <Box padding={'10px'} >
                    <Typography fontFamily={"GT Medium"} color="black" padding={'10px'} fontSize={'24px'}>Interested? Fill in the form.</Typography>
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
                <Box>
                    <Box>
                        <Box
                            sx={{
                                backgroundImage: `url(https://house-db.onrender.com/images/${house.photos[0].photo})`, // Use `url()`
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image
                                width: "100%", // Adjust width as needed
                                height: "500px", // Adjust height as needed
                                paddingTop:'10px',
                                position:'relative'
                            }}
                        >
                                    <Button onClick={handleChange} variant="contained" sx={{backgroundColor:'white', color:'black', borderRadius:'15px', position:'absolute', bottom:20, right:20}}><Typography fontSize={'14px'} fontFamily={"GT Bold"}>{checked ? "Hide": "Show all images"}</Typography></Button>

                            <Box 
                                onClick={() => handleProperties('Buy')}
                                sx={{
                                    backgroundColor:'white',
                                    borderRadius:'13px',
                                    width:"90px",
                                    cursor:'pointer',
                                    ml:'10px'
                                }}
                            >
                                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <IconButton>
                                        <ArrowBack style={{color:'black', fontSize:"14px"}}/>
                                    </IconButton>
                                    <Typography fontFamily={'GT Bold'} color="black" fontSize={'14px'}>Back</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box>
                        {checked && <ImageGallery images={house?.photos || []} /> }
                    </Box>

                <Box display={'flex'} flexDirection={'column'} padding={'20px'}>
                    <Typography fontSize={'30px'} fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'25px'}}>year</span></Typography>
                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px'}}/>

                <Box mt={'30px'} padding={'20px'}>
                    <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.location}</Typography>
                    <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                        <IconButton>
                            <LocationOn sx={{color:'black'}}/>
                        </IconButton>
                        <Typography fontFamily={'GT Light'} fontSize={'16px'} color="black">{house.address}</Typography>
                    </Box>
                </Box>


                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)'}} gap={'10px'} mt={'10px'} padding={'20px'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Bedroom</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <Bed style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">2</Typography>
                        </Box>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Bathroom</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <Shower style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">4</Typography>
                        </Box>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Unit</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'130px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <ZoomOutMap style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">416 sq ft</Typography>
                        </Box>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                        <Box>
                            <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'140px'} height={'25px'} justifyContent={'center'}>
                            <IconButton>
                                <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black">2019</Typography>
                        </Box>
                    </Box>

                    
                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Box padding={'20px'}>
                    <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'}>Key Information</Typography>
                    <Box 
                        display={'grid'} 
                        gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(3, 1fr)'}} 
                        mt={'10px'} 
                        gap={'10px'}
                        // display="grid"
                        // gridTemplateColumns={{ xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
                        // gap="10px"
                        // mt="10px"
                    >
                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Property Type</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>{house.property_type}</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Completion</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>Completed</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Purpose</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>For Sale</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Property ID</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>PES-0603253</Typography>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                            <Typography fontFamily={"GT Medium"} color="black" fontSize={'16px'}>Furnishing</Typography>
                            <Typography fontFamily={"GT Light"} color="black" fontSize={'16px'}>Fully Furnished</Typography>
                        </Box>


                    </Box>
                </Box>

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'} paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'20px'}>Description</Typography>
                {house.descriptions.map((description, index) => (
                    <Box display={'flex'} flexDirection={'column'} gap={'20px'} padding={'20px'}>
                        <Typography fontFamily={'GT Light'} color="black" key={index}>{description.description}</Typography>
                    </Box>
                ))}

                <Divider orientation="horizontal" style={{borderColor:"gray", marginLeft:'10px', marginRight:'10px', marginTop:'10px'}}/>

                <Box padding={'20px'}>
                    <Typography fontFamily={'GT Bold'} color="black" fontSize={'22px'} mt={'14px'}>Amenities</Typography>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{xs:'repeat(1, 1fr)'}}
                        mt={'10px'}
                        gap={'20px'}
                    >
                        {amenities.map((amenity,index) => (
                            <Box key={index} display={'flex'} alignItems={'center'} gap={'7px'}>
                                 <CheckCircle style={{color:'black'}}/>
                                 <Typography color="black" fontFamily={"GT Light"}>{amenity}</Typography>
                            </Box>
                        ))}

                    </Box>
                </Box>

                <Box padding={'10px'} >
                    <Typography fontFamily={"GT Medium"} color="black" padding={'10px'} fontSize={'24px'}>Interested? Fill in the form.</Typography>
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
            )}
            
        </Box>
     );
}
 
export default DetailedPropertyMobile;