import { Typography, useTheme } from "@mui/material";
import React, { FC } from "react";
import FlexBox from "../FlexBox";

interface ItemMenuSearchProps {
  flag: number;
  handleSetFlag: Function;
  label: string;
  Icon: any;
}

const ItemMenuSearch: FC<ItemMenuSearchProps> = ({
  flag,
  handleSetFlag,
  label,
  Icon,
}) => {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <div onClick={() => handleSetFlag(flag)}>
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
        <Icon color={flag === 0 ? "secondary" : "info"} />
        <Typography
          ml={1}
          fontSize={16}
          color={flag === 0 ? "secondary" : "text.primary"}
        >
          {label}
        </Typography>
      </FlexBox>
    </div>
  );
};

export default ItemMenuSearch;
