import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Stack, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styleLineClamp from "../../utils/styleClamp";
import FlexBox from "../FlexBox";

export default function Card1() {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Link href='/1'>
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: secondary.main,
          ".css-46bh2p-MuiCardContent-root:last-child": {
            pb: 1,
          },
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <LazyLoadImage src='/images/test.webp' style={{ aspectRatio: "7/8" }} />
        <CardContent>
          <Typography
            sx={{
              ...styleLineClamp(2),
              ":hover": {
                textDecoration: "underline",
              },
            }}
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
          <FlexBox
            mt={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
    </Link>
  );
}
