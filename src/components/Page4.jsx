import { Box, Typography } from "@mui/material";
import "./universal.css"


function Page4 (){
    return ( 
        <Box sx={{backgroundColor:'#FFFFF0'}} height={'auto'} width={'100%'} paddingBottom={'120px'}>
            <Box display={"flex"} flexDirection={'column'} gap={'30px'} className="page3"> 

                <Box>
                    <Typography fontFamily={'GT Medium'} fontSize={"160px"} color="black">ABOUT</Typography>
                </Box>

                <Box display={'flex'} justifyContent={'space-between'} gap={'100px'} width={'100%'}>
                    <Box>
                        <Typography fontFamily={'GT Medium'} fontSize={"160px"} color="black" lineHeight={'1'}>US</Typography>
                        <Typography fontFamily={'GT Light'} fontSize={"20px"} mb={'58px'} mt={'70px'} color="black">Luxurious Interior and Industrial design.</Typography>
                        <Typography fontFamily={'GT Light'} fontSize={"20px"} color="black">We make buying, selling, and investing in real estate seamless and stress-free. With expert guidance and market insight, we help you find the perfect property for your needs.</Typography>
                    </Box>

                    <Box>
                        <img 
                           src="/OP60.jpeg"
                           alt="picture"
                           style={{borderRadius:'50px', width:'600px', height:'500px'}}
                        />
                    </Box>

                    <Box display={'flex'} flexDirection={'column'}>
                        <img 
                           src="/OP59.jpeg"
                           alt="picture"
                           style={{borderRadius:'50px', width:'450px', height:'200px'}}
                        />

                        <Typography fontFamily={'GT Medium'} fontSize={"40px"} mb={'70px'} mt={'20px'} color="black">Our Philosophy</Typography>
                        <Typography fontFamily={'GT Light'} fontSize={"20px"} color="black"> We believe real estate is more than just property—it’s about creating lasting value, building communities, and helping people find a place to call home. With integrity, transparency, and a client-first approach, we strive to make every transaction seamless and rewarding. Your vision is our mission.</Typography>

                    </Box>

                </Box>

            </Box>
        </Box>
     );
}
 
export default Page4;