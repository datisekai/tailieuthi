import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "/images/onthi.jpg",
  "/images/docsach.jpg",
  "/images/wb.jpg",
  "/images/sg.jpg",
];

const Slider = () => {
  return (
    <Box mt={{ md: 0, xs: "60px" }}>
      {/* <WidthLayout> */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination
        autoplay
        modules={[Navigation, Autoplay, Pagination]}
      >
        {images.map((item: string) => (
          <SwiperSlide key={item}>
            <LazyLoadImage
              alt={"Logo"}
              height={"100%"}
              src={item} // use normal <img> attributes as props
              width={"100%"}
              style={{
                aspectRatio: "980/180",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </WidthLayout> */}
    </Box>
  );
};

export default Slider;
