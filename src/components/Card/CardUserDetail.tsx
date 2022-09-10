import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import FlexBox from "../FlexBox";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlockIcon from "@mui/icons-material/Block";
import AddIcon from "@mui/icons-material/Add";

const CardUserDetail = () => {
  return (
    <Stack spacing={1}>
      <FlexBox mt={1} alignItems={"center"}>
        <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
          <ArticleIcon color='action' fontSize='small' />
          <Typography color='text.primary'>4</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} spacing={0.5} ml={1}>
          <RemoveRedEyeIcon color='action' fontSize='small' />
          <Typography color='text.primary'>4</Typography>
        </Stack>
      </FlexBox>
      <FlexBox alignItems={"center"} justifyContent='space-between'>
        <FlexBox alignItems={"center"}>
          <LazyLoadImage
            src='/images/not-user.png'
            style={{ width: 48, height: 48 }}
          />
          <Stack spacing={1} ml={1}>
            <Typography color='text.primary'>Datisekai</Typography>
            <FlexBox
              alignItems={"center"}
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <BlockIcon fontSize='small' color='info' />
              <Typography color='text.primary' ml={0.5}>
                Báo cáo
              </Typography>
            </FlexBox>
          </Stack>
        </FlexBox>
        <Button startIcon={<AddIcon />} variant='contained' color='primary'>
          Lưu
        </Button>
      </FlexBox>
      <Stack spacing={1}>
        <LazyLoadImage src='/images/detail-test.jpg' width={"100%"} />
        <LazyLoadImage src='/images/detail-test.jpg' width={"100%"} />
        <LazyLoadImage src='/images/detail-test.jpg' width={"100%"} />
        <LazyLoadImage src='/images/detail-test.jpg' width={"100%"} />
      </Stack>
    </Stack>
  );
};

export default CardUserDetail;
