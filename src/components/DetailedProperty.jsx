import LocationOn from "@mui/icons-material/LocationOn";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./universal.css"
import Bed from "@mui/icons-material/Bed";
import Shower from "@mui/icons-material/Shower";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import CheckCircle from "@mui/icons-material/CheckCircle";

function DetailedProperty ({houseId, aim}){
    const [house, setHouse] = useState(null)

    useEffect(()=>{
        fetch(` http://localhost:3000/houses/${houseId}`)
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
      
    return ( 

        <Box>

            {aim === "Buy" ? (
                <Box paddingBottom={'50px'}>
                <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>Property Details.</Typography>

                <Box>
                    <Box display={'flex'} gap={'20px'}>
                        <Box
                            sx={{
                                backgroundImage: `url(${house.image})`, // Use `url()`
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image
                                width: "100%", // Adjust width as needed
                                height: "500px", // Adjust height as needed
                                borderRadius:'15px',
                            }}
                        >
                            
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} gap={'30px'} width={'100%'}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${house.image})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "230px", // Adjust height as needed
                                    borderRadius:'15px',
                                }}
                            >
                                
                            </Box>
                            <Box
                                sx={{
                                    backgroundImage: `url(${house.image})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "230px", // Adjust height as needed
                                    borderRadius:'15px',
                                }}
                            >
                                
                            </Box>
                        </Box>
                    </Box>
                    

                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'} mt={'30px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                            <Typography fontFamily={'GT Medium'} fontSize={'40px'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}</Typography>
                        </Box>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>

                    <Box mt={'30px'}>
                        <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.address}</Typography>
                        <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                            <IconButton>
                                <LocationOn sx={{color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Light'} fontSize={'20px'} color="black">{house.age}</Typography>
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
                                <Typography fontFamily={'GT Regular'} color="black">2</Typography>
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
                                <Typography fontFamily={'GT Regular'} color="black">4</Typography>
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
                                <Typography fontFamily={'GT Regular'} color="black">416 sq ft</Typography>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                            <Box>
                                <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                                <IconButton>
                                    <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black">2019</Typography>
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
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>Completed</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Purpose</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>For Sale</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property ID</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>PES-0603253</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Furnishing</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>Fully Furnished</Typography>
                            </Box>


                        </Box>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>

                    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Description</Typography>
                        <Typography fontFamily={'GT Light'} color="black">Immerse yourself in the unparalleled luxury and equestrian elegance of Al Habtoor Polo Resort & Club, ideally located in the heart of Dubailand. This exquisite 3-bedroom villa seamlessly blends contemporary design, comfort, and sophistication. With sweeping views of the pristine polo fields and a 5-star hotel at its center, this villa offers a rare opportunity to live in Dubai’s premier equestrian community.</Typography>
                        <Typography fontFamily={'GT Light'} color="black">Sophisticated Design: Featuring an open-plan living area, three elegantly designed bedrooms, and premium finishes throughout, this villa exudes comfort and style. Its layout is thoughtfully crafted for both relaxed living and effortless entertaining.</Typography>
                        <Typography fontFamily={'GT Light'} color="black">Prime Location & Polo Field Views: Revel in breathtaking panoramic views of the polo fields right from the comfort of your home. Expansive windows flood the villa with natural light, offering serene vistas of lush greenery and live polo action at your doorstep.</Typography>
                        <Typography fontFamily={'GT Light'} color="black"></Typography>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>

                    <Box>
                        <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Amenities</Typography>
                        <Box
                            display={'grid'}
                            gridTemplateColumns={{xs:'repeat(3, 1fr)'}}
                            mt={'10px'}
                            gap={'30px'}
                        >
                            {amenities.map((amenity,index) => (
                                <Box key={index} display={'flex'} alignItems={'center'} gap={'7px'}>
                                    <CheckCircle style={{color:'black'}}/>
                                    <Typography color="black" fontFamily={"GT Light"}>{amenity}</Typography>
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
                                backgroundImage: `url(${house.image})`, // Use `url()`
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image
                                width: "100%", // Adjust width as needed
                                height: "500px", // Adjust height as needed
                                borderRadius:'15px',
                            }}
                        >
                            
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} gap={'30px'} width={'100%'}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${house.image})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "230px", // Adjust height as needed
                                    borderRadius:'15px',
                                }}
                            >
                                
                            </Box>
                            <Box
                                sx={{
                                    backgroundImage: `url(${house.image})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "230px", // Adjust height as needed
                                    borderRadius:'15px',
                                }}
                            >
                                
                            </Box>
                        </Box>
                    </Box>
                    

                    <Box mt={'30px'}>
                        <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">{house.address}</Typography>
                        <Box display={'flex'} alignItems={'center'} gap={'0px'} ml={'-13px'}>
                            <IconButton>
                                <LocationOn sx={{color:'black'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Light'} fontSize={'20px'} color="black">{house.age}</Typography>
                        </Box>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>

                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'} mt={'30px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                            <Typography fontFamily={'GT Light'} color="black">1 Day Rental:</Typography>
                            <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                            <Typography fontFamily={'GT Light'} color="black">Week Rental:</Typography>
                            <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                            <Typography fontFamily={'GT Light'} color="black">Month Rental:</Typography>
                            <Typography fontFamily={'GT Medium'} color="black">{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
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
                                <Typography fontFamily={'GT Regular'} color="black">2</Typography>
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
                                <Typography fontFamily={'GT Regular'} color="black">4</Typography>
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
                                <Typography fontFamily={'GT Regular'} color="black">416 sq ft</Typography>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'4px'}>
                            <Box>
                                <Typography fontFamily={'GT Regular'} color="black">Year Built</Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={'3px'} border={"1px solid #ddd"} borderRadius={'8px'} padding={'5px'} width={'120px'} height={'25px'} justifyContent={'center'}>
                                <IconButton>
                                    <CalendarMonth style={{fontSize:'20px', color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black">2019</Typography>
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
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>Completed</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Purpose</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>For Sale</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Property ID</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>PES-0603253</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'10px'} mt={'10px'} border="1px solid #ddd" padding="10px">
                                <Typography fontFamily={"GT Medium"} color="black" fontSize={'18px'}>Furnishing</Typography>
                                <Typography fontFamily={"GT Light"} color="black" fontSize={'18px'}>Fully Furnished</Typography>
                            </Box>


                        </Box>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>

                    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Description</Typography>
                        <Typography fontFamily={'GT Light'} color="black">Immerse yourself in the unparalleled luxury and equestrian elegance of Al Habtoor Polo Resort & Club, ideally located in the heart of Dubailand. This exquisite 3-bedroom villa seamlessly blends contemporary design, comfort, and sophistication. With sweeping views of the pristine polo fields and a 5-star hotel at its center, this villa offers a rare opportunity to live in Dubai’s premier equestrian community.</Typography>
                        <Typography fontFamily={'GT Light'} color="black">Sophisticated Design: Featuring an open-plan living area, three elegantly designed bedrooms, and premium finishes throughout, this villa exudes comfort and style. Its layout is thoughtfully crafted for both relaxed living and effortless entertaining.</Typography>
                        <Typography fontFamily={'GT Light'} color="black">Prime Location & Polo Field Views: Revel in breathtaking panoramic views of the polo fields right from the comfort of your home. Expansive windows flood the villa with natural light, offering serene vistas of lush greenery and live polo action at your doorstep.</Typography>
                        <Typography fontFamily={'GT Light'} color="black"></Typography>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"gray", marginTop:'20px'}}/>

                    <Box>
                        <Typography fontFamily={'GT Bold'} color="black" fontSize={'25px'} mt={'14px'}>Amenities</Typography>
                        <Box
                            display={'grid'}
                            gridTemplateColumns={{xs:'repeat(3, 1fr)'}}
                            mt={'10px'}
                            gap={'30px'}
                        >
                            {amenities.map((amenity,index) => (
                                <Box key={index} display={'flex'} alignItems={'center'} gap={'7px'}>
                                    <CheckCircle style={{color:'black'}}/>
                                    <Typography color="black" fontFamily={"GT Light"}>{amenity}</Typography>
                                </Box>
                            ))}

                        </Box>
                    </Box>
                </Box>
            </Box>
            )}
            
        </Box>
     );
}
 
export default DetailedProperty;