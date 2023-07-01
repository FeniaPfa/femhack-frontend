import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';

export const UsersPerYearChart = () => {
    const [data, setData] = useState({ data: '', loading: false });

    const getData = async (year) => {
        setData({ ...data, loading: true });
        const res = await axios.get(`${endPoints.getByYear}/${year}`);
        setData({ data: res.data, loading: false });
    };

    useEffect(() => {
        getData(2000);
    }, []);

    return (
        <div>
            <h3>Usuarios por año:</h3>
            <p>{data?.data}</p>
        </div>
    );
};
