import {
  Box,
  Button,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import FlexBox from "../components/FlexBox";
import MainLayout from "../components/layout/MainLayout";
import WidthLayout from "../components/layout/WidthLayout";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { confirmAlert } from "react-confirm-alert";
import { useRouter } from "next/router";

const Feedback = () => {
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
  const {
    palette: { grey, secondary },
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
          <Typography mt={2} fontWeight={600} textAlign='center' fontSize={18}>
            Góp ý đến tailieuthi.site
          </Typography>
          <Typography textAlign='center' fontSize={17} mt={1}>
            Tailieuthi luôn lắng nghe tất cả góp ý của người dùng để cải thiện
            hơn
          </Typography>
          <Box width={"100%"} bgcolor={secondary.main} p={2} mt={2}>
            <TextareaAutosize
              aria-label='minimum height'
              minRows={10}
              placeholder='Đây là góp ý của bạn...'
              style={{ width: "100%", padding: "16px" }}
            />
            <FlexBox
              mt={2}
              alignItems={"center"}
              justifyContent='space-between'
            >
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
          </Box>
        </WidthLayout>
      </Box>
    </MainLayout>
  );
};

export default Feedback;
