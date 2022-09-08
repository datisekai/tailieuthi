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

interface NavBarProps {
  open: boolean;
  handleClose: () => void;
}

const NavBar: FC<NavBarProps> = ({ open, handleClose }) => {
  return (
    <React.Fragment>
      <Drawer
        sx={{
          ".css-1o1k4n8-MuiPaper-root-MuiDrawer-paper": {
            top: "60px",
          },
        }}
        anchor={"top"}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{ width: "auto" }}
          role='presentation'
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UploadIcon />
                </ListItemIcon>
                <ListItemText primary={"Tải lên"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedbackIcon />
                </ListItemIcon>
                <ListItemText primary={"Góp ý"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={"Đăng nhập"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SaveAsIcon />
                </ListItemIcon>
                <ListItemText primary={"Đăng ký"} />
              </ListItemButton>
            </ListItem>
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
