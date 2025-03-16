import { Box, Button, Divider, FormControl, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import AddHouseMobile from "./AddHouseMobile";


function AddHouse (){

    const [descriptionCounter, setDescriptionCounter] = useState(1);
    const decsriptionLabel = `Despription Paragraph ${descriptionCounter}`;
    const[amenityCounter, setAmenityCounter] = useState(1);
    const amenityLabel = `Amenity ${amenityCounter}`;
    const [file,setFile] = useState();
    const fileUploadRef = useRef();

    const isMobile = useMediaQuery('(max-width:768px)');
    
    const [formData, setFormData] = useState({
        location:"",
        address:"",
        purpose:"",
        price:"",
        beds:"",
        bathrooms:"",
        square_feet:"",
        property_type:"",
        furnishing:"",
        propertyId:"",
        completion:"",
        year_built:"",
        descriptions:[],
        amenities:[],
        photos:[],
    })

    const [descriptionData, setDescriptionData] = useState({
        description:"",
    })

    const [amenityData, setAmenityData] = useState({
        amenity:"",
    })

    const [photoData, setPhotoData] = useState({
        photo:"",
    })

    function handleChange(event){
        const{name,value} = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }))
    }

    function handlePhotoChange(event) {
        const file = event.target.files[0]; 

        setFile(URL.createObjectURL(file));

        if (file) {
            setPhotoData((prevPhotoData) => ({
                ...prevPhotoData,
                photo: file,
                preview: URL.createObjectURL(file),
            })
        );
        }

        // Reset input field
        event.target.value = "";
    }
    

    function handleDescriptionChange(event){
        const{name,value} = event.target

        setDescriptionData(prevDescriptionData => ({
            ...prevDescriptionData,
            [name]:value,
        }))
    }

    function handleAmenityChange(event){
        const{name,value} = event.target

        setAmenityData(prevAmenityData => ({
            ...prevAmenityData,
            [name]:value,
        }))
    }

    function AddDescription(){

        setFormData(prevFormData => ({
            ...prevFormData,
            descriptions:[...prevFormData.descriptions, descriptionData]
        }))

        setDescriptionCounter(prevDescriptionCounter => prevDescriptionCounter + 1 )
    }

    function DeleteDescription(index){
        setFormData(prevFormData => ({
            ...prevFormData,
            descriptions: prevFormData.descriptions.filter((_,i) => i !== index)
        }))

        setDescriptionCounter(prevDescriptionCounter => prevDescriptionCounter + 1 )

    }

    function AddAmenity(){

        setFormData(prevFormData => ({
            ...prevFormData,
            amenities:[...prevFormData.amenities, amenityData]
        }))

        setAmenityCounter(prevAmenityCounter => prevAmenityCounter + 1);
    }

    function DeleteAmenity(index){
        setFormData(prevFormData => ({
            ...prevFormData,
            amenities: prevFormData.amenities.filter((_,i) => i !== index)
        }))

        setAmenityCounter(prevAmenityCounter => prevAmenityCounter - 1);

    }

    function AddPhoto(){

        setFormData(prevFormData => ({
            ...prevFormData,
            photos:[...prevFormData.photos, photoData]
        }))

        // Clear input after adding
        setPhotoData({ photo: "", preview: "" });
        setFile("");

    }

    console.log(formData.photos)

    function DeletePhoto(index){
        setFormData(prevFormData => ({
            ...prevFormData,
            photos:prevFormData.photos.filter((_,i) => i !== index)
        }))

    }

    function handleSubmit(){
        fetch("url",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json();
        })
        .then((data) => {

            setFormData({
                location:"",
                address:"",
                purpose:"",
                price:"",
                beds:"",
                bathrooms:"",
                square_feet:"",
                property_type:"",
                furnishing:"",
                propertyId:"",
                completion:"",
                year_built:"",
                descriptions:[],
                amenities:[],
            })
        })
        .catch((error) => {
            console.error('Error with stock update operations:', error);
        })
    }

    const locations = [
        "Expo City",
        "Jumeirah Village Circle",
        "Meidan",
        "Business Bay",
        "Sobha Hartland",
        "DownTown Dubai",
        "Dubai Creek Harbour",
        "Palm Jumeirah",
        "Dubai Marina",
        "EMAAR Beachfront",
    ];

    const purposeOptions = [
        "Buy",
        "Rent"
    ]

    const propertyType = [
        "Villa",
        "House",
        "Commercial",
        "Apartment"
    ]

    function handleImageUpload(event){
        event.preventDefault();

        fileUploadRef.current.click();
    }

    // Handle Drag Over Event (Prevents default behavior)
    function handleDragOver(event) {
        event.preventDefault();
    }

    // Handle Drop Event
    function handleDrop(event) {
        event.preventDefault();
        
        const file = event.dataTransfer.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setFile(fileURL);

            setPhotoData((prevPhotoData) => ({
                ...prevPhotoData,
                photo: file,
                preview: fileURL,
            }));
        }
    }

    // Handle Drag Leave (Optional)
    function handleDragLeave(event) {
        event.preventDefault();
    }


    return ( 

    <Box>

    {isMobile ? (
        <AddHouseMobile/>
    ) : (
        <Box>
            <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                <PropertyDisplayNavbar />
            </Box>
        
            <Box paddingLeft={'300px'} paddingRight={'300px'} paddingTop={'20px'}>
                <Typography fontFamily={"GT Ultrabold"} fontSize={"40px"} color="black" textAlign={'center'}>CREATE A HOUSE LISTING</Typography>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>

                    <Box>
                        <TableContainer>
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography fontFamily={"GT Bold"} fontSize={'30px'}>House Photos</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {formData.photos.map((photo, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {photo.preview ? (

                                                <Box
                                                    width={'600px'} 
                                                    height={'300px'} 
                                                >
                                                    <img 
                                                        src={photo.preview}
                                                        alt="Uploaded Preview"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "contain",
                                                            borderRadius: "15px"
                                                        }}
                                                    />
                                                </Box>
                                            ) : (
                                                "No Image"
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton color="error" onClick={() => DeletePhoto(index)}>
                                                <CloseIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                <TableCell>
                                    {/* Drag and Drop Area */}
                                    <Box 
                                        onClick={handleImageUpload}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        onDragLeave={handleDragLeave}
                                    >
                                        <Box 
                                            border={"2px dashed #ddd"} 
                                            width={'600px'} 
                                            height={'300px'} 
                                            borderRadius={'15px'} 
                                            display={'flex'} 
                                            justifyContent={'center'} 
                                            flexDirection={'column'} 
                                            alignItems={'center'}
                                            position="relative"
                                            padding={'20px'}
                                            sx={{
                                                transition:"transform 0.3s ease-in-out",
                                                ":hover":{
                                                    transform:'scale(1.03)',
                                                    // backgroundColor:"#ddd"
                                                }
                                            }}
                                        >
                                            {/* Show uploaded image if available */}
                                            {file ? (
                                                <img 
                                                    src={file}
                                                    alt="Uploaded Preview"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                        borderRadius: "15px"
                                                    }}
                                                />
                                            ) : (
                                                <>
                                                    <Box display={'flex'} justifyContent={'center'}>
                                                        <img 
                                                            src="upload.png"
                                                            alt="Photo Upload"
                                                            style={{width:"120px", height:"auto"}}
                                                        />
                                                    </Box>
                                                    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                                                        <Typography fontFamily={'GT Medium'} color="black" fontSize={'25px'}>
                                                            Drop your image here or browse
                                                        </Typography>
                                                        <Typography fontFamily={'GT Light'} color="black">
                                                            Supports: PNG, JPG, JPEG, WEBP
                                                        </Typography>
                                                    </Box>
                                                </>
                                            )}
                                        </Box>

                                        {file && <Button onClick={() => handleImageUpload()} sx={{fontFamily:'GT Bold', backgroundColor:'white', color:'orange', ml:'520px', mt:'20px'}}>Change Photo</Button>}
                                    </Box>

                                    {/* Hidden File Input */}
                                    <input 
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        hidden
                                        ref={fileUploadRef}
                                        multiple
                                    />
                                </TableCell>

                                </TableRow>
                            </TableBody>
                        </TableContainer>
                        <Button onClick={AddPhoto} variant="contained" sx={{margin:'20px', fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>ADD PHOTO</Button>

                    </Box>
                    {/* <Typography fontFamily={"GT Bold"} fontSize={'30px'} color="black" mb={'20px'}>House Photos</Typography>
                    <TextField 
                        type="file"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{mb:'20px'}}
                    /> */}

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={"GT Bold"} fontSize={'30px'} color="black" mb={'20px'}>Location</Typography>

                        <Box display={'flex'} gap={'30px'}>
                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">City</Typography>
                                <FormControl>
                                    <Select
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{mb:'20px', width:'400px'}}
                                    >
                                        {locations.map((location,index) => (
                                            <MenuItem key={index} value={location} sx={{ fontFamily: "GT Light" }} color="black" >{location}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Address</Typography>
                                <TextField 
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'800px'}}
                                />
                            </Box>
                        </Box>
                    </Box>


                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Typography fontFamily={"GT Bold"} fontSize={'20px'} color="black">Price</Typography>
                    <TextField 
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{mb:'20px'}}
                    />

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={"GT Bold"} fontSize={'30px'} color="black" mb={'20px'}>Utilities</Typography>
                        <Box display={'flex'} width={'100%'} gap={'40px'}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Bedroom</Typography>
                                <TextField 
                                    type="number"
                                    name="beds"
                                    value={formData.beds}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Bathroom</Typography>
                                <TextField 
                                    type="number"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Unit</Typography>
                                <TextField 
                                    type="number"
                                    name="square_feet"
                                    value={formData.square_feet}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Year Built</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        value={formData.year_built ? dayjs(formData.year_built) : null}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} variant="outlined" sx={{ mb: "20px" }} />}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>

                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={"GT Bold"} fontSize={'30px'} color="black" mb={'20px'}>Key Information</Typography>
                        <Box display={'grid'} gridTemplateColumns={{xs:'repeat(2, 1fr)', md:'repeat(2, 1fr)', sm:'repeat(2, 1fr)'}} width={'100%'}>

                            <Box>
                                <FormControl>
                                    <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Purpose</Typography>
                                    <Select
                                        type="text"
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{mb:'20px', width:'400px'}}
                                    >
                                        {purposeOptions.map((purpose,index) => (
                                            <MenuItem value={purpose} key={index} sx={{ fontFamily: "GT Light" }} color="black">{purpose}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            
                            <Box>
                                <FormControl>
                                    <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Property Type</Typography>
                                    <Select
                                        type="text"
                                        name="property_type"
                                        value={formData.property_type}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{mb:'20px',width:'400px'}}
                                    >
                                        {propertyType.map((type,index) => (
                                            <MenuItem value={type} key={index} sx={{ fontFamily: "GT Light" }} color="black">{type}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Furnishing</Typography>
                                <TextField 
                                    type="text"
                                    name="furnishing"
                                    value={formData.furnishing}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'400px'}}
                                />
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Property ID</Typography>
                                <TextField 
                                    type="text"
                                    name="propertyId"
                                    value={formData.propertyId}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'400px'}}
                                />
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'20px'} color="black">Completion</Typography>
                                <TextField 
                                    type="text"
                                    name="completion"
                                    value={formData.completion}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'400px'}}
                                />
                            </Box>
                        </Box>
                        

                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{minWidth:410}}><Typography fontFamily={"GT Bold"} fontSize={'30px'}>Descriptions</Typography></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {formData.descriptions.map((description,index) => (
                                        <TableRow key={index}>
                                            <TableCell>{description.description}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    color="error"
                                                    onClick={() => DeleteDescription(index)}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    <TableRow>
                                        <TableCell>
                                            <TextField 
                                                type="text"
                                                name="description"
                                                value={descriptionData.description}
                                                onChange={handleDescriptionChange}
                                                variant="outlined"
                                                label={decsriptionLabel}
                                                sx={{mb:'20px'}}
                                                size="small"
                                                fullWidth
                                                multiline
                                                minRows={4}  // Initial number of rows
                                                maxRows={20}   // Maximum number of rows
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button onClick={AddDescription} variant="contained" sx={{margin:'20px', fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>SAVE DESCRIPTION</Button>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableCell sx={{minWidth: 410}}><Typography fontFamily={"GT Bold"} fontSize={'30px'}>Amenities</Typography></TableCell>
                                </TableHead>
                                <TableBody>
                                    {formData.amenities.map((amenity,index) => (
                                        <TableRow key={index}>
                                            <TableCell>{amenity.amenity}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    color="error"
                                                    onClick={() => DeleteAmenity(index)}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell>
                                            <TextField  
                                                type="text"
                                                name="amenity"
                                                value={amenityData.amenity}
                                                onChange={handleAmenityChange}
                                                variant="outlined"
                                                label={amenityLabel}
                                                sx={{mb:'20px'}}
                                                size="small"
                                                fullWidth
                                                multiline
                                                minRows={4}  // Initial number of rows
                                                maxRows={20}   // Maximum number of rows

                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button onClick={AddAmenity} variant="contained" sx={{margin:'20px', fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>SAVE AMENITY</Button>
                    </Box>

                </form>
                <Button type="submit" variant="contained" sx={{width:'100%', margin:'20px', fontSize:'20px',fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>POST HOUSE</Button>

            </Box>

        </Box>
    )}
    </Box>
     );
}
 
export default AddHouse;