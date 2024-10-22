// src/components/CountryCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    return (
        <Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    cursor: 'pointer',
                    margin: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    '&:hover': {
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={country.flags.png}
                    alt={`${country.name.common} flag`}
                    sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />
                <CardContent>
                    <Typography variant="h6">{country.name.common}</Typography>
                    <Typography>Population: {country.population.toLocaleString()}</Typography>
                    <Typography>Region: {country.region}</Typography>
                    <Typography>Capital: {country.capital?.[0]}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CountryCard;
