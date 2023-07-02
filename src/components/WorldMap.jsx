import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';
import { MemoChart } from './WorldChart';
import { Tooltip } from 'react-tooltip';
import { years } from '../constant/years';

export const WorldMap = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [tooltipContent, setTooltipContent] = useState('');

    const getAllCountriesByYear = async (year) => {
        setLoading(true);
        const res = await axios.get(`${endPoints.getByYearAllCountries}/${year}`);
        const data = res.data.Data;
        const formatedData = Object.keys(data).map((item) => ({ country: item, users: data[item].internet_users_number }));
        setData(formatedData);
        setLoading(false);
    };

    const handleSelect = (e) => {
        getAllCountriesByYear(e.target.value);
    };

    useEffect(() => {
        getAllCountriesByYear(2020);
    }, []);

    return (
        <div>
            <p>Selesccionar año</p>
            <label htmlFor="selectYear"></label>
            <select name="selectYear" id="selectYear" defaultValue={2020} onChange={handleSelect}>
                {years.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            <h2>World Map</h2>
            {loading && <p>Loading...</p>}
            <MemoChart setTooltipContent={setTooltipContent} data={data} />
            <Tooltip id="my-tooltip">{tooltipContent}</Tooltip>
        </div>
    );
};
