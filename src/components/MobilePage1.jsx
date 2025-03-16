import { Box, Divider, IconButton, Typography, useMediaQuery } from "@mui/material";
import './universal.css'

function MobilePage1 (){

    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1700px)');
    
    return ( 
        <Box>
            {isTablet ? (
                 <Box 
                    sx={{
                        backgroundColor:'gray',
                        height:'430px',
                        width:'100%'
                    }}
                 >
     
                     <Box className="landing">
     
                         <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'50px'} gap={'20px'}>
     
                             <Typography fontFamily={'GT Light'}  fontSize={'18px'}>Buy Property</Typography>
                             <Typography fontFamily={"GT Bold"} fontSize={'45px'}>Find property For the right price</Typography>
                             <Typography textAlign={'center'} fontFamily={'GT Light'} fontSize={'18px'} color="white">The little details often make a property truly stand out, yet valuations can vary significantly. Our real estate advisors understand the true worth of each property and will help you find the perfect home through tailored recommendations and exclusive access to our global property network.</Typography>
                         </Box>
                         
                     </Box>
     
                </Box>
            ):(
                 <Box 
                    sx={{
                        backgroundColor:'gray',
                        height:'430px',
                        width:'100%'
                    }}
                 >
     
                     <Box className="landing">
     
                         <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'50px'} gap={'20px'}>
     
                             <Typography fontFamily={'GT Light'}  fontSize={'16px'}>Buy Property</Typography>
                             <Typography fontFamily={"GT Bold"} fontSize={'20.2px'}>Find property For the right price</Typography>
                             <Typography textAlign={'center'} fontFamily={'GT Light'} fontSize={'14px'} color="white">The little details often make a property truly stand out, yet valuations can vary significantly. Our real estate advisors understand the true worth of each property and will help you find the perfect home through tailored recommendations and exclusive access to our global property network.</Typography>
                         </Box>
                         
                     </Box>
     
                 </Box>
            )}
           
        </Box>
     );
}
 
export default MobilePage1;