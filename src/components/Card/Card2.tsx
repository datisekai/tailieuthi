import { Stack, Typography } from "@mui/material";
import React from "react";
import styleLineClamp from "../../utils/styleClamp";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Card2 = () => {
  return (
    <Stack spacing={1}>
      <Typography sx={styleLineClamp(1)}>
        Đề thi cuối kì Chủ nghĩa xã hội khoa học
      </Typography>
      <Stack direction='row' spacing={2}>
        <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
          <ArticleIcon color='action' fontSize='small' />
          <Typography>4</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
          <RemoveRedEyeIcon color='action' fontSize='small' />
          <Typography>4</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card2;
