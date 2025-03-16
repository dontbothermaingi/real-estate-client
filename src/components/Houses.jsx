import LocationOn from "@mui/icons-material/LocationOn";
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Houses ({filters,setHouseId}){

    const [houses, setHouses] = useState([])
    const [activeSelection, setActiveSelection] = useState("1")

    const isMobile = useMediaQuery('(max-width:1700px)')

    useEffect(()=>{
        fetch("http://localhost:3000/houses")
        .then(response => response.json())
        .then((data) => {
            setHouses(data)
        })
    },[])

    const filteredData = houses.filter((house) => 
        (!filters.propertyType || house.property_type === filters.propertyType) &&
        (!filters.startingPrice || house.price >= filters.startingPrice) &&
        (!filters.EndingPrice || house.price <= filters.EndingPrice) &&
        (!filters.rooms || house.rooms === filters.rooms) &&
        (!filters.location || house.address === filters.location)
    );

    function handleId(id){
        setHouseId(id)
        setActiveSelection(id)
    }

    return ( 

        <Box>
            {isMobile ? (
                <Box>
                <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>{filteredData.length} Listings.</Typography>
                <Box
                display={'grid'}
                gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(4, 1fr)'}}
                gap={'50px'}
                >
                    {filteredData.map((house,index) => (
                        <Box
                            key={index}
                            onClick={() => handleId(house.id)}
                            sx={{
                                backgroundImage: `url(${house.image})`, // Use `url()`
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image
                                width: "100%", // Adjust width as needed
                                height: "450px", // Adjust height as needed
                                borderRadius:'15px',
                                border: activeSelection === house.id ? "2px orange solid" : "",
                            }}
                            padding={'12px'}
                            display={'flex'}
                            justifyContent={'space-between'}
                            flexDirection={'column'}                        
                        >

                            <Box
                                sx={{
                                    width:'90px',
                                    height:'20px',
                                    borderRadius:'25px',
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    padding:'10px',
                                    backgroundColor:'white'
                                }}
                            >
                                <Typography color="black" textAlign={'center'} fontFamily={'GT Medium'} fontSize={'15px'}>{house.property_type}</Typography>
                            </Box>
                            <Card
                                sx={{
                                    borderRadius:'10px',
                                    width:'100%'
                                    
                                }}
                            >
                                <CardContent>
                                    <Typography fontFamily={"GT Medium"} fontSize={'18px'}>{house.address}</Typography>
                                    <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                        <IconButton>
                                            <LocationOn style={{color:'orange'}}/>
                                        </IconButton>
                                        <Typography fontFamily={"GT Light"} fontSize={'14px'}>{house.age}</Typography>
                                    </Box>
                                    <Divider orientation="horizontal" style={{marginBottom:'5px'}}/>
                                    <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}/<span style={{fontFamily:'GT Regular'}}>night</span></Typography>
                                </CardContent>
                            </Card>

                        </Box>
                    ))}
                </Box>
            </Box>
            ):(
                <Box>
                <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>{filteredData.length} Listings.</Typography>
                <Box
                display={'grid'}
                gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(4, 1fr)'}}
                gap={'50px'}
                >
                    {filteredData.map((house,index) => (
                        <Box
                            key={index}
                            onClick={() => handleId(house.id)}
                            sx={{
                                backgroundImage: `url(${house.image})`, // Use `url()`
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image
                                width: "100%", // Adjust width as needed
                                height: "450px", // Adjust height as needed
                                borderRadius:'15px',
                                border: activeSelection === house.id ? "2px orange solid" : "",
                            }}
                            padding={'12px'}
                            display={'flex'}
                            justifyContent={'space-between'}
                            flexDirection={'column'}                        
                        >

                            <Box
                                sx={{
                                    width:'90px',
                                    height:'20px',
                                    borderRadius:'25px',
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    padding:'10px',
                                    backgroundColor:'white'
                                }}
                            >
                                <Typography color="black" textAlign={'center'} fontFamily={'GT Medium'} fontSize={'15px'}>{house.property_type}</Typography>
                            </Box>
                            <Card
                                sx={{
                                    borderRadius:'10px',
                                    width:'100%'
                                    
                                }}
                            >
                                <CardContent>
                                    <Typography fontFamily={"GT Medium"} fontSize={'25px'}>{house.address}</Typography>
                                    <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                        <IconButton>
                                            <LocationOn style={{color:'orange'}}/>
                                        </IconButton>
                                        <Typography fontFamily={"GT Light"}>{house.age}</Typography>
                                    </Box>
                                    <Divider orientation="horizontal" style={{marginBottom:'5px'}}/>
                                    <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}/<span style={{fontFamily:'GT Regular'}}>night</span></Typography>
                                </CardContent>
                            </Card>

                        </Box>
                    ))}
                </Box>
            </Box>
            )}
            
        </Box>
     );
}
 
export default Houses;