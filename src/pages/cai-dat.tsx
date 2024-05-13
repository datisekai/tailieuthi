import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Tab,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import WidthLayout from "../components/layout/WidthLayout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "../hooks/reduxHooks";
import FlexBox from "../components/FlexBox";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import HistoryIcon from "@mui/icons-material/History";
import dayjs from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { confirmAlert } from "react-confirm-alert";
import { useRouter } from "next/router";

import SaveIcon from "@mui/icons-material/Save";
import UserLayout from "../components/layout/UserLayout";

const Settings = () => {
  const {
    palette: { grey, secondary },
  } = useTheme();

  const [value, setValue] = React.useState("1");

  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { user } = useAppSelector((state) => state.Auth);

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
    <UserLayout>
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
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Thông tin cá nhân" value="1" />
                    <Tab label="Đổi mật khẩu" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Stack spacing={2}>
                    <Avatar
                      sx={{ width: 70, height: 70 }}
                      alt="Remy Sharp"
                      src={`${user?.avatar || "/static/images/avatar/2.jpg"}`}
                    />
                    {user?.mssv && (
                      <FlexBox alignItems={"center"}>
                        <CreditCardIcon color="info" />{" "}
                        <Typography color="text.primary" ml={1}>
                          Mã sinh viên:{" "}
                          <strong style={{ fontWeight: 500 }}>
                            {user.mssv}
                          </strong>
                        </Typography>
                      </FlexBox>
                    )}
                    {user?.email && (
                      <FlexBox alignItems={"center"}>
                        <EmailIcon color="info" />{" "}
                        <Typography color="text.primary" ml={1}>
                          Email:{" "}
                          <strong style={{ fontWeight: 500 }}>
                            {user.email}
                          </strong>
                        </Typography>
                      </FlexBox>
                    )}
                    {user?.name && (
                      <FlexBox alignItems={"center"}>
                        <BadgeIcon color="info" />{" "}
                        <Typography color="text.primary" ml={1}>
                          Tên của bạn:{" "}
                          <strong style={{ fontWeight: 500 }}>
                            {user.name}
                          </strong>
                        </Typography>
                      </FlexBox>
                    )}
                    {user?.username && (
                      <FlexBox alignItems={"center"}>
                        <AccountCircleIcon color="info" />{" "}
                        <Typography color="text.primary" ml={1}>
                          Username:{" "}
                          <strong style={{ fontWeight: 500 }}>
                            {user.username}
                          </strong>
                        </Typography>
                      </FlexBox>
                    )}
                    {user?.status && (
                      <FlexBox alignItems={"center"}>
                        <SignalWifiStatusbar4BarIcon color="info" />{" "}
                        <Typography color="text.primary" ml={1}>
                          Trạng thái:{" "}
                          <strong style={{ fontWeight: 500 }}>
                            {user.status ? "Hoạt động" : "Bị khóa"}
                          </strong>
                        </Typography>
                      </FlexBox>
                    )}
                    {user?.createdAt && (
                      <FlexBox alignItems={"center"}>
                        <HistoryIcon color="info" />{" "}
                        <Typography color="text.primary" ml={1}>
                          Thời gian lập:{" "}
                          <strong style={{ fontWeight: 500 }}>
                            {dayjs(user.createdAt).format("DD/MM/YYYY")}
                          </strong>
                        </Typography>
                      </FlexBox>
                    )}
                  </Stack>
                </TabPanel>
                <TabPanel value="2">
                  <Stack spacing={2}>
                    <TextField
                      id="outlined-basic"
                      label="Mật khẩu cũ"
                      variant="outlined"
                      sx={{
                        div: {
                          bgcolor: secondary.main,
                        },
                      }}
                      size="medium"
                    />{" "}
                    <TextField
                      id="outlined-basic"
                      label="Mật khẩu mới"
                      variant="outlined"
                      sx={{
                        div: {
                          bgcolor: secondary.main,
                        },
                      }}
                      size="medium"
                    />{" "}
                    <TextField
                      id="outlined-basic"
                      label="Nhập lại mật khẩu mới"
                      variant="outlined"
                      sx={{
                        div: {
                          bgcolor: secondary.main,
                        },
                      }}
                      size="medium"
                    />{" "}
                    <FlexBox
                      alignItems={"center"}
                      justifyContent="space-between"
                    >
                      <Button
                        startIcon={<CloseIcon />}
                        size="large"
                        variant="contained"
                        color="info"
                        onClick={handleClose}
                      >
                        Đóng
                      </Button>
                      <Button
                        startIcon={<SaveIcon />}
                        size="large"
                        variant="contained"
                        color="primary"
                      >
                        Lưu thay đổi
                      </Button>
                    </FlexBox>
                  </Stack>
                </TabPanel>
              </TabContext>
            </Box>
          </WidthLayout>
        </Box>
      </MainLayout>
    </UserLayout>
  );
};

export default Settings;
