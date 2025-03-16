import LocationOn from "@mui/icons-material/LocationOn";
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function HousesMobile ({filters,setHouseId}){

    const [houses, setHouses] = useState([])
    const [activeSelection, setActiveSelection] = useState("1")
    const navigate = useNavigate()

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

    function handleHouseDetails(houseId){
        navigate(`/house-detail/${houseId}`)
        setActiveSelection(houseId)
    }

    return ( 
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
                            backgroundImage: `url(${house.image})`, // Use `url()`
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
                                <Typography fontFamily={"GT Medium"} fontSize={'22px'}>{house.address}</Typography>
                                <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                    <IconButton>
                                        <LocationOn style={{color:'orange'}} fontSize="18px"/>
                                    </IconButton>
                                    <Typography fontFamily={"GT Light"} fontSize={'15px'}>{house.age}</Typography>
                                </Box>
                                <Divider orientation="horizontal" style={{marginBottom:'10px'}}/>
                                <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}/<span style={{fontFamily:'GT Regular'}}>night</span></Typography>
                            </CardContent>
                        </Card>

                    </Box>
                ))}
            </Box>
        </Box>
     );
}
 
export default HousesMobile;