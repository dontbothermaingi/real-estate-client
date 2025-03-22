import { Box, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

function ImageGallery ({images}){
    const isMobile = useMediaQuery("(max-width:768px)")

    return ( 
        <Box>

            {isMobile ? (
                <Box padding={'10px'}>
                    <ImageList sx={{ width: 300, height: 350 }} cols={2} rowHeight={164}>
                        {images.map((image,index) => (
                            <ImageListItem key={index}>
                                <img
                                    srcSet={`http://127.0.0.1:9712/images/${image.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`http://127.0.0.1:9712/images/${image.photo}?w=164&h=164&fit=crop&auto=format`}
                                    alt={image.id}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            ):(
                <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
                {images.map((image,index) => (
                    <ImageListItem key={index}>
                        <img
                            srcSet={`http://127.0.0.1:9712/images/${image.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`http://127.0.0.1:9712/images/${image.photo}?w=164&h=164&fit=crop&auto=format`}
                            alt={image.id}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            )}
            
        </Box>
     );
}
 
export default ImageGallery;