import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import Card1 from "../Card/Card1";
import WidthLayout from "../layout/WidthLayout";

interface Section1Props {
  title?: string;
}

const Section1: FC<Section1Props> = ({ title }) => {
  return (
    <Box pt={3}>
      <WidthLayout>
        {title && (
          <Typography color='text.primary' fontSize={17} fontWeight={"bold"}>
            {title}
          </Typography>
        )}
        <Grid container spacing={2} mt={-1}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
            <Grid item xs={6} md={4} lg={3} key={item}>
              <Card1 />
            </Grid>
          ))}
        </Grid>
      </WidthLayout>
    </Box>
  );
};

export default Section1;
