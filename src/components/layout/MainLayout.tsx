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
import "react-confirm-alert/src/react-confirm-alert.css";

interface MainLayoutProps {
  children: React.ReactNode;
  isSlider?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, isSlider = true }) => {
  return (
    <Box>
      <Header />
      {isSlider && <Slider />}
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
