// src/hooks/useFetchCountries.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { countries, loading, error };
};

export default useFetchCountries;
