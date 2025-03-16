import { Box, Button, Typography } from "@mui/material";
import './universal.css'
import { useNavigate } from "react-router";


function Landingpage (){

    const navigate = useNavigate()

    function handleProperties(){
        navigate('/properties')
    }
    
    return ( 
        <Box>
            <Box className={'landing'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2px'}>
                <Box className={'landing'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography fontFamily={'GT Bold'} fontSize={'90px'} color="black" lineHeight={'0.5'}>Your Essential Source</Typography>
                    <Typography fontFamily={'GT Bold'} fontSize={'90px'} color="black">for Property Search</Typography>
                    <Typography fontFamily={"GT Regular"} fontSize={'20px'} color="black" width={'60%'} textAlign={'center'}>
                        Buy your dream home sell your property at the best value, find a comfortable space to rent buy your dream home, sell your property with the best price
                    </Typography>
                </Box>

                <Box className={'landing'} display={'flex'} alignItems={'center'} gap={'30px'}>
                    <Button onClick={handleProperties} variant="contained" sx={{backgroundColor:'orange', ":hover":{backgroundColor:'white', color:'orange'}}}><Typography fontFamily={'GT Bold'} style={{padding:'5px'}}>Find a house</Typography></Button>
                    <Button variant="contained" sx={{backgroundColor:'orange', ":hover":{backgroundColor:'white', color:'orange'} }}><Typography fontFamily={'GT Bold'} style={{padding:'5px'}}>Learn More</Typography></Button>
                </Box>
            </Box>
            
            <Box display={'grid'} className={'landing'}gap={'20px'}gridTemplateColumns={{xs:"repeat(1 , 1fr)", sm:"repeat(1 , 1fr)", md:"repeat( 3, 1fr)"}}>
                <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                    <img 
                        src="OP10.jpeg"
                        alt="house"
                        style={{borderRadius:'15px', width:'450px', height:'auto'}}
                    />
                </Box>
                <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                    <img 
                    src="OP11.jpeg"
                    alt="house"
                    style={{borderRadius:'15px', width:'450px', height:'auto'}}
                    />
                </Box>
                <Box sx={{transition:"transform 0.3s ease-in-out", ":hover":{transform:"scale(1.03)"}}}>
                    <img 
                    src="OP12.jpeg"
                    alt="house"
                    style={{borderRadius:'15px', width:'450px', height:'auto'}}
                    />
                </Box>
            </Box>
        </Box>
     );
}
 
export default Landingpage;