import { Box } from "@mui/material";
import React, { FC } from "react";
import { ChildrenProps } from "../../models";
import Footer from "../Footer";
import Header from "../Headers/Header";
import Slider from "../Slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Slider />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
