import { Breadcrumbs, Link as LinkMUI, Typography } from "@mui/material";
import React from "react";

const Breadcumbs = () => {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <LinkMUI underline='hover' color='inherit' href='/'>
        Trang chủ
      </LinkMUI>
      <LinkMUI
        underline='hover'
        color='inherit'
        href='/material-ui/getting-started/installation/'
      >
        Core
      </LinkMUI>
      <Typography color='text.primary'>Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};

export default Breadcumbs;
