import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EmailIcon from "@mui/icons-material/Email";
import FlexBox from "./FlexBox";
import WidthLayout from "./layout/WidthLayout";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <>
      <Box bgcolor={secondary.main} pt={2} pb={3}>
        <WidthLayout>
          {" "}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <LazyLoadImage
              src='/logo.jpg'
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            />
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent={{ md: "space-between", xs: "center" }}
              mt={3}
            >
              <Stack spacing={2} mt={1}>
                <Typography fontWeight={"bold"} textTransform='uppercase'>
                  Hỗ trợ khách hàng
                </Typography>
                <FlexBox justifyContent={"center"}>
                  <EmailIcon />
                  <Typography ml={1}>datly030102@gmail.com</Typography>
                </FlexBox>
                <FlexBox justifyContent={"center"}>
                  <FacebookIcon />
                  <Typography ml={1}>facebook.com/datisekai</Typography>
                </FlexBox>
              </Stack>
              <Stack spacing={2} mt={1}>
                <Typography fontWeight={"bold"} textTransform='uppercase'>
                  Giúp đỡ
                </Typography>
                <Typography>Câu hỏi thường gặp</Typography>
                <Typography>Điều khoản sử dụng</Typography>
              </Stack>
              <Stack spacing={2} mt={1}>
                <Typography fontWeight={"bold"} textTransform='uppercase'>
                  Giới thiệu
                </Typography>
                <Typography>AD Document là gì?</Typography>
                <Typography>Ai tạo ra ADDocument?</Typography>
              </Stack>
            </Stack>
          </Box>
        </WidthLayout>
      </Box>
      <FlexBox
        alignItems={"center"}
        justifyContent='center'
        bgcolor='#ccc'
        height={40}
      >
        <Typography>Copyright © 2022. Design by Datisekai && AnMhg</Typography>
      </FlexBox>
    </>
  );
};

export default Footer;
