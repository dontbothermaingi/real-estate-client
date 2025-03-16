import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import NavBar from "./navbar";
import './universal.css'
import Landingpage from "./landingpage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Footer from "./footer";
import Page3 from "./Page3";
import Page4 from "./Page4";
import MobileLandingpage from "./Mobilelandingpage";
import MobilePage1 from "./MobilePage1";
import MobilePage2 from "./Mobilepage2";
import MobilePage3 from "./Mobilepage3";
import MobilePage4 from "./Mobilepage4";
import MobileFooter from "./Mobilefooter";


function HomePage (){

    const isMobile = useMediaQuery('(max-width: 1700px)')

    return ( 
        <Box>
            {isMobile ? (
                <Box>
                    <Box marginLeft={'20px'} marginRight={'20px'} marginTop={'20px'}>
                        <NavBar/>
                    </Box>

                    <Box mb={'20px'}>
                        <MobileLandingpage/>
                    </Box>

                    <Box>
                        <MobilePage1/>
                    </Box>

                    <Box>
                        <MobilePage2/>
                    </Box>

                    <Box>
                        <MobilePage3/>
                    </Box>

                    <Box>
                        <MobilePage4/>
                    </Box>

                    <Box>
                        <MobileFooter/>
                    </Box>
                
                </Box>
            ):(
                <Box>
                    <Box marginLeft={'20px'} marginRight={'20px'} marginTop={'20px'}>
                        <NavBar/>
                    </Box>

                    <Box mb={'20px'}>
                        <Landingpage/>
                    </Box>

                    <Box>
                        <Page1/>
                    </Box>

                    <Box>
                        <Page2/>
                    </Box>

                    <Box>
                        <Page3/>
                    </Box>

                    <Box>
                        <Page4/>
                    </Box>

                    <Box>
                        <Footer/>
                    </Box>
                    
                </Box>
            )}
            
        </Box>
     );
}
 
export default HomePage;