import { IconButton, TextField, useTheme } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const SearchHeader = () => {
  const [queryText, setQueryText] = useState("");
  const [uni, setUni] = useState("");
  const {
    palette: { secondary, text },
  } = useTheme();

  const router = useRouter();

  const handleSearch = () => {
    if (uni || queryText) {
      let query = "";
      if (queryText) {
        query = uni ? `text=${queryText}&uni=${uni}` : `text=${queryText}`;
      } else {
        query = `uni=${uni}`;
      }
      router.push(`/tim-kiem?${query}`);
    }
  };

  return (
    <TextField
      id='outlined-basic'
      variant='outlined'
      sx={{ mr: 1 }}
      value={queryText}
      onChange={(e: any) => setQueryText(e.target.value)}
      fullWidth
      onKeyUp={(e: any) => {
        if (e.keyCode === 13) {
          handleSearch();
        }
      }}
      InputProps={{
        startAdornment: (
          <select
            style={{
              height: "100%",
              border: "none",
              color: text.primary,
              backgroundColor: secondary.main,
            }}
            value={uni}
            onChange={(e: any) => setUni(e.target.value)}
          >
            <option value=''>Trường</option>
            <option value='1'>Sài Gòn</option>
            <option value='2'>Sư Phạm</option>
          </select>
        ),
        endAdornment: (
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchHeader;
