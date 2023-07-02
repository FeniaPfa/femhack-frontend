import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';
import { MemoChart } from './WorldChart';
import { Tooltip } from 'react-tooltip';
import { years } from '../constant/years';
import { Card, Flex, Select, SelectItem } from '@tremor/react';

export const WorldMap = () => {
    const [year, setYear] = useState(2020);
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

    useEffect(() => {
        getAllCountriesByYear(year);
    }, [year]);

    return (
        <Card className="p-10">
            <Flex className="space-x-8">
                <h3 className="text-3xl font-bold">World Map</h3>
                <Select onValueChange={setYear} value={year} placeholder="Year Selection" className="max-w-xs">
                    {years.map((year) => (
                        <SelectItem key={year} value={year}>
                            {year}
                        </SelectItem>
                    ))}
                </Select>
            </Flex>

            {loading && <p>Loading...</p>}
            <MemoChart setTooltipContent={setTooltipContent} data={data} />
            <Tooltip id="my-tooltip">{tooltipContent}</Tooltip>
        </Card>
    );
};
