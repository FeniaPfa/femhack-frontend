import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';
import { AreaChart } from '@tremor/react';
import { years } from '../constant/years';

export const UsersPerYearChart = () => {
    const [data, setData] = useState([]);

    const getData = async (year) => {
        const res = await axios.get(`${endPoints.getByYear}/${year}`);

        return { 'Total Internet Users': res.data.Data.Total, year };
    };

    const getAllYears = async () => {
        const result = await Promise.all(years.map((item) => getData(item)));
        setData(result);
    };

    const dataFormatter = (number) => {
        return Intl.NumberFormat('us').format(number).toString();
    };

    useEffect(() => {
        getAllYears();
    }, []);

    return (
        <div>
            <h3>Usuarios por año:</h3>
            {data.length > 0 && (
                <AreaChart
                    className="mt-6"
                    data={data}
                    index="year"
                    categories={['Total Internet Users']}
                    colors={['purple']}
                    maxValue={data[data.length - 1]['Total Internet Users']}
                    valueFormatter={dataFormatter}
                    // yAxisWidth={40}
                />
            )}
        </div>
    );
};
