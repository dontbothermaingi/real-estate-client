import { Business } from "@mui/icons-material";
import Apartment from "@mui/icons-material/Apartment";
import House from "@mui/icons-material/House";
import Villa from "@mui/icons-material/Villa";
import { Box, Button, IconButton, MenuItem, Select, TextField, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";

function Filters ({setFilters}){

    const [startingPrice, setStartingPrice] = useState("")
    const [endingPrice, setEndingPrice] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [rooms, setRooms] = useState("")
    const [location ,setLocation] = useState("")
    const isMobile = useMediaQuery('(max-width:1700px)')

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

    console.log(location);
    console.log(startingPrice);
    console.log(endingPrice);
    console.log(propertyType);
    console.log(rooms);

    return ( 

        <Box>
            {isMobile ? (
                <Box sx={{backgroundColor:"#F4F5FC"}}>

                <Box display={'flex'} flexDirection={'column'} gap={'30px'} sx={{backgroundColor:'white', padding:'30px', borderRadius:'15px'}}>

                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontFamily={'GT Medium'} fontSize={'30px'} color="black">Filters</Typography>
                        <Typography onClick={handleReset} fontFamily={'GT Light'} fontSize={'16px'} color="black" sx={{cursor:'pointer'}}>Reset</Typography>
                    </Box>

                    <Box>
                        <Box>
                            <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Propert Type</Typography>
                        </Box>
                        <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(4, 1fr)', sm:'repeat(4, 1fr)'}} gap={'10px'}>
                            <Box onClick={() => handlePropertyType('House')} sx={{backgroundColor: propertyType === 'House' ? 'orange' : 'white', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <House style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>House</Typography>
                            </Box>
                            <Box onClick={() => handlePropertyType('Apartment')} sx={{backgroundColor:propertyType === 'Apartment' ? 'orange' : 'white', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <Apartment style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>Apartment</Typography>
                            </Box>
                            <Box onClick={() => handlePropertyType('Villa')} sx={{backgroundColor: propertyType === 'Villa' ? 'orange' : 'white',boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <Villa style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>Villa</Typography>
                            </Box>
                            <Box onClick={() => handlePropertyType('Commercial')} sx={{backgroundColor: propertyType === 'Commercial' ? 'orange' : 'white',boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <Business style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>Commercial</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(4, 1fr)', sm:'repeat(4, 1fr)'}} gap={'40px'} alignItems={'center'}
                        
                    >
                        <Box>
                            <Box>
                                <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Location</Typography>
                            </Box>

                            <Box>
                                <Select
                                    value={location}
                                    name="location"
                                    type="text"
                                    onChange={(e) => handleLocation(e.target.value)}
                                    sx={{width:'250px', fontFamily:'GT Light'}}
                                    inputProps={{
                                        color:"black",
                                    }}
                                >
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Expo City">Expo City</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Jumeirah Village Circle">Jumeirah Village Circle</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Meidan">Meidan</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Business Bay">Business Bay</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Sobha Hartland">Sobha Hartland</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="DownTown Dubai">DownTown Dubai</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Dubai Creek Harbour">Dubai Creek Harbour</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Palm Jumeirah">Palm Jumeirah</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Dubai Marina">Dubai Marina</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Palm Jumeirah">Palm Jumeirah</MenuItem>
                                    <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="EMAAR Beachfront">EMAAR Beachfront</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Price Range</Typography>
                            </Box>

                            <Box display={'flex'} width={'250px'} gap={'20px'}>
                                <TextField 
                                    value={startingPrice}
                                    name="startingPrice"
                                    onChange={(e) => handleStartingPrice(e.target.value)}
                                    type="number"
                                    variant="outlined"
                                />
                                <TextField 
                                    value={endingPrice}
                                    name="endingPrice"
                                    onChange={(e) => handleEndingPrice(e.target.value)}
                                    type="number"
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Rooms</Typography>
                            </Box>
                            <Box display={'flex'} gap={'3px'}>
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
                        <Box paddingTop={'30px'}>
                            <Button onClick={handleApply} variant="contained" sx={{backgroundColor:'orange', color:'white',width:"250px", ":hover":{backgroundColor:'white', color:'orange'}}}><Typography fontFamily={'GT Bold'}>Apply</Typography></Button>
                        </Box>
                    </Box>
                    
                    
                </Box>
            </Box>
            ):(
                <Box sx={{backgroundColor:"#F4F5FC"}}>

                <Box display={'flex'} flexDirection={'column'} gap={'30px'}>

                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontFamily={'GT Medium'} fontSize={'30px'} color="black">Filters</Typography>
                        <Typography onClick={handleReset} fontFamily={'GT Light'} fontSize={'16px'} color="black" sx={{cursor:'pointer'}}>Reset</Typography>
                    </Box>

                    <Box>
                        <Box>
                            <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Propert Type</Typography>
                        </Box>
                        <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(2, 1fr)'}} gap={'10px'}>
                            <Box onClick={() => handlePropertyType('House')} sx={{backgroundColor: propertyType === 'House' ? 'orange' : 'white', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <House style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>House</Typography>
                            </Box>
                            <Box onClick={() => handlePropertyType('Apartment')} sx={{backgroundColor:propertyType === 'Apartment' ? 'orange' : 'white', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <Apartment style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>Apartment</Typography>
                            </Box>
                            <Box onClick={() => handlePropertyType('Villa')} sx={{backgroundColor: propertyType === 'Villa' ? 'orange' : 'white',boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <Villa style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>Villa</Typography>
                            </Box>
                            <Box onClick={() => handlePropertyType('Commercial')} sx={{backgroundColor: propertyType === 'Commercial' ? 'orange' : 'white',boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)", ":hover":{backgroundColor:'orange'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'10px'} width={'100px'}>
                                <IconButton>
                                    <Business style={{color:'black'}}/>
                                </IconButton>
                                <Typography fontFamily={'GT Regular'} color="black" fontSize={'14px'}>Commercial</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Location</Typography>
                        </Box>

                        <Box>
                            <Select
                                value={location}
                                name="location"
                                type="text"
                                onChange={(e) => handleLocation(e.target.value)}
                                sx={{width:'250px', fontFamily:'GT Light'}}
                                inputProps={{
                                    color:"black",
                                }}
                            >
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Expo City">Expo City</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Jumeirah Village Circle">Jumeirah Village Circle</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Meidan">Meidan</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Business Bay">Business Bay</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Sobha Hartland">Sobha Hartland</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="DownTown Dubai">DownTown Dubai</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Dubai Creek Harbour">Dubai Creek Harbour</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Palm Jumeirah">Palm Jumeirah</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Dubai Marina">Dubai Marina</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="Palm Jumeirah">Palm Jumeirah</MenuItem>
                                <MenuItem sx={{fontFamily:"GT Light"}} color="black" value="EMAAR Beachfront">EMAAR Beachfront</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Price Range</Typography>
                        </Box>

                        <Box display={'flex'} width={'250px'} gap={'20px'}>
                            <TextField 
                                value={startingPrice}
                                name="startingPrice"
                                onChange={(e) => handleStartingPrice(e.target.value)}
                                type="number"
                                variant="outlined"
                            />
                            <TextField 
                                value={endingPrice}
                                name="endingPrice"
                                onChange={(e) => handleEndingPrice(e.target.value)}
                                type="number"
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography fontFamily={'GT Medium'} fontSize={'22px'} color="black" mb={'10px'}>Rooms</Typography>
                        </Box>
                        <Box display={'flex'} gap={'3px'}>
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
                        <Button onClick={handleApply} variant="contained" sx={{backgroundColor:'orange', color:'white',width:"250px", ":hover":{backgroundColor:'white', color:'orange'}}}><Typography fontFamily={'GT Bold'}>Apply</Typography></Button>
                    </Box>
                </Box>
            </Box>
            )}
            
        </Box>
     );
}
 
export default Filters;