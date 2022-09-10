import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
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
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useRouter } from "next/router";
import { clearAuth } from "../../redux/slice/AuthSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsNav from "./SettingsNav";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const {
    palette: { secondary },
  } = useTheme();

  const { user } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter();

  const handleLogout = () => {
    dispatch(clearAuth());
    router.push("/");
  };

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
        zIndex: 5000,
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
            <Link href='/'>
              <LazyLoadImage
                alt={"tailieuthi.site"}
                src={"/logo2.jpg"} // use normal <img> attributes as props
                style={{ borderRadius: "50%", width: "50px" }}
              />
            </Link>
            <IconButton id='barPC'>
              <WidgetsIcon />
              <Popup />
            </IconButton>
          </Stack>
          <Box>
            <SearchHeader />
          </Box>
          <Stack direction={"row"} spacing={1}>
            <Link href='/tai-len'>
              <Button
                variant='contained'
                color='primary'
                startIcon={<UploadIcon />}
              >
                Tải lên
              </Button>
            </Link>
            <Link href='/gop-y'>
              <Button
                variant='contained'
                color='warning'
                startIcon={<FeedbackIcon />}
              >
                Góp ý
              </Button>
            </Link>
            <Box
              sx={{ width: "1px", height: "20", backgroundColor: "#ccc" }}
            ></Box>
            {!user && (
              <Link href={"/dang-nhap"}>
                <Button variant='outlined' color='info'>
                  Đăng nhập
                </Button>
              </Link>
            )}
            {!user && (
              <Link href={"/dang-ky"}>
                <Button variant='outlined' color='info'>
                  Đăng ký
                </Button>
              </Link>
            )}
            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt='Remy Sharp'
                      src={`${user.avatar || "/static/images/avatar/2.jpg"}`}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => router.push("/tai-lieu-cua-toi")}>
                    <Typography textAlign='center'>
                      {"Tài liệu của tôi"}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/tai-lieu-da-luu")}>
                    <Typography textAlign='center'>
                      {"Tài liệu đã lưu"}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/cai-dat")}>
                    <Typography textAlign='center'>{"Cài đặt"}</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign='center'>{"Đăng xuất"}</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
            <IconButton onClick={() => setOpenSetting(true)}>
              <SettingsIcon />
            </IconButton>
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
          <FlexBox>
            <IconButton onClick={() => setOpenNavbar(!openNavbar)}>
              <WidgetsIcon fontSize='medium' />
            </IconButton>
            <IconButton onClick={() => router.push("/tai-len")}>
              <FileUploadIcon fontSize='medium' />
            </IconButton>
          </FlexBox>
          <Link href='/'>
            <LazyLoadImage
              alt={"tailieuthi.site"}
              src={"/logo2.jpg"} // use normal <img> attributes as props
              style={{ borderRadius: "50%", width: "50px" }}
            />
          </Link>
          <FlexBox alignItems={"center"}>
            <IconButton onClick={() => setOpenSearch(!openSearch)}>
              <SearchIcon fontSize='medium' />
            </IconButton>
            <IconButton onClick={() => setOpenSetting(true)}>
              <SettingsIcon />
            </IconButton>
          </FlexBox>
          <NavBar open={openNavbar} handleClose={() => setOpenNavbar(false)} />
        </FlexBox>
      </WidthLayout>
      <SearchMobile
        open={openSearch}
        handleClose={() => setOpenSearch(false)}
      />
      <SettingsNav
        open={openSetting}
        handleClose={() => setOpenSetting(false)}
      />
    </Box>
  );
};

export default Header;
