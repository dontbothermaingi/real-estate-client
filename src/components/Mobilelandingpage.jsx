import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import './universal.css'
import { useNavigate } from "react-router";


function MobileLandingpage (){

    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1700px)');

    const navigate = useNavigate();

    function handleProperties(aim){
        navigate(`/properties/${aim}`)
    }

    return ( 
        <Box>
            {isTablet ? (
                 <Box height={'770px'}>

                    <Box className={'landing'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'90px'} >
                        <Box  display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography fontFamily={'GT Bold'} fontSize={'70px'} color="black" lineHeight={'0.5'}>Your Essential Source</Typography>
                            <Typography fontFamily={'GT Bold'} fontSize={'70px'} color="black">for Property Search</Typography>
                            <Typography fontFamily={"GT Regular"} fontSize={'20px'} color="black" width={'80%'} textAlign={'center'} mt={'20px'}>
                                Buy your dream home sell your property at the best value, find a comfortable space to rent buy your dream home, sell your property with the best price
                            </Typography>
                        </Box>
    
                        <Box display={'flex'} alignItems={'center'} gap={'30px'} mt={'30px'}>
                            <Button onClick={handleProperties} variant="contained" sx={{backgroundColor:'orange', ":hover":{backgroundColor:'white', color:'orange'}}}><Typography fontFamily={'GT Bold'} style={{padding:'5px'}}>Find a house</Typography></Button>
                            <Button variant="contained" sx={{backgroundColor:'orange', ":hover":{backgroundColor:'white', color:'orange'} }}><Typography fontFamily={'GT Bold'} style={{padding:'5px'}}>Learn More</Typography></Button>
                        </Box>
    
                        <Box display={'grid'} gap={'20px'} gridTemplateColumns={{xs:"repeat(2 , 1fr)", sm:"repeat(2 , 1fr)", md:"repeat( 2, 1fr)"}} mt={'50px'}>
                            <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                                <img 
                                    src="OP10.jpeg"
                                    alt="house"
                                    style={{borderRadius:'15px', width:'415px', height:'auto'}}
                                />
                            </Box>
                            <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                                <img 
                                src="OP11.jpeg"
                                alt="house"
                                style={{borderRadius:'15px', width:'415px', height:'auto'}}
                                />
                            </Box>
                            {/* <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                                <img 
                                src="OP12.jpeg"
                                alt="house"
                                style={{borderRadius:'15px', width:'415px', height:'auto'}}
                                />
                            </Box> */}
                        </Box>
                    </Box>
             
                </Box>
            ):(
                 <Box height={'600px'}>

                    <Box className={'landing'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'40px'} >
                        <Box  display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black" lineHeight={'0.5'}>Your Essential Source</Typography>
                            <Typography fontFamily={'GT Bold'} fontSize={'30px'} color="black">for Property Search</Typography>
                            <Typography fontFamily={"GT Regular"} fontSize={'15px'} color="black" width={'100%'} textAlign={'center'} mt={'20px'}>
                                Buy your dream home sell your property at the best value, find a comfortable space to rent buy your dream home, sell your property with the best price
                            </Typography>
                        </Box>
    
                        <Box display={'flex'} alignItems={'center'} gap={'30px'} mt={'30px'}>
                            <Button onClick={() => handleProperties("Buy")} variant="contained" sx={{backgroundColor:'orange', ":hover":{backgroundColor:'white', color:'orange'}}}><Typography fontFamily={'GT Bold'} style={{padding:'5px', fontSize:'12px'}}>Find a house</Typography></Button>
                            <Button variant="contained" sx={{backgroundColor:'orange', ":hover":{backgroundColor:'white', color:'orange'} }}><Typography fontFamily={'GT Bold'} style={{padding:'5px', fontSize:'12px'}}>Learn More</Typography></Button>
                        </Box>
    
                        <Box display={'grid'} gap={'20px'} gridTemplateColumns={{xs:"repeat(1 , 1fr)", sm:"repeat(1 , 1fr)", md:"repeat( 1, 1fr)"}} mt={'50px'}>
                            <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                                <img 
                                    src="OP10.jpeg"
                                    alt="house"
                                    style={{borderRadius:'15px', width:'370px', height:'auto'}}
                                />
                            </Box>
                            {/* <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                                <img 
                                src="OP11.jpeg"
                                alt="house"
                                style={{borderRadius:'15px', width:'370px', height:'auto'}}
                                />
                            </Box> */}
                            {/* <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                                <img 
                                src="OP12.jpeg"
                                alt="house"
                                style={{borderRadius:'15px', width:'415px', height:'auto'}}
                                />
                            </Box> */}
                        </Box>
                    </Box>
             
                </Box>
            )}
           
        </Box>
     );
}
 
export default MobileLandingpage;