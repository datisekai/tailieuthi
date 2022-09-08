import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Stack, useTheme } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styleLineClamp from "../../utils/styleClamp";
import PersonIcon from "@mui/icons-material/Person";
import FlexBox from "../FlexBox";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function Card1() {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: secondary.main,
        ".css-46bh2p-MuiCardContent-root:last-child": {
          pb: 1,
        },
      }}
    >
      <LazyLoadImage src='/images/test.webp' style={{ aspectRatio: "7/8" }} />
      <CardContent>
        <Typography
          sx={styleLineClamp(2)}
          gutterBottom
          variant='h5'
          component='div'
          fontSize={18}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography
          variant='body2'
          fontSize={14}
          component='span'
          color='primary'
        >
          datisekai
        </Typography>
        <FlexBox mt={1} justifyContent={"space-between"} alignItems={"center"}>
          <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
            <ArticleIcon color='action' fontSize='small' />
            <Typography>4</Typography>
          </Stack>
          <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
            <RemoveRedEyeIcon color='action' fontSize='small' />
            <Typography>4</Typography>
          </Stack>
        </FlexBox>
      </CardContent>
    </Card>
  );
}
