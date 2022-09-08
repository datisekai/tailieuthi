import { IconButton, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchHeader = () => {
  return (
    <TextField
      id='outlined-basic'
      variant='outlined'
      sx={{ mr: 1 }}
      fullWidth
      InputProps={{
        startAdornment: (
          <select style={{ height: "100%", border: "none" }}>
            <option value=''>Tài liệu</option>
            <option value=''>Tài liệu</option>
            <option value=''>Tài liệu</option>
            <option value=''>Tài liệu</option>
          </select>
        ),
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchHeader;
