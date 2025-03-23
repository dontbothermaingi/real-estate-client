import { Alert, Box, Button, Divider, FormControl, IconButton, MenuItem, Select, Snackbar, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import { AddOutlined, Delete } from "@mui/icons-material";


function AddHouseMobile (){

    const [filePreview,setFilePreview] = useState();
    const fileUploadRef = useRef();
    const [successMessage, setSuccessMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    
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

    const [descriptionData, setDescriptionData] = useState([{description:"",}])

    const [amenityData, setAmenityData] = useState([{amenity:"",}])

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

        setFilePreview(URL.createObjectURL(file));

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
    

    function handleDescriptionChange(event, index){
        const values = [...descriptionData]
        values[index].description = event.target.value
        setDescriptionData(values);

        setFormData(prevFormData => ({
            ...prevFormData,
            descriptions:descriptionData
        }))
    }

    function handleAmenityChange(event,index){
        const values = [...amenityData]
        values[index].amenity = event.target.value
        setAmenityData(values)

        setFormData(prevFormData => ({
            ...prevFormData,
            amenities:amenityData
        }))
    }

    function newDescriptionInputField(){
        setDescriptionData([...descriptionData, {description:""}])
    }

    function DeleteDescription(index){
        const newDescriptionField = [...descriptionData];
        newDescriptionField.splice(index , 1);
        setDescriptionData(newDescriptionField);

    }

    function newAmenityInputField(){
        setAmenityData([...amenityData, {amenity:""}])
    }

    function DeleteAmenity(index){
        const newAmenityField = [...amenityData];
        newAmenityField.splice(index , 1);
        setAmenityData(newAmenityField);
    }

    function AddPhoto(){

        setFormData(prevFormData => ({
            ...prevFormData,
            photos:[...prevFormData.photos, photoData]
        }))

        // Clear input after adding
        setPhotoData({ photo: "", preview: "" });
        setFilePreview("");

    }

    console.log(formData.photos)

    function DeletePhoto(index){
        setFormData(prevFormData => ({
            ...prevFormData,
            photos:prevFormData.photos.filter((_,i) => i !== index)
        }))

    }

    function handleSubmit(event){

        event.preventDefault()

        if(!formData.photos || !formData.amenities || !formData.descriptions){
            setOpenSnackBar(true)
            setSuccessMessage("Invalid House Listing!")
        }

        const formDataToSend = new FormData();

        // Append non-file form data
        formDataToSend.append("location", formData.location);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("purpose", formData.purpose);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("beds", formData.beds);
        formDataToSend.append("bathrooms", formData.bathrooms);
        formDataToSend.append("square_feet", formData.square_feet);
        formDataToSend.append("property_type", formData.property_type);
        formDataToSend.append("furnishing", formData.furnishing);
        formDataToSend.append("propertyId", formData.propertyId);
        formDataToSend.append("completion", formData.completion);
        formDataToSend.append("year_built", formData.year_built);

        formDataToSend.append("descriptions", JSON.stringify([...formData.descriptions]));
        formDataToSend.append("amenities", JSON.stringify([...formData.amenities]))

        if(formData.photos && formData.photos.length > 0){
            formData.photos.forEach(photoObj => {
                if(photoObj.photo instanceof File){
                    formDataToSend.append("photos", photoObj.photo)
                }else {
                    console.error("Invalid photo file:", photoObj.photo);
                }
            })
        }

        fetch("https://house-server-zocq.onrender.com/houses",{
            method:"POST",
            credentials:'include',
            body:formDataToSend
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

            setAmenityData([{amenity:""}])
            setDescriptionData([{description:""}])

            setOpenSnackBar(true)
            setSuccessMessage("House Listed Successfully!")
        })
        .catch((error) => {
            console.error('Error with stock update operations:', error);
            setOpenSnackBar(true)
            setSuccessMessage("Invalid House Listing!")
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
            setFilePreview(fileURL);

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

    function handleCloseSnackBar(event, reason){
        if(reason === 'clickaway') return;
        setOpenSnackBar(false);
    }


    return ( 

        <Box>

            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{horizontal:'center', vertical:'top'}}
                onClose={handleCloseSnackBar}
            >
                <Alert onClose={handleCloseSnackBar} severity={successMessage.startsWith("Invalid") ? "error":"success"}>
                    {successMessage}
                </Alert>
            </Snackbar>

            <Box paddingTop={'20px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'20px'} sx={{backgroundColor:"#242424"}}>
                <PropertyDisplayNavbar />
            </Box>
        
            <Box padding={'20px'} paddingTop={'20px'}>
                <Typography fontFamily={"GT Ultrabold"} fontSize={"20px"} color="black" textAlign={'center'}>CREATE A HOUSE LISTING</Typography>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>

                    <Box>
                        <TableContainer>
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography fontFamily={"GT Bold"} fontSize={'20px'}>House Photos</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {formData.photos.map((photo, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {photo.preview ? (

                                                <Box
                                                    width={'100%'} 
                                                    height={'auto'} 
                                                >
                                                    <img 
                                                        src={photo.preview}
                                                        alt="Uploaded Preview"
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
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
                                            width={'100%'} 
                                            height={'100px'} 
                                            borderRadius={'15px'} 
                                            display={'flex'} 
                                            justifyContent={'center'} 
                                            flexDirection={'column'} 
                                            alignItems={'center'}
                                            position="relative"
                                            padding={'15px'}
                                            sx={{
                                                transition:"transform 0.3s ease-in-out",
                                                maxWidth: '400px', // Prevent it from being too wide on desktops
                                                ":hover":{
                                                    transform:'scale(1.03)',
                                                },
                                                '@media (max-width: 600px)': {
                                                    width: '100%', // Full width on mobile
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            {/* Show uploaded image if available */}
                                            {filePreview ? (
                                                <img 
                                                    src={filePreview}
                                                    alt="Uploaded Preview"
                                                    style={{
                                                        width: "90%",
                                                        height: "auto",
                                                        objectFit: "contain",
                                                        borderRadius: "15px",
                                                        '@media (max-width: 600px)': {
                                                            width: '100%', // Full width on mobile
                                                            height: 'auto'
                                                        }
                                                    }}
                                                />
                                            ) : (
                                                <>
                                                    <Box display={'flex'} justifyContent={'center'}>
                                                        <img 
                                                            src="/upload.png"
                                                            alt="Photo Upload"
                                                            style={{width:"40px", height:"auto"}}
                                                        />
                                                    </Box>
                                                    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                                                        <Typography fontFamily={'GT Medium'} color="black" fontSize={'15px'}>
                                                            Drop your image here or browse
                                                        </Typography>
                                                        <Typography fontFamily={'GT Light'} color="black" fontSize={'14px'}>
                                                            Supports: PNG, JPG, JPEG, WEBP
                                                        </Typography>
                                                    </Box>
                                                </>
                                            )}
                                        </Box>

                                        {filePreview && <Button onClick={() => handleImageUpload()} sx={{fontFamily:'GT Bold', backgroundColor:'white', color:'orange', mt:'20px'}}>Change Photo</Button>}
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
                        <Button onClick={AddPhoto} variant="contained" sx={{margin:'20px', backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}><Typography fontSize={'12px'} fontFamily={"GT Bold"}>ADD PHOTO</Typography></Button>

                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={"GT Bold"} fontSize={'20px'} color="black" mb={'20px'}>Location</Typography>

                        <Box display={'flex'} flexDirection={'column'} gap={'30px'} width={'100%'}>
                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">City</Typography>
                                <FormControl>
                                    <Select
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{mb:'20px', width:'100%'}}
                                    >
                                        {locations.map((location,index) => (
                                            <MenuItem key={index} value={location} sx={{ fontFamily: "GT Light" }} color="black" >{location}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Address</Typography>
                                <TextField 
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'100%'}}
                                />
                            </Box>
                        </Box>
                    </Box>


                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Typography fontFamily={"GT Bold"} fontSize={'18px'} color="black">Price</Typography>
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
                        <Typography fontFamily={"GT Bold"} fontSize={'20px'} color="black" mb={'20px'}>Utilities</Typography>
                        <Box display={'flex'} flexDirection={'column'} width={'100%'} gap={'10px'}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Bedroom</Typography>
                                <TextField 
                                    type="number"
                                    name="beds"
                                    value={formData.beds}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'10px'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Bathroom</Typography>
                                <TextField 
                                    type="number"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'10px'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Unit</Typography>
                                <TextField 
                                    type="number"
                                    name="square_feet"
                                    value={formData.square_feet}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'10px'}}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Year Built</Typography>
                                <TextField 
                                    type="date"
                                    name="year_built"
                                    value={formData.year_built}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'100%'}}
                                />
                            </Box>
                        </Box>

                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={"GT Bold"} fontSize={'20px'} color="black" mb={'20px'}>Key Information</Typography>
                        <Box display={'grid'} gridTemplateColumns={{xs:'repeat(1, 1fr)', md:'repeat(1, 1fr)', sm:'repeat(2, 1fr)'}} width={'100%'}>

                            <Box>
                                <FormControl>
                                    <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Purpose</Typography>
                                    <Select
                                        type="text"
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{mb:'20px', width:'100%'}}
                                    >
                                        {purposeOptions.map((purpose,index) => (
                                            <MenuItem value={purpose} key={index} sx={{ fontFamily: "GT Light" }} color="black">{purpose}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            
                            <Box>
                                <FormControl>
                                    <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Property Type</Typography>
                                    <Select
                                        type="text"
                                        name="property_type"
                                        value={formData.property_type}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{mb:'20px',width:'100%'}}
                                    >
                                        {propertyType.map((type,index) => (
                                            <MenuItem value={type} key={index} sx={{ fontFamily: "GT Light" }} color="black">{type}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Furnishing</Typography>
                                <TextField 
                                    type="text"
                                    name="furnishing"
                                    value={formData.furnishing}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'100%'}}
                                />
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Property ID</Typography>
                                <TextField 
                                    type="text"
                                    name="propertyId"
                                    value={formData.propertyId}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'100%'}}
                                />
                            </Box>

                            <Box>
                                <Typography fontFamily={"GT Medium"} fontSize={'16px'} color="black">Completion</Typography>
                                <TextField 
                                    type="text"
                                    name="completion"
                                    value={formData.completion}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px', width:'100%'}}
                                />
                            </Box>
                        </Box>
                        

                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={'GT Bold'} fontSize={'22px'} color="black">Descriptions</Typography>

                        {descriptionData.map((description,index) => (
                            <Box key={index} display={'flex'} mb={'20px'}>
                                <TextField
                                    name="amenity"
                                    type="text"
                                    onChange={(e) => handleDescriptionChange(e, index)}
                                    placeholder={'Description'}
                                    value={description.description}
                                    multiline
                                    minRows={4}
                                    maxRows={40}
                                    fullWidth
                                />
                                
                                <IconButton onClick={() => DeleteDescription(index)}>
                                    <Delete sx={{fontSize:'30px', color:'black', border:'2px solid red', padding:'10px', borderRadius:"8px", ":hover":{backgroundColor:'red', color:'white'}}}/>
                                </IconButton>
                            </Box>
                        ))}

                            <Button onClick={newDescriptionInputField} variant="contained" style={{backgroundColor:'grey', color:'white', marginTop:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <AddOutlined sx={{color:'white', fontSize:'19px'}}/>
                                <Typography fontFamily={"GT Bold"} fontSize={'12px'}>Add new Paragraph</Typography>
                            </Button>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography fontFamily={'GT Bold'} fontSize={'22px'} color="black">Amenities</Typography>

                        {amenityData.map((amenity,index) => (
                            <Box key={index} display={'flex'} mb={'20px'}>
                                <TextField 
                                    name="amenity"
                                    type="text"
                                    value={amenity.amenity}
                                    placeholder={'Amenity'}
                                    onChange={(e) => handleAmenityChange(e ,index)}
                                />

                            <IconButton onClick={() => DeleteAmenity(index)}>
                                    <Delete sx={{fontSize:'30px', color:'black', border:'2px solid red', padding:'10px', borderRadius:"8px", ":hover":{backgroundColor:'red', color:'white'}}}/>
                                </IconButton>
                            </Box>
                        ))}

                            <Button onClick={newAmenityInputField} variant="contained" style={{backgroundColor:'grey', color:'white', marginTop:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <AddOutlined sx={{color:'white', fontSize:'19px'}}/>
                                <Typography fontFamily={"GT Bold"} fontSize={'12px'}>Add new Amenity</Typography>
                            </Button>
                    </Box>

                    <Button type="submit" variant="contained" sx={{width:'100%', marginTop:"20px",fontSize:'20px',fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>POST HOUSE</Button>

                </form>


            </Box>

        </Box>
     );
}
 
export default AddHouseMobile;