import { LocationOn, MonetizationOn } from "@mui/icons-material";
import HomeWorkOutlined from "@mui/icons-material/HomeWorkOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import TrendingUpOutlined from "@mui/icons-material/TrendingUpOutlined";
import { Box, Button, Card, CardContent, Divider, IconButton, Pagination, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function MobilePage2 ({setHouseId}){

    const [houses, setHouses] = useState([])
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1700px)')
    const navigate = useNavigate();


    useEffect(()=>{
        fetch("http://localhost:9712/houses")
        .then(response => response.json())
        .then((data) => {
            setHouses(data)
        })
    },[])


    function handleIndividualProperty(id){
        navigate('/properties/Buy')
        setHouseId(id)
    }

    function handleProperties(){
        navigate('/properties/Buy')
    }

    return ( 
        <Box>
            {isTablet ? (
                <Box height={'auto'} mb={'30px'} width={'100%'}>
                <Box ml={'20px'} mr={'20px'} mt={'20px'}>
                    <Box className="landing">
                        <Typography fontFamily={'GT Medium'} fontSize={'30px'} color="black">01. Popular Houses</Typography>
                    </Box>

                    <Box display={'flex'} gap={'30px'} className="landing">

                        <Box display={'flex'} flexDirection={'column'} width={'100%'}>

                            <Box 
                                display={'flex'} 
                                height={'500px'}
                                // width={'100%'}
                                gap={'30px'}
                                sx={{
                                    overflowX: 'auto',
                                    flexWrap: 'nowrap',  // Ensures all items stay in one row
                                    paddingBottom: '15px',
                                    '&::-webkit-scrollbar': { height: '5px' },  // Optional: style scrollbar
                                    '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '10px' }
                                }}
                        >

                                {houses.map((house,index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleIndividualProperty(house.id)}
                                        sx={{
                                            backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`,
                                            backgroundSize: "cover", // Ensure the image covers the box
                                            backgroundPosition: "center", // Center the image
                                            width: "100%", // Adjust width as needed
                                            height: "450px", // Adjust height as needed
                                            borderRadius:'15px',
                                        }}
                                        padding={'12px'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        flexDirection={'column'}                        
                                     >
        
                                    <Box
                                        sx={{
                                            width:'90px',
                                            height:'20px',
                                            borderRadius:'25px',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center',
                                            padding:'10px',
                                            backgroundColor:'white'
                                        }}
                                    >
                                        <Typography color="black" textAlign={'center'} fontFamily={'GT Medium'} fontSize={'15px'}>{house.property_type}</Typography>
                                    </Box>
                                    <Card
                                        sx={{
                                            borderRadius:'10px',
                                            width:'100%'
                                            
                                        }}
                                    >
                                        <CardContent>
                                            <Typography fontFamily={"GT Medium"} fontSize={'18px'}>{house.location}</Typography>
                                            <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                                <IconButton>
                                                    <LocationOn style={{color:'orange'}}/>
                                                </IconButton>
                                                <Typography fontFamily={"GT Light"} fontSize={'14px'}>{house.address}</Typography>
                                            </Box>
                                            <Divider orientation="horizontal" style={{marginBottom:'5px'}}/>
                                        </CardContent>
                                    </Card>
        
                                    </Box>
                                ))}  

                            </Box>

                            <Box>
                                    {/* <Box>
                                        {totalPages > 1 && (
                                                <Box display={'flex'} justifyContent={'left'} sx={{backgroundColor:"#FFFFF0"}}>
                                                    <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="orange" style={{padding:'5px'}}/>
                                                </Box>
                                        )}
                                    </Box> */}

                                    <Box display={'flex'} justifyContent={'right'}  mb={'50px'}>
                                        <Button variant="contained" sx={{backgroundColor:"#FFFFF0", color:'black', ":hover":{backgroundColor:"orange", color:'black',}}}><Typography fontFamily={'GT Bold'} padding={'5px'}>Find a house</Typography></Button>
                                    </Box>
                            </Box>
                            
                        </Box>

                    </Box>

                    <Box  mt={'30px'}>
                        <Typography fontFamily={'GT Medium'} color="black" textAlign={'center'} fontSize={'25px'}>Investing in <span style={{fontFamily:'GT Bold'}}>real estate</span> can offer various advantages for individuals seeking specific lifestyle preferences, environmentsal consciousness or unique investemnt opportunities here are some potential advantages.</Typography>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'40px'} mt={'60px'} alignItems={'center'}>

                        <Box display={'flex'} flexDirection={'column'} gap={'30px'} width={"100%"} alignItems={'center'}>
                            <Box display={'flex'} alignItems={'center'} gap={'30px'}>
                                <Card
                                    sx={{
                                            borderRadius:'15px',
                                            display:'flex',
                                            flexDirection:'row',
                                            backgroundColor:'#FFFFF0',
                                            height:'160px',
                                            transition:'transform 0.3s ease-in-out',
                                            ":hover":{
                                                transform:'scale(1.03)'
                                            }
                                    }}
                                >
                                    <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                        <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                            <TrendingUpOutlined style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                        </IconButton>
                                        <Typography fontFamily={"GT Light"} fontSize={'14px'}>Real estate values appreciate over time, meaning your property's worth increases, leading to long-term wealth. As demand grows and inflation rises, well-located properties provide higher resale value and increased equity.</Typography>
                                    </CardContent>
                                </Card>

                                <Card
                                    sx={{
                                            borderRadius:'15px',
                                            display:'flex',
                                            flexDirection:'row',
                                            height:'160px',
                                            backgroundColor:'#FFFFF0',
                                            transition:'transform 0.3s ease-in-out',
                                            ":hover":{
                                                transform:'scale(1.03)'
                                            }
                                    }}
                                >
                                    <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                        <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                            <ReceiptLongOutlined style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                        </IconButton>
                                        <Typography fontFamily={"GT Light"} fontSize={'14px'}>Real estate investors enjoy tax advantages, including deductions on mortgage interest, property depreciation, maintenance costs, and even travel expenses. These benefits help reduce taxable income and maximize profits.</Typography>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box>
                                <img 
                                    src='MM10.jpeg'
                                    alt="house"
                                    style={{borderRadius:'15px', width:'100%', height:'500px'}}
                                />
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={'30px'}>
                                <Card
                                    sx={{
                                            borderRadius:'15px',
                                            display:'flex',
                                            flexDirection:'row',
                                            height:'160px',
                                            backgroundColor:'#FFFFF0',
                                            transition:'transform 0.3s ease-in-out',
                                            ":hover":{
                                                transform:'scale(1.03)'
                                            }
                                    }}
                                >
                                    <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                        <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                            <HomeWorkOutlined style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                        </IconButton>
                                        <Typography fontFamily={"GT Light"} fontSize={'14px'}>Investing in real estate diversifies your investment portfolio, reducing risk compared to volatile stocks. Since property values don’t fluctuate as aggressively, real estate provides financial stability and security over time.</Typography>
                                    </CardContent>
                                </Card>

                                <Card
                                    sx={{
                                            borderRadius:'15px',
                                            display:'flex',
                                            flexDirection:'row',
                                            height:'160px',
                                            backgroundColor:'#FFFFF0',
                                            transition:'transform 0.3s ease-in-out',
                                            ":hover":{
                                                transform:'scale(1.03)'
                                            }
                                    }}
                                >
                                    <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                        <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                            <MonetizationOn style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                        </IconButton>
                                        <Typography fontFamily={"GT Light"} fontSize={'14px'}>Owning rental property generates passive income, allowing investors to earn consistent monthly cash flow from tenants. Unlike traditional jobs, rental income requires minimal effort once the property is set up and occupied.</Typography>
                                    </CardContent>
                                </Card>
                            </Box>

                            
                        </Box>

                    </Box>

                </Box>
            </Box>
            ):(
                <Box height={'auto'} mb={'30px'} width={'100%'}>
                <Box ml={'20px'} mr={'20px'} mt={'20px'}>
                    <Box className="landing">
                        <Typography fontFamily={'GT Medium'} fontSize={'30px'} color="black">01. Popular Houses</Typography>
                    </Box>

                    <Box display={'flex'} gap={'30px'}>

                        <Box display={'flex'} flexDirection={'column'} width={'100%'}>

                            <Box 
                                display={'flex'} 
                                height={'500px'}
                                // width={'100%'}
                                gap={'30px'}
                                sx={{
                                    overflowX: 'auto',
                                    flexWrap: 'nowrap',  // Ensures all items stay in one row
                                    paddingBottom: '0px',
                                    '&::-webkit-scrollbar': { height: '8px' },  // Optional: style scrollbar
                                    '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '10px' }
                                }}
                        >

                                {houses.map((house,index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleIndividualProperty(house.id)}
                                        sx={{
                                            backgroundImage: `url(http://127.0.0.1:9712/images/${house.photos[0].photo})`,
                                            backgroundSize: "cover", // Ensure the image covers the box
                                            backgroundPosition: "center", // Center the image
                                            width: "100%", // Adjust width as needed
                                            height: "450px", // Adjust height as needed
                                            borderRadius:'15px',
                                        }}
                                        padding={'12px'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        flexDirection={'column'}  
                                        minWidth={'300px'}                      
                                     >
        
                                    <Box
                                        sx={{
                                            width:'90px',
                                            height:'20px',
                                            borderRadius:'25px',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center',
                                            padding:'10px',
                                            backgroundColor:'white'
                                        }}
                                    >
                                        <Typography color="black" textAlign={'center'} fontFamily={'GT Medium'} fontSize={'15px'}>{house.property_type}</Typography>
                                    </Box>
                                    <Card
                                        sx={{
                                            borderRadius:'10px',
                                            width:'100%'
                                            
                                        }}
                                    >
                                        <CardContent>
                                            <Typography fontFamily={"GT Medium"} fontSize={'18px'}>{house.location}</Typography>
                                            <Box display={'flex'} alignItems={'center'} ml={'-15px'}>
                                                <IconButton>
                                                    <LocationOn style={{color:'orange'}}/>
                                                </IconButton>
                                                <Typography fontFamily={"GT Light"} fontSize={'14px'}>{house.address}</Typography>
                                            </Box>
                                            <Divider orientation="horizontal" style={{marginBottom:'5px'}}/>
                                        </CardContent>
                                    </Card>
        
                                    </Box>
                                ))}   

                            </Box>

                            <Box>
                                    {/* <Box>
                                        {totalPages > 1 && (
                                                <Box display={'flex'} justifyContent={'left'} sx={{backgroundColor:"#FFFFF0"}}>
                                                    <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="orange" style={{padding:'5px'}}/>
                                                </Box>
                                        )}
                                    </Box> */}

                                    <Box display={'flex'} justifyContent={'right'}  mb={'50px'}>
                                        <Button onClick={handleProperties} variant="contained" sx={{backgroundColor:"#FFFFF0", color:'black', ":hover":{backgroundColor:"orange", color:'black',}}}><Typography fontFamily={'GT Bold'} padding={'5px'} fontSize={'13px'}>Find a house</Typography></Button>
                                    </Box>
                            </Box>
                            
                        </Box>

                    </Box>

                    <Box  mt={'30px'}>
                        <Typography fontFamily={'GT Medium'} color="black" textAlign={'center'} fontSize={'18px'}>Investing in <span style={{fontFamily:'GT Bold'}}>real estate</span> can offer various advantages for individuals seeking specific lifestyle preferences, environmentsal consciousness or unique investemnt opportunities here are some potential advantages.</Typography>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'40px'} mt={'60px'} alignItems={'center'}>

                        <Box display={'grid'} gridTemplateColumns={{xs:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(1, 1fr)'}} gap={'30px'} width={"100%"}>
                            <Card
                                sx={{
                                        borderRadius:'15px',
                                        display:'flex',
                                        flexDirection:'row',
                                        backgroundColor:'#FFFFF0',
                                        height:'200px',
                                        transition:'transform 0.3s ease-in-out',
                                        ":hover":{
                                            transform:'scale(1.03)'
                                        }
                                }}
                            >
                                <CardContent sx={{display:'flex', gap:'20px', alignItems:'center', padding:'20px'}}>
                                    <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                        <TrendingUpOutlined style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                    </IconButton>
                                    <Typography fontFamily={"GT Light"} fontSize={'14px'}>Real estate values appreciate over time, meaning your property's worth increases, leading to long-term wealth. As demand grows and inflation rises, well-located properties provide higher resale value and increased equity.</Typography>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                        borderRadius:'15px',
                                        display:'flex',
                                        flexDirection:'row',
                                        height:'200px',
                                        backgroundColor:'#FFFFF0',
                                        transition:'transform 0.3s ease-in-out',
                                        ":hover":{
                                            transform:'scale(1.03)'
                                        }
                                }}
                            >
                                <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                    <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                        <ReceiptLongOutlined style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                    </IconButton>
                                    <Typography fontFamily={"GT Light"} fontSize={'14px'}>Real estate investors enjoy tax advantages, including deductions on mortgage interest, property depreciation, maintenance costs, and even travel expenses. These benefits help reduce taxable income and maximize profits.</Typography>
                                </CardContent>
                            </Card>

                            <Box>
                                <img 
                                    src='MM10.jpeg'
                                    alt="house"
                                    style={{borderRadius:'15px', width:'100%', height:'500px'}}
                                />
                            </Box>

                            <Card
                                sx={{
                                        borderRadius:'15px',
                                        display:'flex',
                                        flexDirection:'row',
                                        height:'200px',
                                        backgroundColor:'#FFFFF0',
                                        transition:'transform 0.3s ease-in-out',
                                        ":hover":{
                                            transform:'scale(1.03)'
                                        }
                                }}
                            >
                                <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                    <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                        <HomeWorkOutlined style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                    </IconButton>
                                    <Typography fontFamily={"GT Light"} fontSize={'14px'}>Investing in real estate diversifies your investment portfolio, reducing risk compared to volatile stocks. Since property values don’t fluctuate as aggressively, real estate provides financial stability and security over time.</Typography>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                        borderRadius:'15px',
                                        display:'flex',
                                        flexDirection:'row',
                                        height:'200px',
                                        backgroundColor:'#FFFFF0',
                                        transition:'transform 0.3s ease-in-out',
                                        ":hover":{
                                            transform:'scale(1.03)'
                                        }
                                }}
                            >
                                <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                    <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                        <MonetizationOn style={{color:'black', padding:'10px', fontSize:'30px'}}/>
                                    </IconButton>
                                    <Typography fontFamily={"GT Light"} fontSize={'14px'}>Owning rental property generates passive income, allowing investors to earn consistent monthly cash flow from tenants. Unlike traditional jobs, rental income requires minimal effort once the property is set up and occupied.</Typography>
                                </CardContent>
                            </Card>

                            
                        </Box>

                    </Box>

                </Box>
            </Box>
            )}
            
        </Box>
     );
}
 
export default MobilePage2;