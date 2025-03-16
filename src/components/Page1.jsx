import { Box, Divider, IconButton, Typography } from "@mui/material";
import './universal.css'

function Page1 (){
    return ( 
        <Box 
           sx={{
            backgroundColor:'gray',
            height:'500px',
            width:'100%'
           }}
        >

            <Box className="landing">

                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'110px'}>

                    <Typography fontFamily={'GT Light'}  fontSize={'18px'}>Buy Property</Typography>
                    <Typography fontFamily={"GT Bold"} fontSize={'60px'}>Find property For the right price</Typography>
                    <Typography textAlign={'center'} fontFamily={'GT Light'} fontSize={'18px'} color="white">The little details often make a property truly stand out, yet valuations can vary significantly. Our real estate advisors understand the true worth of each property and will help you find the perfect home through tailored recommendations and exclusive access to our global property network.</Typography>
                </Box>
                
            </Box>

        </Box>
     );
}
 
export default Page1;