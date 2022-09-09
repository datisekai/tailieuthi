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
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Stack
              direction='row'
              justifyContent={"center"}
              alignItems='center'
              spacing={2}
            >
              <LazyLoadImage
                src='/logo.jpg'
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                }}
              />
              <Typography fontSize={15} color='text.primary'>
                63.084
              </Typography>
            </Stack>
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent={{ md: "space-between", xs: "center" }}
              mt={3}
            >
              <Stack spacing={2} mt={1}>
                <Typography
                  fontWeight={"bold"}
                  textTransform='uppercase'
                  color='text.primary'
                >
                  Hỗ trợ khách hàng
                </Typography>
                <FlexBox justifyContent={"center"}>
                  <EmailIcon color='info' />
                  <Typography ml={1} color='text.primary'>
                    datly030102@gmail.com
                  </Typography>
                </FlexBox>
                <FlexBox justifyContent={"center"}>
                  <FacebookIcon color='info' />
                  <Typography ml={1} color='text.primary'>
                    facebook.com/datisekai
                  </Typography>
                </FlexBox>
              </Stack>
              <Stack spacing={2} mt={1}>
                <Typography
                  fontWeight={"bold"}
                  textTransform='uppercase'
                  color='text.primary'
                >
                  Giúp đỡ
                </Typography>
                <Typography color='text.primary'>Câu hỏi thường gặp</Typography>
                <Typography color='text.primary'>Điều khoản sử dụng</Typography>
              </Stack>
              <Stack spacing={2} mt={1}>
                <Typography
                  color='text.primary'
                  fontWeight={"bold"}
                  textTransform='uppercase'
                >
                  Giới thiệu
                </Typography>
                <Typography color='text.primary'>AD Document là gì?</Typography>
                <Typography color='text.primary'>
                  Ai tạo ra ADDocument?
                </Typography>
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
