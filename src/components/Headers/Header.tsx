import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FlexBox from "../FlexBox";
import WidthLayout from "../layout/WidthLayout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchHeader from "./SearchHeader";
import UploadIcon from "@mui/icons-material/Upload";
import FeedbackIcon from "@mui/icons-material/Feedback";
import useWidth from "../../hooks/useWidth";
import SearchIcon from "@mui/icons-material/Search";
import Popup from "./Popup";
import NavBar from "./NavBar";
import SearchMobile from "./SearchMobile";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Box
      sx={{
        bgcolor: secondary.main,
        height: 60,
        py: 0.5,
        position: {
          md: "relative",
          xs: "fixed",
        },
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <WidthLayout>
        <FlexBox
          sx={{
            display: {
              md: "flex",
              xs: "none",
            },
          }}
          alignItems={"center"}
          justifyContent='space-between'
        >
          <Stack direction={"row"} spacing={1}>
            <LazyLoadImage
              alt={"AD Document"}
              src={"/logo.jpg"} // use normal <img> attributes as props
              style={{ borderRadius: "50%", width: "50px" }}
            />
            <IconButton id='barPC'>
              <WidgetsIcon />
              <Popup />
            </IconButton>
          </Stack>
          <Box>
            <SearchHeader />
          </Box>
          <Stack direction={"row"} spacing={1}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<UploadIcon />}
            >
              Tải lên
            </Button>
            <Button
              variant='contained'
              color='warning'
              startIcon={<FeedbackIcon />}
            >
              Góp ý
            </Button>
            <Box
              sx={{ width: "1px", height: "20", backgroundColor: "#ccc" }}
            ></Box>
            <Button variant='outlined' color='info'>
              Đăng nhập
            </Button>
            <Button variant='outlined' color='info'>
              Đăng ký
            </Button>
          </Stack>
        </FlexBox>
        <FlexBox
          sx={{
            display: {
              md: "none",
              xs: "flex",
            },
          }}
          alignItems={"center"}
          justifyContent='space-between'
        >
          <IconButton onClick={() => setOpenNavbar(!openNavbar)}>
            <WidgetsIcon fontSize='large' />
          </IconButton>
          <LazyLoadImage
            alt={"AD Document"}
            src={"/logo.jpg"} // use normal <img> attributes as props
            style={{ borderRadius: "50%", width: "50px" }}
          />
          <IconButton onClick={() => setOpenSearch(!openSearch)}>
            <SearchIcon fontSize='large' />
          </IconButton>
          <NavBar open={openNavbar} handleClose={() => setOpenNavbar(false)} />
        </FlexBox>
      </WidthLayout>
      <SearchMobile
        open={openSearch}
        handleClose={() => setOpenSearch(false)}
      />
    </Box>
  );
};

export default Header;
