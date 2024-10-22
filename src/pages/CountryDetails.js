// src/pages/CountryDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Card, CardContent, CardMedia } from '@mui/material';

const CountryDetail = () => {
    const { code } = useParams(); // Get country code from URL
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                const data = await response.json();
                setCountry(data[0]);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch country details.');
                setLoading(false);
            }
        };
        fetchCountry();
    }, [code]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography>{error}</Typography>;

    return (
        <Container sx={{ mt: 4 }}>
            <Card sx={{ display: 'flex', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '50%', borderRadius: '12px 0 0 12px' }}
                    image={country.flags.png}
                    alt={`${country.name.common} flag`}
                />
                <CardContent sx={{ flex: 1, padding: 4 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>{country.name.common}</Typography>
                    <Typography variant="h6">Official Name: {country.name.official}</Typography>
                    <Typography>Population: {country.population.toLocaleString()}</Typography>
                    <Typography>Region: {country.region}</Typography>
                    <Typography>Subregion: {country.subregion}</Typography>
                    <Typography>Capital: {country.capital?.[0]}</Typography>
                    <Typography>Currency: {Object.values(country.currencies)?.[0]?.name}</Typography>
                    <Typography>Languages: {Object.values(country.languages).join(', ')}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CountryDetail;
