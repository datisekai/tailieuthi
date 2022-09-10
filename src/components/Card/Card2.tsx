import { Stack, Typography } from "@mui/material";
import React from "react";
import styleLineClamp from "../../utils/styleClamp";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";

const Card2 = () => {
  return (
    <Link href='/1'>
      <Stack
        spacing={1}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography
          sx={{
            ...styleLineClamp(1),
            ":hover": {
              textDecoration: "underline",
            },
          }}
          color='text.primary'
        >
          Đề thi cuối kì Chủ nghĩa xã hội khoa học
        </Typography>
        <Stack direction='row' spacing={2}>
          <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
            <ArticleIcon color='action' fontSize='small' />
            <Typography color='text.primary'>4</Typography>
          </Stack>
          <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
            <RemoveRedEyeIcon color='action' fontSize='small' />
            <Typography color='text.primary'>4</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Card2;
