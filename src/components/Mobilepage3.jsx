import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./universal.css"
import { useEffect, useState } from "react";

function MobilePage3 (){

    const[testimonials, setTestimonials] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/testimonials")
        .then(response => response.json())
        .then((data) => {
            setTestimonials(data)
        })
    },[])

    return ( 
        <Box sx={{backgroundColor:'#FFFFF0'}} height={'600px'} width={'100%'} overflow={'auto'}>

            <Box className="landing">
                <Typography fontFamily={'GT Medium'} fontSize={'30px'} color="black" >02. Testimonials</Typography>
            </Box>

            <Box 
                display={'flex'} 
                gap={'30px'} 
                // className="page3"
                padding={'20px'}
                ml={'20px'}
                mr={'20px'}
                sx={{
                    overflowX: 'auto',
                    flexWrap: 'nowrap',  // Ensures all items stay in one row
                    paddingBottom: '30px',
                    '&::-webkit-scrollbar': { height: '8px' },  // Optional: style scrollbar
                    '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '10px' }
                  }}
            >
                {testimonials.map((testimony, index) => (
                    <Card 
                       key={index} 
                       sx={{
                        display:'flex',
                        flexDirection:'column',
                        // borderRadius:'15px',
                        minWidth: '280px',
                        padding:'20px',
                        transition:'transform 0.3s ease-in-out',
                        border: '2px solid grey',
                        ":hover":{
                            transform:"scale(1.03)"
                        }
                       }}
                    >
                        <CardMedia sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                            <Box>
                                <img 
                                src={testimony.photo}
                                alt={testimony.name}
                                style={{borderRadius:'50%', width:'70px', height:'70px', padding:'0px'}}
                                />
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Bold"} fontSize={'15px'}>{testimony.name}</Typography>
                                <Typography fontFamily={"GT Regular"} fontSize={'15px'}>{testimony.date}</Typography>
                            </Box>
                        </CardMedia>

                        <CardContent>
                            <Typography fontFamily={'GT Light'} fontSize={'15px'}>"{testimony.testimony}"</Typography>
                        </CardContent>

                    </Card>
                ))}

            </Box>

        </Box>
     );
}
 
export default MobilePage3;