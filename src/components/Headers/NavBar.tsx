import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import UploadIcon from "@mui/icons-material/Upload";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LoginIcon from "@mui/icons-material/Login";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import randomColor from "../../utils/randomColor";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { clearAuth } from "../../redux/slice/AuthSlice";

interface NavBarProps {
  open: boolean;
  handleClose: () => void;
}

const NavBar: FC<NavBarProps> = ({ open, handleClose }) => {
  const router = useRouter();

  const { user } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearAuth());
    router.push("/");
  };

  return (
    <React.Fragment>
      <Drawer
        sx={{
          ".css-1o1k4n8-MuiPaper-root-MuiDrawer-paper": {
            top: "60px",
          },
          ".MuiDrawer-paperAnchorTop": {
            top: "60px",
          },
        }}
        anchor={"top"}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ width: "auto" }} role='presentation' onKeyDown={handleClose}>
          <List>
            <ListItem onClick={() => router.push("/tai-len")} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UploadIcon />
                </ListItemIcon>
                <ListItemText primary={"Tải lên"} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={() => router.push("/gop-y")} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedbackIcon />
                </ListItemIcon>
                <ListItemText primary={"Góp ý"} />
              </ListItemButton>
            </ListItem>
            {!user && (
              <ListItem
                onClick={() => router.push("/dang-nhap")}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Đăng nhập"} />
                </ListItemButton>
              </ListItem>
            )}
            {!user && (
              <ListItem onClick={() => router.push("/dang-ky")} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SaveAsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Đăng ký"} />
                </ListItemButton>
              </ListItem>
            )}
            {user && <Divider />}
            {user && (
              <ListItem
                onClick={() => router.push("/tai-lieu-cua-toi")}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={"Tài liệu của tôi"} />
                </ListItemButton>
              </ListItem>
            )}
            {user && (
              <ListItem
                onClick={() => router.push("/tai-lieu-da-luu")}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={"Tài liệu đã lưu"} />
                </ListItemButton>
              </ListItem>
            )}
            {user && (
              <ListItem onClick={() => router.push("/cai-dat")} disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Cài đặt"} />
                </ListItemButton>
              </ListItem>
            )}
            {user && (
              <ListItem onClick={handleLogout} disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Đăng xuất"} />
                </ListItemButton>
              </ListItem>
            )}
          </List>
          <Divider />
          <List>
            <ListItem>
              <Typography
                fontWeight={600}
                borderLeft={`5px solid #${randomColor()}`}
                p={1}
              >
                Đại học Sài Gòn
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                fontWeight={600}
                borderLeft={`5px solid #${randomColor()}`}
                p={1}
              >
                Đại học Sư Phạm
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default NavBar;
