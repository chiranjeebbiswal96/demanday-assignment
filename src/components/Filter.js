// src/components/Filter.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ selectedRegion, handleRegionChange }) => {
    return (
        <FormControl
            variant="outlined"
            sx={{
                width: { xs: '100%', sm: '60%' }, // Full width on mobile, narrower on larger screens
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
            }}
        >
            <InputLabel>Filter by Region</InputLabel>
            <Select
                value={selectedRegion}
                onChange={(e) => handleRegionChange(e.target.value)}
                label="Filter by Region"
            >
                <MenuItem value="">All Regions</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Filter;
