import { Stack, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styleLineClamp from "../../utils/styleClamp";
import FlexBox from "../FlexBox";
const CardSearchM = () => {
  return (
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
          Datisekai
        </Typography>
        <Typography color='text.primary' sx={styleLineClamp(4)}>
          Tải lên: 10 tài liệu
        </Typography>
        <Typography color='text.primary' sx={styleLineClamp(1)}>
          Ngày tham gia: 10/10/2022
        </Typography>
      </Stack>
    </FlexBox>
  );
};

export default CardSearchM;
