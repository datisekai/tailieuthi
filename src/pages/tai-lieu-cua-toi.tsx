import { Box, Grid, Pagination, Typography, useTheme } from "@mui/material";
import React from "react";
import Card1 from "../components/Card/Card1";
import FlexBox from "../components/FlexBox";
import MainLayout from "../components/layout/MainLayout";
import WidthLayout from "../components/layout/WidthLayout";

const MyDocument = () => {
  const {
    palette: { grey },
  } = useTheme();
  return (
    <MainLayout isSlider={false}>
      <Box
        sx={{
          bgcolor: grey[900],
          pb: 10,
          pt: 2,
          mt: { md: 0, xs: "60px" },
          minHeight: "70vh",
        }}
      >
        <WidthLayout>
          <Typography color='text.primary' fontWeight={600} fontSize={17}>
            Tài liệu của bạn
          </Typography>
          <Grid container spacing={2} mt={1}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
              <Grid item xs={6} md={4} lg={3}>
                <Card1 />
              </Grid>
            ))}
          </Grid>
          <FlexBox mt={5} alignItems={"center"} justifyContent='center'>
            <Pagination
              color='primary'
              count={10}
              variant='outlined'
              shape='rounded'
            />
          </FlexBox>
        </WidthLayout>
      </Box>
    </MainLayout>
  );
};

export default MyDocument;
