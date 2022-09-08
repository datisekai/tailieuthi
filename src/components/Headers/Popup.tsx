import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import randomColor from "../../utils/randomColor";
import FlexBox from "../FlexBox";

const Popup = () => {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Box id={"barPCChildren"} sx={{ bgcolor: secondary.main }}>
      <FlexBox>
        <Stack
          spacing={1}
          sx={{
            maxHeight: "200px",
            overflowY: "scroll",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Typography
            fontWeight={600}
            borderLeft={`5px solid #${randomColor()}`}
            p={1}
          >
            Đại học Sài Gòn
          </Typography>
          <Typography
            fontWeight={600}
            borderLeft={`5px solid #${randomColor()}`}
            p={1}
          >
            Đại học Sư phạm
          </Typography>
        </Stack>
        <Box
          sx={{
            ml: 2,
            bgcolor: `red`,
            flex: 1,
            textAlign: "left",
            p: 1,
          }}
        >
          <Typography fontWeight={600} color='secondary'>
            Đại học Sài Gòn
          </Typography>
          <Stack
            spacing={1}
            sx={{
              ml: 2,
              flex: 1,
              textAlign: "left",
              maxHeight: "100px",
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Typography color='secondary'>Công nghệ thông tin</Typography>
            <Typography color='secondary'>Tài chính - kế toán</Typography>
          </Stack>
        </Box>
      </FlexBox>
    </Box>
  );
};

export default Popup;
