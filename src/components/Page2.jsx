import { MonetizationOn } from "@mui/icons-material";
import HomeWorkOutlined from "@mui/icons-material/HomeWorkOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import TrendingUpOutlined from "@mui/icons-material/TrendingUpOutlined";
import { Box, Button, Card, CardContent, CardMedia, IconButton, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Page2 ({setHouseId}){

    const [houses, setHouses] = useState([])
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()

    function handleProperties(){
        navigate('/properties')
    }

    function handleIndividualProperty(id){
        navigate('/properties')
        setHouseId(id)
    }


    useEffect(()=>{
        fetch("http://localhost:3000/houses")
        .then(response => response.json())
        .then((data) => {
            setHouses(data)
        })
    },[])

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const totalPages = Math.ceil(houses.length/itemsPerPage)
    const displayedCards = houses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return ( 
        <Box height={'1600px'}>
            <Box className="space">
                <Box>
                    <Typography fontFamily={'GT Medium'} fontSize={'50px'} color="black" mb={'30px'}>01. Popular Houses</Typography>
                </Box>

                <Box display={'flex'} gap={'30px'}>

                    <Box>
                        <img 
                            src='op3.jpeg'
                            alt="house"
                            style={{borderRadius:'15px', width:'100%', height:'600px'}}
                    />
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'20px'} width={'55%'}>

                        <Box display={'grid'} gridTemplateColumns={{xs:'repeat(1, 1fr)', sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)'}} gap={'30px'} >

                            {displayedCards.map((house,index) => (
                                    <Card
                                        key={index}
                                        onClick={() => handleIndividualProperty(house.id)}
                                        sx={{
                                            borderRadius:'15px',
                                            padding:'20px',
                                            backgroundColor:'#FFFFF0',
                                            display:'flex',
                                            flexDirection:'column',
                                            height:'450px',
                                            width:'340px',
                                            transition:'transform 0.3s ease-in-out',
                                            ":hover":{
                                                transform:"scale(1.03)"
                                            }
                                        }}
                                    >
                                        <CardMedia>
                                            <img 
                                                src={house.image}
                                                alt="house"
                                                style={{borderRadius:'15px', width:'100%', height:'250px'}}
                                            />
                                        </CardMedia>

                                        <CardContent>
                                            <Box>
                                                <Typography fontFamily={'GT Bold'} fontSize={'25px'}>{house.address}</Typography>
                                                <Typography fontFamily={'GT Light'}>{house.age}</Typography>
                                                <Typography fontFamily={'GT Light'}>{house.road}</Typography>
                                            </Box>
                                            <Box mt={"50px"}>
                                                <Typography fontFamily={'GT Medium'}>{new Intl.NumberFormat("en-AE",{style:'currency', currency:'AED'}).format(house.price)}/<span style={{fontFamily:'GT Light', fontSize:'20px'}}>night</span></Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                            ))}    

                        </Box>

                        <Box display={'flex'} justifyContent={'space-between'} gap={"20px"} alignItems={'center'} width={'1200px'}>
                                <Box>
                                    {totalPages > 1 && (
                                            <Box display={'flex'} justifyContent={'left'} sx={{backgroundColor:"#FFFFF0"}}>
                                                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="orange" style={{padding:'5px'}}/>
                                            </Box>
                                    )}
                                </Box>

                                <Box>
                                    <Button onClick={handleProperties} variant="contained" sx={{backgroundColor:"#FFFFF0", color:'black', ":hover":{backgroundColor:"orange", color:'black',}}}><Typography fontFamily={'GT Bold'} padding={'5px'}>Find a house</Typography></Button>
                                </Box>
                        </Box>
                        
                    </Box>

                </Box>

                <Box className="landing" mt={'100px'}>
                    <Typography fontFamily={'GT Medium'} color="black" textAlign={'center'} fontSize={'27px'}>Investing in <span style={{fontFamily:'GT Bold'}}>real estate</span> can offer various advantages for individuals seeking specific lifestyle preferences, environmentsal consciousness or unique investemnt opportunities here are some potential advantages.</Typography>
                </Box>

                <Box display={'flex'} gap={'40px'} mt={'60px'} alignItems={'center'}>

                    <Box display={'grid'} gridTemplateColumns={{xs:'repeat(1, 1fr)', sm:'repeat(2, 1fr)', md:'repeat(2, 1fr)'}} gap={'30px'} width={"70%"}>
                        <Card
                        sx={{
                                borderRadius:'15px',
                                display:'flex',
                                flexDirection:'row',
                                backgroundColor:'#FFFFF0',
                                height:'150px',
                                transition:'transform 0.3s ease-in-out',
                                ":hover":{
                                    transform:'scale(1.03)'
                                }
                        }}
                        >
                            <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                    <TrendingUpOutlined style={{color:'black', padding:'10px', fontSize:'50px'}}/>
                                </IconButton>
                                <Typography fontFamily={"GT Light"}>Real estate values appreciate over time, meaning your property's worth increases, leading to long-term wealth. As demand grows and inflation rises, well-located properties provide higher resale value and increased equity.</Typography>
                            </CardContent>
                        </Card>

                        <Card
                        sx={{
                                borderRadius:'15px',
                                display:'flex',
                                flexDirection:'row',
                                height:'150px',
                                backgroundColor:'#FFFFF0',
                                transition:'transform 0.3s ease-in-out',
                                ":hover":{
                                    transform:'scale(1.03)'
                                }
                        }}
                        >
                            <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                    <ReceiptLongOutlined style={{color:'black', padding:'10px', fontSize:'50px'}}/>
                                </IconButton>
                                <Typography fontFamily={"GT Light"}>Real estate investors enjoy tax advantages, including deductions on mortgage interest, property depreciation, maintenance costs, and even travel expenses. These benefits help reduce taxable income and maximize profits.</Typography>
                            </CardContent>
                        </Card>

                        <Card
                        sx={{
                                borderRadius:'15px',
                                display:'flex',
                                flexDirection:'row',
                                height:'150px',
                                backgroundColor:'#FFFFF0',
                                transition:'transform 0.3s ease-in-out',
                                ":hover":{
                                    transform:'scale(1.03)'
                                }
                        }}
                        >
                            <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                    <HomeWorkOutlined style={{color:'black', padding:'10px', fontSize:'50px'}}/>
                                </IconButton>
                                <Typography fontFamily={"GT Light"}>Investing in real estate diversifies your investment portfolio, reducing risk compared to volatile stocks. Since property values don’t fluctuate as aggressively, real estate provides financial stability and security over time.</Typography>
                            </CardContent>
                        </Card>

                        <Card
                        sx={{
                                borderRadius:'15px',
                                display:'flex',
                                flexDirection:'row',
                                height:'150px',
                                backgroundColor:'#FFFFF0',
                                transition:'transform 0.3s ease-in-out',
                                ":hover":{
                                    transform:'scale(1.03)'
                                }
                        }}
                        >
                            <CardContent sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                                <IconButton style={{backgroundColor:'orange', borderRadius:'15px', width:'100px', height:'100px'}}>
                                    <MonetizationOn style={{color:'black', padding:'10px', fontSize:'50px'}}/>
                                </IconButton>
                                <Typography fontFamily={"GT Light"}>Owning rental property generates passive income, allowing investors to earn consistent monthly cash flow from tenants. Unlike traditional jobs, rental income requires minimal effort once the property is set up and occupied.</Typography>
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
                </Box>

            </Box>
        </Box>
     );
}
 
export default Page2;