import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWidth from "../../hooks/useWidth";
import Card2Big from "../Card/Card2Big";
import WidthLayout from "../layout/WidthLayout";

interface Section2Props {
  title?: string;
}

const Section2: FC<Section2Props> = ({ title }) => {
  const width = useWidth();

  let slide = 4.3;

  if (width > 1024) {
    slide = 4.3;
  } else if (width > 768) {
    slide = 3.3;
  } else if (width > 600) {
    slide = 2.3;
  } else {
    slide = 1.5;
  }
  return (
    <Box mt={4}>
      <WidthLayout>
        {title && (
          <Typography mb={1} fontWeight='bold' fontSize={17}>
            {title}
          </Typography>
        )}
        <Swiper
          spaceBetween={50}
          slidesPerView={slide}
          navigation
          autoplay
          modules={[Navigation, Autoplay]}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item: number) => (
            <SwiperSlide key={item}>
              <Card2Big />
            </SwiperSlide>
          ))}
        </Swiper>
      </WidthLayout>
    </Box>
  );
};

export default Section2;
