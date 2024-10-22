// src/pages/Home.js
import React, { useState } from 'react';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import useFetchCountries from '../hooks/useFetchCountries';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import CountryList from '../components/CountryList';

const Home = () => {
    const { countries, loading, error } = useFetchCountries();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleRegionChange = (region) => {
        setSelectedRegion(region);
    };

    const filteredCountries = countries
        .filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((country) => (selectedRegion ? country.region === selectedRegion : true));

    if (loading) return <CircularProgress />;
    if (error) return <Typography>Error fetching countries</Typography>;

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 3 }}>Where in the world?</Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                    <SearchBar onSearch={handleSearch} />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Filter selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
                </Grid>
            </Grid>
            <CountryList countries={filteredCountries} />
        </Container>
    );
};

export default Home;
