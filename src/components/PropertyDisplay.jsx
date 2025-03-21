import { Box, Divider, useMediaQuery } from "@mui/material";
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import Houses from "./Houses";
import "./universal.css"
import Filters from "./Filters";
import { useState } from "react";
import DetailedProperty from "./DetailedProperty";
import PropertyDisplayMobile from "./PropertyDisplayMobile";
import Page2 from "./Page2";
import { useParams } from "react-router";

function PropertyDisplay (){

    const isMobile = useMediaQuery("(max-width:1700px)")
    const {aim} = useParams()

    const [filters, setFilters] = useState({
        location: "",
        startingPrice: "",
        endingPrice: "",
        propertyType: "",
        rooms: "",
    });

    const [houseId, setHouseId] = useState(1)

    return ( 
        <Box>
            {isMobile ? (
                <PropertyDisplayMobile />
            ):(
                <Box sx={{backgroundColor:"#F4F5FC"}}>

                <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                    <PropertyDisplayNavbar aim={aim}/>
                </Box>

                <Box paddingLeft={'50px'} paddingRight={'20px'} paddingTop={'40px'} display={'flex'} gap={'20px'}>

                    <Box width={'13%'}>
                        <Filters setFilters={setFilters}/>
                    </Box>

                    <Divider 
                        orientation="vertical" 
                        sx={{ borderColor: "#ddd", borderStyle: "solid", height: "84vh", ml:'20px', mr:'10px' }} 
                    />


                    <Box 
                        width={'100%'} 
                        overflow={'auto'} 
                        height={'84vh'} 
                        // padding={'20px'} 
                        sx={{
                            overflowY: 'auto',
                            flexWrap: 'nowrap',  // Ensures all items stay in one row
                            paddingRight: '30px',
                            '&::-webkit-scrollbar': { height: '8px', width:'0px' },  // Optional: style scrollbar
                            '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '10px' }
                        }}
                    >
                        <Houses aim={aim} filters={filters} setHouseId={setHouseId}/>
                    </Box>

                    <Divider 
                        orientation="vertical" 
                        sx={{ borderColor: "#ddd", borderStyle: "solid", height: "84vh",mr:'10px' }} 
                    />

                    <Box 
                        width={'100%'} 
                        overflow={'auto'} 
                        height={'84vh'} 
                        // padding={'20px'} 
                        sx={{
                            overflowX: 'auto',
                            flexWrap: 'nowrap',  // Ensures all items stay in one row
                            paddingRight: '30px',
                            '&::-webkit-scrollbar': { height: '8px', width:'0px' },  // Optional: style scrollbar
                            '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '10px' }
                        }}
                    >
                        <DetailedProperty aim={aim} houseId={houseId}/>
                    </Box>

                    <Box display={"none"}>
                        <Page2 setHouseId={setHouseId}/>
                    </Box>

                </Box>
                </Box>
            )}
            
        </Box>
     );
}
 
export default PropertyDisplay;