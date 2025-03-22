import { useEffect, useState } from "react";
import LocationOn from "@mui/icons-material/LocationOn";
import { Box, Button, Card, CardContent, Divider, IconButton, Typography,  } from "@mui/material";
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import { useNavigate } from "react-router";

function HouseChanges  () {

    const [houses, setHouses] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://127.0.0.1:9712/houses",{
            method:'GET',
            credentials:'include'
        })
        .then(response => response.json())
        .then((data) => {
            setHouses(data)
        })
    },[])

    function handleSubmit(event, houseId){

        event.preventDefault();

        fetch(`http://127.0.0.1:9712/house/${houseId}`,{
            method:"DELETE",
            credentials: 'include',
        })
        .then(response => {
            if(!response.ok){
                return response.text().then(text => {
                    throw new Error(`Network response was not ok: ${text}`);
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log('Deleted Successfully!')

            fetch("http://127.0.0.1:9712/houses",{
                method:'GET',
                credentials:'include'
            })
            .then(response => response.json())
            .then((data) => {
                setHouses(data)
            })
        })
        .catch((error) => {
            console.error('Error with stock update operations:', error);
        })
    }

    function handleEdit(houseId){
        navigate(`/edit-house/${houseId}`)
    }

    return ( 
        <Box>
            <Box>
                <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                    <PropertyDisplayNavbar />
                </Box>

                <Box padding={'40px'}>
                    <Typography fontFamily={"GT Medium"} color="black" paddingBottom={"20px"} fontSize={"30px"}>{houses.length} Listings.</Typography>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(4, 1fr)', sm:'repeat(4, 1fr)'}}
                        gap={'50px'}    
                    >
                        {houses.map((house,index) => (
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'30px'}>
                                <Box
                                    key={index}
                                    // onClick={() => handleId(house.id)}
                                    sx={{
                                        backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`,
                                        backgroundSize: "cover", // Ensure the image covers the box
                                        backgroundPosition: "center", // Center the image
                                        width: "100%", // Adjust width as needed
                                        height: "450px", // Adjust height as needed
                                        borderRadius:'15px',
                                        // border: activeSelection === house.id ? "2px orange solid" : "",
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
                                            <Typography fontFamily={"GT Medium"} fontSize={'25px'}>{house.location}</Typography>
                                            <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                                <IconButton>
                                                    <LocationOn style={{color:'orange'}}/>
                                                </IconButton>
                                                <Typography fontFamily={"GT Light"}>{house.address}</Typography>
                                            </Box>
                                            <Divider orientation="horizontal" style={{marginBottom:'5px'}}/>
                                            {house.purpose === 'Buy' ? (
                                                <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}</Typography>
                                            ):(
                                                <Typography fontFamily={"GT Bold"}>{new Intl.NumberFormat('en-AE',{currency:"AED", style:'currency'}).format(house.price)}/<span style={{fontFamily:'GT Regular'}}>month</span></Typography>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Box>

                                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                                    <Button onClick={() => handleEdit(house.id)} variant="contained" sx={{backgroundColor:'orange'}}><Typography fontFamily={"GT Bold"}>EDIT</Typography></Button>
                                    <Button onClick={(event) => handleSubmit(event, house.id)} variant="contained" sx={{backgroundColor:'red'}}><Typography fontFamily={"GT Bold"}>DELETE</Typography></Button>
                                </Box>

                            </Box>
                        ))}
                    </Box>
                    </Box>

            </Box>
        </Box>
     );
}
 
export default HouseChanges;