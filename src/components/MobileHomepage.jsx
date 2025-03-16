import { Box, Button, Typography } from "@mui/material";
import NavBar from "./navbar";
import './universal.css'
import Page1 from "./Page1";
import Page2 from "./Page2";
import Footer from "./footer";
import Page3 from "./Page3";
import Page4 from "./Page4";
import MobileLandingpage from "./Mobilelandingpage";


function MobileHomePage (){
    return ( 
        <Box>
            <Box marginLeft={'20px'} marginRight={'20px'} marginTop={'20px'}>
                <NavBar/>
            </Box>

            <Box mb={'20px'}>
                <MobileLandingpage />
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
     );
}
 
export default MobileHomePage;