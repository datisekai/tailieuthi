import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Card2Big = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const {
    palette: { primary },
  } = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          p: 2,
          bgcolor: `#${randomColor}`,
          borderRadius: 1,
          textShadow: `-1px 1px 0 #41ba45,
          1px 1px 0 #c63d2b,
         1px -1px 0 #42afac,
        -1px -1px 0 #c6c23f`,
          border: `1px solid ${primary.main}`,
        }}
        fontSize={16}
        fontWeight={"bold"}
        color='secondary'
      >
        Ngoại ngữ
      </Typography>
      <Stack spacing={2} mt={2}>
        {[1, 2, 3, 4, 5, 6].map((item: number) => (
          <Card2 key={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Card2Big;
