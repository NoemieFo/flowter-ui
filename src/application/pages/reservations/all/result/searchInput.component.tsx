import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput: FunctionComponent = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  const navigate = useNavigate();

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" && keyword) {
      navigate(`/reservations/${keyword}/details`);
    }
  };

  const handleClick = (_: React.MouseEvent): void => {
    if (keyword) {
      navigate(`/reservations/${keyword}/details`);
    }
  };

  return (
    <FormControl onKeyPress={handleKeyPress}>
      <TextField
        variant="outlined"
        onChange={handleChange}
        placeholder="Rechercher par ID"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleClick}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};
