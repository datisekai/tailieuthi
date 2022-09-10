import { Stack, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styleLineClamp from "../../utils/styleClamp";
import FlexBox from "../FlexBox";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";

const CardSearch = () => {
  return (
    <Link href='/1'>
      <FlexBox alignItems={"center"}>
        <LazyLoadImage
          src='/images/test.webp'
          style={{ aspectRatio: "7/8", width: "130px" }}
        />
        <Stack ml={2} spacing={1}>
          <Typography
            color='text.primary'
            sx={styleLineClamp(1)}
            fontSize={15}
            fontWeight='bold'
          >
            Tổng hợp các hàm VB theo ABC
          </Typography>
          <Typography color='text.primary' sx={styleLineClamp(4)}>
            Tổng hợp các hàm VB theo ABC . firstdayofweekvbUseSystem = 0Sử dụng
            NLS API setting.VbSunday = 1Sunday (default)vbMonday =
            2MondayvbTuesday = 3TuesdayvbWednesday = 4WednesdayvbThursday.
            firstdayofweekvbUseSystem = 0Sử dụng NLS API setting.VbSunday =
            1Sunday (default)vbMonday
          </Typography>
          <Stack direction='row' spacing={2} alignItems={"center"}>
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
      </FlexBox>
    </Link>
  );
};

export default CardSearch;
