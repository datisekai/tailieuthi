import { Box, TextField, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";

interface SearchMobileProps {
  open: boolean;
  handleClose: () => void;
}

const SearchMobile: FC<SearchMobileProps> = ({ open, handleClose }) => {
  const [text, setText] = useState("");
  const inputRef = useRef<any>();

  const {
    palette: { secondary },
  } = useTheme();

  const router = useRouter();

  const handleSearch = () => {};

  return (
    <Box>
      <div onClick={handleClose}>
        <Box
          sx={{
            position: "fixed",
            zIndex: 1,
            top: 60,
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,0.616)",
            display: open ? "block" : "none",
          }}
        ></Box>
      </div>
      <Box
        sx={{
          position: "fixed",
          zIndex: 12,
          bgcolor: secondary.main,
          left: 0,
          right: 0,
          top: 60,
          transform: open ? "translateY(0)" : "translateY(-200px)",
          transition: "0.2s",
        }}
      >
        <TextField
          id='standard-basic'
          size='medium'
          value={text}
          ref={inputRef}
          onKeyUp={(e: any) => {
            if (e.keyCode === 13) {
              handleSearch();
              handleClose();
            }
          }}
          onChange={(e: any) => setText(e.target.value)}
          sx={{
            borderTop: "1px solid #ccc",
            input: {
              px: 2,
              py: 1,
            },
          }}
          fullWidth
          placeholder='Tìm kiếm tin tức'
          variant='standard'
        />
      </Box>
    </Box>
  );
};

export default SearchMobile;
