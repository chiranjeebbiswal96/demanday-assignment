// src/components/SearchBar.js
import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    return (
        <TextField
            fullWidth
            onChange={(e) => onSearch(e.target.value)}
            variant="outlined"
            placeholder="Search for a country..."
            sx={{
                width: { xs: '100%', sm: '70%' }, // Full width on mobile, narrower on larger screens
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        />
    );
};

export default SearchBar;
