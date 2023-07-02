import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';

export const WorldMap = () => {
    const [year, setYear] = useState(2020);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getAllCountriesByYear = async (year) => {
        setLoading(true);
        const res = await axios.get(`${endPoints.getByYearAllCountries}/${year}`);
        const data = res.data.Data;
        const formatedData = Object.keys(data).map((item) => ({ country: item, users: data[item].internet_users_number }));
        setData(formatedData);
        setLoading(false);
    };

    useEffect(() => {
        getAllCountriesByYear(2020);
    }, []);

    return (
        <div>
            <p>Selesccionar año</p>
            <h2>World Map</h2>
            {loading && <p>Loading...</p>}
        </div>
    );
};
