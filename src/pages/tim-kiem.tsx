import {
  Box,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FlexBox from "../components/FlexBox";
import MainLayout from "../components/layout/MainLayout";
import WidthLayout from "../components/layout/WidthLayout";
import SelectC from "../components/Select";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { secondary } from "../theme/color";
import CardSearch from "../components/Card/CardSearch";
import CardSearchM from "../components/Card/CardSearchM";

const Search = () => {
  const {
    palette: { grey, primary, secondary },
  } = useTheme();

  const [flag, setFlag] = useState(0); // 0->tailieu, 1->thanhvien

  return (
    <MainLayout isSlider={false}>
      <Box sx={{ bgcolor: grey[900], minHeight: "100vh", pb: 10, pt: 2 }}>
        <WidthLayout>
          <Stack spacing={2} mt={{ md: 0, xs: "60px" }}>
            <Typography color='text.primary' fontSize={17}>
              Kết quả với từ khóa <strong>&quot;abc&quot;</strong>
            </Typography>
            {flag === 0 && (
              <Stack direction={"row"} spacing={2} flexWrap='nowrap' mt={1}>
                <SelectC label='Trường học' />
                <SelectC label='Chuyên ngành' />
                <SelectC label='Học phần' />
                <SelectC label='Năm học' />
              </Stack>
            )}
            <FlexBox sx={{ bgcolor: secondary.main, py: 1, minHeight: "50vh" }}>
              <Stack
                spacing={1}
                sx={{
                  width: "30%",
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                }}
              >
                <div onClick={() => setFlag(0)}>
                  <FlexBox
                    alignItems={"center"}
                    sx={{
                      bgcolor: flag === 0 ? primary.main : "none",
                      py: 1,
                      px: 2,
                      position: "relative",
                      "::after": {
                        content: '""',
                        position: "absolute",
                        borderWidth: "20px 30px",
                        borderColor: `transparent transparent transparent ${primary.main} `,
                        borderStyle: "solid",
                        right: -60,
                        display: flag === 0 ? "block" : "none",
                      },
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <ArticleIcon color={flag === 0 ? "secondary" : "info"} />
                    <Typography
                      ml={1}
                      fontSize={16}
                      color={flag === 0 ? "secondary" : "text.primary"}
                    >
                      Tài liệu (2,334)
                    </Typography>
                  </FlexBox>
                </div>
                <div onClick={() => setFlag(1)}>
                  <FlexBox
                    alignItems={"center"}
                    sx={{
                      bgcolor: flag === 1 ? primary.main : "none",
                      py: 1,
                      px: 2,
                      position: "relative",
                      "::after": {
                        content: '""',
                        position: "absolute",
                        borderWidth: "20px 30px",
                        borderColor: `transparent transparent transparent ${primary.main} `,
                        borderStyle: "solid",
                        right: -60,
                        display: flag === 1 ? "block" : "none",
                      },
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <AccountCircleIcon
                      color={flag === 1 ? "secondary" : "info"}
                    />
                    <Typography
                      ml={1}
                      fontSize={16}
                      color={flag === 1 ? "secondary" : "text.primary"}
                    >
                      Thành viên (55)
                    </Typography>
                  </FlexBox>
                </div>
              </Stack>
              <Stack
                spacing={2}
                ml={{ md: "68px", xs: "0" }}
                width={{ md: "70%", xs: "100%" }}
              >
                <CardSearch />
                <CardSearch />
                <CardSearch />
                <CardSearch />
                <FlexBox alignItems={"center"} justifyContent='center'>
                  <Pagination count={10} variant='outlined' shape='rounded' />
                </FlexBox>
              </Stack>
            </FlexBox>
          </Stack>
        </WidthLayout>
      </Box>
    </MainLayout>
  );
};

export default Search;
