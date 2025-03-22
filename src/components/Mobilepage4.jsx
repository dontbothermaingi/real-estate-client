import { Box, Typography, useMediaQuery } from "@mui/material";
import "./universal.css"


function MobilePage4 (){

    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1700px)')
    return ( 

        <Box>
            {isTablet ? (
                <Box sx={{backgroundColor:'#FFFFF0'}} height={'auto'}  paddingBottom={'100px'} >
                    <Box display={"flex"} flexDirection={'column'} gap={'10px'} className="landing"> 

                        <Box mt={'50px'}>
                            <Typography fontFamily={'GT Medium'} fontSize={"100px"} color="black" lineHeight={'0.2'}>ABOUT</Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} gap={'30px'} alignItems={'center'}>
                            <Box>
                                <Typography fontFamily={'GT Medium'} fontSize={"100px"} color="black">US</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={"17px"} mb={'58px'} color="black">Luxurious Interior and Industrial design.</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={"17px"} color="black">We make buying, selling, and investing in real estate seamless and stress-free. With expert guidance and market insight, we help you find the perfect property for your needs.</Typography>
                            </Box>

                            <Box>
                                <img 
                                src="/OP60.jpeg"
                                alt="picture"
                                style={{borderRadius:'50px', width:'370px', height:'auto'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>

                                <img 
                                    src="/OP59.jpeg"
                                    alt="picture"
                                    style={{borderRadius:'50px', width:'100%', height:'180px',marginBottom:'50px'}}
                                />

                                <Typography fontFamily={'GT Medium'} fontSize={"40px"} mb={'10px'} color="black">Our Philosophy</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={"17px"} color="black"> We believe real estate is more than just property—it’s about creating lasting value, building communities, and helping people find a place to call home. With integrity, transparency, and a client-first approach, we strive to make every transaction seamless and rewarding. Your vision is our mission.</Typography>
                            </Box>

                        </Box>

                    </Box>
                </Box>
            ):(
                <Box sx={{backgroundColor:'#FFFFF0'}} height={'auto'}  paddingBottom={'100px'} >
                    <Box display={"flex"} flexDirection={'column'} gap={'10px'} className="landing"> 

                        <Box>
                            <Typography fontFamily={'GT Medium'} fontSize={"30px"} color="black">03. ABOUT US</Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} gap={'30px'} alignItems={'center'}>
                            <Box>
                                <Typography fontFamily={'GT Light'} fontSize={"17px"} mb={'58px'} color="black">Luxurious Interior and Industrial design.</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={"17px"} color="black">We make buying, selling, and investing in real estate seamless and stress-free. With expert guidance and market insight, we help you find the perfect property for your needs.</Typography>
                            </Box>

                            <Box>
                                <img 
                                src="/OP60.jpeg"
                                alt="picture"
                                style={{borderRadius:'50px', width:'370px', height:'auto'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={'GT Medium'} fontSize={"40px"} mb={'10px'} color="black">Our Philosophy</Typography>
                                <Typography fontFamily={'GT Light'} fontSize={"17px"} color="black"> We believe real estate is more than just property—it’s about creating lasting value, building communities, and helping people find a place to call home. With integrity, transparency, and a client-first approach, we strive to make every transaction seamless and rewarding. Your vision is our mission.</Typography>

                            </Box>

                        </Box>

                    </Box>
                </Box>
            )}
            
        </Box>
     );
}
 
export default MobilePage4;