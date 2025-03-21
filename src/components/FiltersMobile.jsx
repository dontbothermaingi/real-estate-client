import { Business } from "@mui/icons-material";
import Apartment from "@mui/icons-material/Apartment";
import House from "@mui/icons-material/House";
import Villa from "@mui/icons-material/Villa";
import { Box, Button, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

function FiltersMobile ({setFilters}){

    const [startingPrice, setStartingPrice] = useState("")
    const [endingPrice, setEndingPrice] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [rooms, setRooms] = useState("")
    const [location ,setLocation] = useState("")

    function handleApply() {
        setFilters({
            location,
            startingPrice,
            endingPrice,
            propertyType,
            rooms,
        });
    }
    
    function handleReset(){
        setLocation("")
        setStartingPrice("")
        setEndingPrice("")
        setPropertyType("")
        setRooms("")
        
        // Ensure `setFilters` is updated after state changes
        setFilters({
            location: "",
            startingPrice: "",
            endingPrice: "",
            propertyType: "",
            rooms: "",
        });
    }

    function handleLocation(selectedLocation){
        setLocation(selectedLocation)
    }

    function handleStartingPrice(price){
        setStartingPrice(price)
    }

    function handleEndingPrice(price){
        setEndingPrice(price)
    }

    function handlePropertyType(type){
        setPropertyType(type)
    }

    function handleRooms(rooms){
        setRooms(rooms)
    }

    return ( 
        <Box sx={{backgroundColor:"#F4F5FC"}}>

            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>

                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontFamily={'GT Medium'} fontSize={'20px'} color="black">Filters</Typography>
                    <Typography onClick={handleReset} fontFamily={'GT Light'} fontSize={'13px'} color="black" sx={{cursor:'pointer'}}>Reset</Typography>
                </Box>

                <Box>
                    <Box>
                        <Typography fontFamily={'GT Medium'} fontSize={'18px'} color="black" mb={'10px'}>Propert Type</Typography>
                    </Box>
                    <Box display={'grid'} gridTemplateColumns={{xs:'repeat(4, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(2, 1fr)'}} gap={'10px'}>
                        <Box onClick={() => handlePropertyType('House')} sx={{backgroundColor: propertyType === 'House' ? 'orange' : 'white', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'3px'} width={'70px'} height={'70px'}>
                            <IconButton>
                                <House style={{color:'black', fontSize:'20px'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black" fontSize={'12px'}>House</Typography>
                        </Box>
                        <Box onClick={() => handlePropertyType('Apartment')} sx={{backgroundColor:propertyType === 'Apartment' ? 'orange' : 'white', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'}  padding={'3px'} width={'70px'} height={'70px'}>
                            <IconButton>
                                <Apartment style={{color:'black', fontSize:'20px'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black" fontSize={'12px'}>Apartment</Typography>
                        </Box>
                        <Box onClick={() => handlePropertyType('Villa')} sx={{backgroundColor: propertyType === 'Villa' ? 'orange' : 'white',boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'3px'} width={'70px'} height={'70px'}>
                            <IconButton>
                                <Villa style={{color:'black', fontSize:'20px'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black" fontSize={'12px'}>Villa</Typography>
                        </Box>
                        <Box onClick={() => handlePropertyType('Commercial')} sx={{backgroundColor: propertyType === 'Commercial' ? 'orange' : 'white',boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'3px'} width={'75px'} height={'70px'}>
                            <IconButton>
                                <Business style={{color:'black', fontSize:'20px'}}/>
                            </IconButton>
                            <Typography fontFamily={'GT Regular'} color="black" fontSize={'12px'}>Commercial</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Typography fontFamily={'GT Medium'} fontSize={'18px'} color="black" mb={'10px'}>Location</Typography>
                    </Box>

                    <Box>
                        <Select
                            value={location}
                            name="location"
                            type="text"
                            onChange={(e) => handleLocation(e.target.value)}
                            sx={{width:'100%', fontFamily:'GT Light', fontSize:'13px', height:'40px'}}
                            inputProps={{
                                color:"black",
                                
                            }}
                        >
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Expo City">Expo City</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Jumeirah Village Circle">Jumeirah Village Circle</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Meidan">Meidan</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Business Bay">Business Bay</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Sobha Hartland">Sobha Hartland</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="DownTown Dubai">DownTown Dubai</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Dubai Creek Harbour">Dubai Creek Harbour</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Palm Jumeirah">Palm Jumeirah</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Dubai Marina">Dubai Marina</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="Palm Jumeirah">Palm Jumeirah</MenuItem>
                            <MenuItem sx={{fontFamily:"GT Light", fontSize:'13px'}} color="black" value="EMAAR Beachfront">EMAAR Beachfront</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography fontFamily={'GT Medium'} fontSize={'18px'} color="black" mb={'10px'}>Price Range</Typography>
                    </Box>

                    <Box display={'flex'} width={'100%'} gap={'20px'}>
                        <TextField 
                             value={startingPrice}
                             name="startingPrice"
                             onChange={(e) => handleStartingPrice(e.target.value)}
                             type="number"
                             variant="outlined"
                            //  sx={{width:'350px', fontFamily:'GT Light', fontSize:'13px', height:'40px'}}
                             inputProps={{
                                style:{
                                    fontSize:'13px',
                                    fontFamily:'GT Light',
                                    height:'10px'
                                }
                             }}

                        />
                        <TextField 
                             value={endingPrice}
                             name="endingPrice"
                             onChange={(e) => handleEndingPrice(e.target.value)}
                             type="number"
                             variant="outlined"
                             inputProps={{
                                style:{
                                    fontSize:'13px',
                                    fontFamily:'GT Light',
                                    height:'10px'
                                }
                             }}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography fontFamily={'GT Medium'} fontSize={'18px'} color="black" mb={'10px'}>Rooms</Typography>
                    </Box>
                    <Box display={'grid'} gridTemplateColumns={{xs:'repeat(4, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(2, 1fr)'}} gap={'10px'}>
                        <Box onClick={() => handleRooms("1")} sx={{backgroundColor: rooms === "1" ? 'orange' : 'white', color: rooms === '1' ? 'white' : 'black', width:"50px", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}}>
                            <Typography textAlign={'center'} fontSize={'18px'} fontFamily={"GT Bold"} padding={'15px'} color="black" sx={{":hover":{color:'white'}}}>1</Typography>
                        </Box>
                        <Box onClick={() => handleRooms("2")} sx={{backgroundColor: rooms === "2" ? 'orange' : 'white', color: rooms === '1' ? 'white' : 'black', width:"50px", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}}>
                            <Typography textAlign={'center'} fontSize={'18px'} fontFamily={"GT Bold"} padding={'15px'} color="black" sx={{":hover":{color:'white'}}}>2</Typography>
                        </Box>
                        <Box onClick={() => handleRooms("3")} sx={{backgroundColor: rooms === "3" ? 'orange' : 'white', color: rooms === '1' ? 'white' : 'black', width:"50px", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}}>
                            <Typography textAlign={'center'} fontSize={'18px'} fontFamily={"GT Bold"} padding={'15px'} color="black" sx={{":hover":{color:'white'}}}>3</Typography>
                        </Box>
                        <Box onClick={() => handleRooms("4")} sx={{backgroundColor: rooms === "4" ? 'orange' : 'white', color: rooms === '1' ? 'white' : 'black', width:"50px", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}}>
                            <Typography textAlign={'center'} fontSize={'18px'} fontFamily={"GT Bold"} padding={'15px'} color="black" sx={{":hover":{color:'white'}}}>4+</Typography>
                        </Box>
                    </Box>
                </Box>
                
                <Box>
                    <Button onClick={handleApply} variant="contained" sx={{backgroundColor:'orange', color:'white',width:"100%", ":hover":{backgroundColor:'white', color:'orange'}}}><Typography fontFamily={'GT Bold'}>Apply</Typography></Button>
                </Box>
            </Box>
        </Box>
     );
}
 
export default FiltersMobile;