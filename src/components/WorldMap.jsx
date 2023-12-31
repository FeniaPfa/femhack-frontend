import axios from 'axios';
import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';
import { MemoChart } from './WorldChart';
import { Tooltip } from 'react-tooltip';
import { years } from '../constant/years';
import { Card, Icon, Select, SelectItem } from '@tremor/react';
import { reverseArray } from '../constant/utils';
import { MapIcon } from '@heroicons/react/outline';

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
        <Card className="drop-shadow-md" decoration="bottom" decorationColor="indigo">
            <div className="space-x-8 flex md:justify-between md:flex-row flex-col gap-6 items-center">
                <h3 className="text-3xl font-bold">
                    <Icon icon={MapIcon} variant="solid" color="purple" className="mr-3" />
                    World users per year
                </h3>
                <Select onValueChange={setYear} value={year} placeholder="Year Selection" className="max-w-xs">
                    {reverseArray(years).map((year) => (
                        <SelectItem key={year} value={year}>
                            {year}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            {loading && <p>Loading...</p>}
            <MemoChart setTooltipContent={setTooltipContent} data={data} />
            <Tooltip id="my-tooltip">{tooltipContent}</Tooltip>
        </Card>
    );
};
