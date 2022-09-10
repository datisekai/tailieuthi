import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import Breadcumbs from "../components/Breadcumbs";
import CardUserDetail from "../components/Card/CardUserDetail";
import FlexBox from "../components/FlexBox";
import MainLayout from "../components/layout/MainLayout";
import WidthLayout from "../components/layout/WidthLayout";
import styleLineClamp from "../utils/styleClamp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import Card2 from "../components/Card/Card2";

const DetailDocument = () => {
  const {
    palette: { grey, text },
  } = useTheme();
  return (
    <MainLayout isSlider={false}>
      <Box
        sx={{
          bgcolor: grey[900],
          pb: 10,
          pt: 2,
          mt: { md: 0, xs: "60px" },
          minHeight: "100vh",
        }}
      >
        <WidthLayout width={800}>
          <Stack spacing={2}>
            <Breadcumbs />
            <Typography
              sx={styleLineClamp(2)}
              fontWeight={"bold"}
              fontSize={22}
              color='text.primary'
            >
              Đề thi cuối học kì 1 Công nghệ phần mềm
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <FlexBox alignItems={"center"}>
                <AccessTimeIcon fontSize='small' color='info' />
                <Typography color='text.primary' ml={0.5}>
                  Ngày đăng: 10/9/2022
                </Typography>
              </FlexBox>
              <FlexBox alignItems={"center"}>
                <MergeTypeIcon fontSize='small' color='info' />
                <Typography color='text.primary'>Loại: Môn chung</Typography>
              </FlexBox>
            </Stack>
            <CardUserDetail />
            <Box>
              <Typography
                mt={2}
                color={"text.primary"}
                fontWeight='500'
                fontSize={18}
              >
                Tài liệu liên quan
              </Typography>
              <Grid container spacing={2} mt={0}>
                {[1, 2, 3, 4].map((item: number, index: number) => (
                  <Grid key={index} item xs={12} md={6}>
                    <Card2 />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </WidthLayout>
      </Box>
    </MainLayout>
  );
};

export default DetailDocument;
