import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import FlexBox from "../components/FlexBox";
import MainLayout from "../components/layout/MainLayout";
import WidthLayout from "../components/layout/WidthLayout";
import SelectC from "../components/Select";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { confirmAlert } from "react-confirm-alert";
import { useRouter } from "next/router";

const Upload = () => {
  const {
    palette: { grey, secondary, text },
  } = useTheme();

  const router = useRouter();

  const handleClose = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => router.push("/"),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <MainLayout isSlider={false}>
      <Box
        sx={{
          bgcolor: grey[900],
          pb: 10,
          pt: 2,
          mt: { md: 0, xs: "60px" },
        }}
      >
        <WidthLayout>
          <Typography
            mt={2}
            color='text.primary'
            fontWeight={600}
            textAlign='center'
            fontSize={18}
          >
            Chia sẽ tài liệu lên tailieuthi.site
          </Typography>
          <Typography
            color='text.primary'
            textAlign='center'
            fontSize={17}
            mt={1}
          >
            Tailieuthi.site mang đến cho bạn một kì thi tốt đẹp
          </Typography>
          <Box width={"100%"} bgcolor={secondary.main} p={2} mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <SelectC label='Trường học' />
              </Grid>
              <Grid item xs={6} md={4}>
                <SelectC label='Chuyên ngành' />
              </Grid>
              <Grid item xs={6} md={4}>
                <SelectC label='Học phần' />
              </Grid>
              <Grid item xs={6} md={4}>
                <SelectC label='Năm học' />
              </Grid>
              <Grid item xs={6} md={4}>
                <SelectC label='Học kì' />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label='Tên tài liệu'
                  size={"medium"}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <input type='file' style={{ color: text.primary }} multiple />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id='demo-row-radio-buttons-group-label'>
                    Loại tải lên
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                    value={"female"}
                  >
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      sx={{
                        ".css-jspes8-MuiTypography-root": {
                          color: text.primary,
                        },
                      }}
                      label='Ẩn danh'
                    />
                    <FormControlLabel
                      value='male'
                      control={<Radio />}
                      sx={{
                        ".css-jspes8-MuiTypography-root": {
                          color: text.primary,
                        },
                      }}
                      label='Không ẩn danh'
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FlexBox alignItems={"center"} justifyContent='space-between'>
                  <Button
                    startIcon={<CloseIcon />}
                    size='large'
                    variant='contained'
                    color='info'
                    onClick={handleClose}
                  >
                    Đóng
                  </Button>
                  <Button
                    startIcon={<FileUploadIcon />}
                    size='large'
                    variant='contained'
                    color='primary'
                  >
                    Tải lên
                  </Button>
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </WidthLayout>
      </Box>
    </MainLayout>
  );
};

export default Upload;
