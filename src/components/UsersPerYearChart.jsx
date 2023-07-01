import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';

export const UsersPerYearChart = () => {
    const [data, setData] = useState([]);
    const [selectYear, setSelectYear] = useState(2000);

    const getData = async (year) => {
        const res = await axios.get(`${endPoints.getByYear}/${year}`);

        return { [year]: res.data.Data.Total };
    };

    const years = [];

    for (let i = 1980; i <= 2020; i++) {
        years.push(i);
    }

    const getAllYears = async () => {
        const result = await Promise.all(years.map((item) => getData(item)));
        setData(result);
    };

    const handleChange = (e) => {
        setSelectYear(e.target.value);
    };

    const handleSubmit = () => {
        getData(selectYear);
    };

    useEffect(() => {
        getAllYears();
    }, []);

    return (
        <div>
            <h3>Usuarios por año:</h3>

            <input min="1980" max="2020" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};
