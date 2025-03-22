import { Box, Button, Divider, FormControl, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PropertyDisplayNavbar from "./PropertyDisplayNavBar";
import AddHouseMobile from "./AddHouseMobile";
import { DeleteForever } from "@mui/icons-material";
import AddOutlined from "@mui/icons-material/AddOutlined";


function AddHouse (){

    const [filePreview,setFilePreview] = useState();
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

    const [descriptionData, setDescriptionData] = useState([{description:""}])

    const [amenityData, setAmenityData] = useState([{amenity:""}])

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
                preview:URL.createObjectURL(file),
            })
        );

    }

        // Reset input field
        event.target.value = "";
    }
    
    

    // Function to handle the update of description input field
    function handleDescriptionChange(event,index){
        const values = [...descriptionData]
        values[index].description = event.target.value;
        setDescriptionData(values);

        setFormData(prevFormData => ({
            ...prevFormData,
            descriptions:descriptionData
        }))
    }

    // Function to handle adding new description inputfields
    function handleNewDescriptionInputField(){
        setDescriptionData([...descriptionData, {description:""}]);
    }

    // Function to delete a description field
    function DeleteDescription(index){
        const newDescriptionField = [...descriptionData]
        newDescriptionField.splice(index, 1);
        setDescriptionData(newDescriptionField);
    }

    function handleAmenityChange(event,index) {
        const values = [...amenityData]
        values[index].amenity = event.target.value;
        setAmenityData(values);

        setFormData(prevData => ({
            ...prevData,
            amenities: amenityData
        }));
    }    

    // function to handle the addition of input fields
    function handleNewAmenityInputField(){
        setAmenityData([...amenityData, {amenity:""}]);
    }

    // function to remove an amenity input field by index
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

    function DeletePhoto(index){
        setFormData(prevFormData => ({
            ...prevFormData,
            photos:prevFormData.photos.filter((_,i) => i !== index)
        }))

    }

    function handleSubmit(event){

        event.preventDefault();    

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
        
        if (formData.photos && formData.photos.length > 0){
            formData.photos.forEach(photoObject => {
                if(photoObject.photo instanceof File){
                    formDataToSend.append('photos', photoObject.photo)
                }else {
                    console.error("Invalid photo file:", photoObj.photo);
                }
            })
        }

        // console.log(amenityData)
        console.log(formData)


        fetch("https://real-estate-server-0d4s.onrender.com/houses",{
            method:"POST",
            credentials: 'include',
            body:formDataToSend
        })
        .then(response => {
            if(!response.ok){
                return response.text().then(text => {
                    throw new Error(`Network response was not ok: ${text}`);
                });
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
                photos:[],
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
        
            <Box paddingLeft={'300px'} paddingRight={'300px'} paddingTop={'20px'} paddingBottom={'30px'}>
                <Typography fontFamily={"GT Ultrabold"} fontSize={"40px"} color="black" textAlign={'center'}>CREATE A HOUSE LISTING</Typography>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', backgroundColor:'white', borderRadius:'15px', border:'2px dashed #ddd', padding:'30px'}}>

                    <Box>
                        <TableContainer>
                            <Table>
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
                                                {filePreview ? (
                                                    <img 
                                                        src={filePreview}
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

                                            {filePreview && <Button onClick={() => handleImageUpload()} sx={{fontFamily:'GT Bold', backgroundColor:'white', color:'orange', ml:'520px', mt:'20px'}}>Change Photo</Button>}
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
                            </Table>
                        </TableContainer>
                        <Button onClick={AddPhoto} variant="contained" sx={{margin:'20px', fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>ADD PHOTO</Button>

                    </Box>
                    
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
                                <TextField 
                                    type="date"
                                    name="year_built"
                                    value={formData.year_built}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{mb:'20px'}}
                                />
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
                        <Typography color="black" fontFamily={"GT Bold"} fontSize={'30px'}>Descriptions</Typography>

                        {descriptionData.map((description,index) => (
                            <Box key={index} display={'flex'} alignItems={'center'} mb={'20px'}>
                                <TextField 
                                    type="text"
                                    value={description.description}
                                    name="description"
                                    variant="outlined"
                                    placeholder={'Description'}
                                    onChange={(e) => handleDescriptionChange(e, index)}
                                    multiline
                                    minRows={4}
                                    maxRows={20}
                                    size="small"
                                    fullWidth
                                                
                                />

                                <IconButton onClick={() => DeleteDescription(index)}>
                                    <DeleteForever sx={{fontSize:'30px', color:'black', border:'2px solid red', padding:'10px', borderRadius:"8px", ":hover":{backgroundColor:'red', color:'white'}}}/>
                                </IconButton>
                            </Box>
                        ))}

                            <Button onClick={handleNewDescriptionInputField} variant="contained" style={{backgroundColor:'grey', color:'white', marginTop:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <AddOutlined sx={{color:'white', fontSize:'19px'}}/>
                                <Typography fontFamily={"GT Bold"} fontSize={'12px'}>Add new Paragraph</Typography>
                            </Button>
                    </Box>

                    <Divider orientation="horizontal" style={{borderColor:"#ddd", marginTop:'20px', marginBottom:'20px'}}/>

                    <Box>
                        <Typography color="black" fontFamily={"GT Bold"} fontSize={'30px'}>Amenities</Typography>

                        <Box>

                            {amenityData.map((amenity,index) => (
                                <Box key={index} display={'flex'} alignItems={'center'} gap={'10px'} mb={'20px'}>
                                    <TextField 
                                        type="text"
                                        value={amenity.amenity}
                                        name="amenity"
                                        variant="outlined"
                                        placeholder={'Amenity'}
                                        onChange={(e) => handleAmenityChange(e,index)}
                                    />

                                    <IconButton onClick={() => DeleteAmenity(index)}>
                                        <DeleteForever sx={{fontSize:'30px', color:'black', border:'2px solid red', padding:'10px', borderRadius:"8px", ":hover":{backgroundColor:'red', color:'white'}}}/>
                                    </IconButton>
                                </Box>
                            ))}

                            <Button onClick={handleNewAmenityInputField} variant="contained" style={{backgroundColor:'grey', color:'white', marginTop:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <AddOutlined sx={{color:'white', fontSize:'19px'}}/>
                                <Typography fontFamily={"GT Bold"} fontSize={'12px'}>Add new Amenity</Typography>
                            </Button>

                        </Box>
                    </Box>

                    <Button type="submit" variant="contained" sx={{marginTop:'30px', margin:'auto',fontSize:'20px',fontFamily:"GT Bold", backgroundColor:'orange', color:"white", ":hover":{backgroundColor:'white', color:'orange'} }}>POST HOUSE</Button>

                </form>

            </Box>

        </Box>
    )}
    </Box>
     );
}
 
export default AddHouse;