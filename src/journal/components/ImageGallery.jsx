import { ImageListItem, ImageList } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight="auto">
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="notes-images"
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
