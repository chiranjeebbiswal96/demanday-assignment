// src/components/CountryList.js
import React from 'react';
import { Grid } from '@mui/material';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
    return (
        <Grid container spacing={3} >
            {countries.map((country) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
                    <CountryCard country={country} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CountryList;
