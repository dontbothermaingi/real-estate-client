import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./universal.css"
import { useEffect, useState } from "react";

function Page3 (){

    const[testimonials, setTestimonials] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/testimonials")
        .then(response => response.json())
        .then((data) => {
            setTestimonials(data)
        })
    },[])

    return ( 
        <Box sx={{backgroundColor:'#FFFFF0'}} height={'700px'} width={'100%'} overflow={'auto'}>

            <Box className="page3">
                <Typography fontFamily={'GT Medium'} fontSize={'50px'} color="black" >02. Testimonials</Typography>
            </Box>

            <Box 
                display={'flex'} 
                gap={'30px'} 
                className="page3"
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
                        minWidth: '500px',
                        padding:'30px',
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
                                style={{borderRadius:'50%', width:'120px', height:'130px', padding:'20px'}}
                                />
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Bold"}>{testimony.name}</Typography>
                                <Typography fontFamily={"GT Regular"}>{testimony.date}</Typography>
                            </Box>
                        </CardMedia>

                        <CardContent>
                            <Typography fontFamily={'GT Light'}>"{testimony.testimony}"</Typography>
                        </CardContent>

                    </Card>
                ))}

            </Box>

        </Box>
     );
}
 
export default Page3;