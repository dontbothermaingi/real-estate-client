import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import "./universal.css"
import { useState } from "react";
import FiltersMobile from "./FiltersMobile";
import HousesMobile from "./HousesMobile";
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import Filters from "./Filters";
import Houses from "./Houses";
import DetailedProperty from "./DetailedProperty";
import Page2 from "./Page2";

function PropertyDisplayMobile (){

    const [pupose, setPupose] = useState("Buy")
    const [filters, setFilters] = useState({
        location: "",
        startingPrice: "",
        endingPrice: "",
        propertyType: "",
        rooms: "",
    });
    const [activeSelection, setActiveSelection] = useState("")

    function handleToggele(dropdown){
        setActiveSelection(activeSelection === dropdown ? null:dropdown) 
    }

    const [houseId, setHouseId] = useState(1)
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1700px)')


    return ( 

        <Box>
            {isTablet ? (
                <Box sx={{backgroundColor:"#F4F5FC"}} paddingBottom={'30px'}>

                <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                    <PropertyDisplayNavbar setPupose={setPupose}/>
                </Box>

                <Box paddingLeft={'50px'} paddingRight={'20px'} paddingTop={'40px'} gap={'20px'}>

                    <Box>
                        <Box>
                            <Button onClick={() => handleToggele('Filters')} variant="contained" sx={{backgroundColor:'orange'}}><Typography fontFamily={'GT Bold'}>{activeSelection === 'Filters' ? "HIDE FILTER":"SHOW FILTER"}</Typography></Button>
                        </Box>

                        <Box mt={'20px'} mb={'20px'}>{activeSelection === 'Filters' && <Filters setFilters={setFilters}/>}</Box>

                    </Box>

                    <Divider
                            orientation="horizontal" 
                            sx={{ borderColor: "#ddd", borderStyle: "solid", margin:'30px' }} 
                        />

                    <Box display={'flex'} gap={'30px'}>
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
                            <Houses pupose={pupose} filters={filters} setHouseId={setHouseId}/>
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
                            <DetailedProperty pupose={pupose} houseId={houseId}/>
                        </Box>
                    </Box>

                    <Box display={"none"}>
                        <Page2/>
                    </Box>

                </Box>
                </Box>
            ):(
                 <Box sx={{backgroundColor:"#F4F5FC"}} paddingBottom={'30px'}>

                 <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                     <PropertyDisplayNavbar pupose={pupose} setPupose={setPupose}/>
                 </Box>
 
                 <Box paddingLeft={'20px'} paddingRight={'20px'} paddingTop={'40px'} display={'flex'} flexDirection={'column'}>
 
                    <Box>
                        <Box>
                            <Button onClick={() => handleToggele('Filters')} variant="contained" sx={{backgroundColor:'orange'}}><Typography fontFamily={'GT Bold'}>{activeSelection === 'Filters' ? "HIDE FILTER":"SHOW FILTER"}</Typography></Button>
                        </Box>

                        <Box mt={'20px'} mb={'20px'}>{activeSelection === 'Filters' && <FiltersMobile setFilters={setFilters}/>}</Box>

                    </Box>
 
                     <Box 
                         sx={{
                             overflowY: 'auto',
                             flexWrap: 'nowrap',  // Ensures all items stay in one row
                             paddingRight: '30px',
                             '&::-webkit-scrollbar': { height: '8px', width:'0px' },  // Optional: style scrollbar
                             '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '10px' }
                         }}
                     >
                         <HousesMobile pupose={pupose} filters={filters} setHouseId={setHouseId}/>
                     </Box>
 
                 </Box>
                 </Box>
            )}
           
        </Box>
     );
}
 
export default PropertyDisplayMobile;