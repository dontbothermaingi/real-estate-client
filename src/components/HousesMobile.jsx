import LocationOn from "@mui/icons-material/LocationOn";
import { Box, Card, CardContent, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function HousesMobile ({filters,pupose}){

    const [houses, setHouses] = useState([])
    const [activeSelection, setActiveSelection] = useState("1")
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("https://house-server-zocq.onrender.com/houses")
        .then(response => response.json())
        .then((data) => {
            setHouses(data)
        })
    },[])

    const buyHouse = houses.filter((house) => house.purpose === "Buy")
    const rentHouse = houses.filter((house) => house.purpose === "Rent")

    let filteredData;
    
    if( pupose === "Buy"){
         filteredData = buyHouse.filter((house) => 
            (!filters.propertyType || house.property_type === filters.propertyType) &&
            (!filters.startingPrice || house.price >= filters.startingPrice) &&
            (!filters.endingPrice || house.price <= filters.endingPrice) &&
            (!filters.beds || house.beds >= filters.beds) &&
            (!filters.location || house.location === filters.location)
        );
    }else{
        filteredData = rentHouse.filter((house) => 
            (!filters.propertyType || house.property_type === filters.propertyType) &&
            (!filters.startingPrice || house.price >= filters.startingPrice) &&
            (!filters.EndingPrice || house.price <= filters.endingPrice) &&
            (!filters.rooms || house.beds >= filters.rooms) &&
            (!filters.location || house.location === filters.location)
        );
    }

    function handleHouseDetails(houseId,aim){
        navigate(`/house-detail/${houseId}/${aim}`)
        setActiveSelection(houseId)
    }

    return ( 

        <Box>
            {pupose === 'Buy' ? (
                <Box>
                    <Typography color="black" fontFamily={"GT Medium"} mb={'10px'} fontSize={'20px'}>{filteredData.length} Listings</Typography>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(4, 1fr)'}}
                        gap={'50px'}
                    >                        
                        {filteredData.map((house,index) => (
                            <Box
                                key={index}
                                onClick={() => handleHouseDetails(house.id,"Buy")}
                                sx={{
                                    backgroundImage: `url(https://house-server-zocq.onrender.com/images/${house.photos[0].photo})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "450px", // Adjust height as needed
                                    borderRadius:'15px',
                                    border: activeSelection === house.id ? "2px orange solid" : "",
                                }}
                                padding={'10px'}
                                display={'flex'}
                                justifyContent={'space-between'}
                                flexDirection={'column'}                        
                            >

                                <Box
                                    sx={{
                                        width:'80px',
                                        height:'10px',
                                        borderRadius:'25px',
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        padding:'10px',
                                        backgroundColor:'white'
                                    }}
                                >
                                    <Typography color="black" textAlign={'center'} fontFamily={'GT Medium'} fontSize={'12px'}>{house.property_type}</Typography>
                                </Box>
                                <Card
                                    sx={{
                                        borderRadius:'10px',
                                        width:'100%',
                                    }}
                                >
                                    <CardContent>
                                        <Typography fontFamily={"GT Medium"} fontSize={'22px'}>{house.location}</Typography>
                                        <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                            <IconButton>
                                                <LocationOn style={{color:'orange'}} fontSize="18px"/>
                                            </IconButton>
                                            <Typography fontFamily={"GT Light"} fontSize={'14px'}>{house.address}</Typography>
                                        </Box>
                                        <Divider orientation="horizontal" style={{marginBottom:'10px'}}/>
                                        <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}</Typography>
                                    </CardContent>
                                </Card>

                            </Box>
                        ))}
                    </Box>
                </Box>
            ):(
                <Box>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(4, 1fr)'}}
                        gap={'50px'}
                    >
                        {filteredData.map((house,index) => (
                            <Box
                                key={index}
                                onClick={() => handleHouseDetails(house.id)}
                                sx={{
                                    backgroundImage: `url(https://house-server-zocq.onrender.com/images/${house.photos[0].photo})`, // Use `url()`
                                    backgroundSize: "cover", // Ensure the image covers the box
                                    backgroundPosition: "center", // Center the image
                                    width: "100%", // Adjust width as needed
                                    height: "450px", // Adjust height as needed
                                    borderRadius:'15px',
                                    border: activeSelection === house.id ? "2px orange solid" : "",
                                }}
                                padding={'10px'}
                                display={'flex'}
                                justifyContent={'space-between'}
                                flexDirection={'column'}                        
                            >

                                <Box
                                    sx={{
                                        width:'80px',
                                        height:'10px',
                                        borderRadius:'25px',
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        padding:'10px',
                                        backgroundColor:'white'
                                    }}
                                >
                                    <Typography color="black" textAlign={'center'} fontFamily={'GT Medium'} fontSize={'12px'}>{house.property_type}</Typography>
                                </Box>
                                <Card
                                    sx={{
                                        borderRadius:'10px',
                                        width:'100%',
                                    }}
                                >
                                    <CardContent>
                                        <Typography fontFamily={"GT Medium"} fontSize={'22px'}>{house.location}</Typography>
                                        <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                            <IconButton>
                                                <LocationOn style={{color:'orange'}} fontSize="18px"/>
                                            </IconButton>
                                            <Typography fontFamily={"GT Light"} fontSize={'15px'}>{house.address}</Typography>
                                        </Box>
                                        <Divider orientation="horizontal" style={{marginBottom:'10px'}}/>
                                        <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}/<span style={{fontFamily:'GT Regular'}}>month</span></Typography>
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
 
export default HousesMobile;