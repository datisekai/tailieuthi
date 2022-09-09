import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import React, { FC } from "react";

interface SelectCProps {
  label: string;
}

const SelectC: FC<SelectCProps> = ({ label }) => {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Age'
        sx={{
          div: {
            backgroundColor: secondary.main,
          },
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectC;
