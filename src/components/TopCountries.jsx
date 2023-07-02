import { useEffect, useState } from 'react';
import { endPoints } from '../constant/API';
import axios from 'axios';
import { BarList, Bold, Card, Flex, Icon, Select, SelectItem, Text, Title } from '@tremor/react';
import { Layout } from './Layout';
import { numberFormatter, reverseArray } from '../constant/utils';
import { years } from '../constant/years';
import { TrendingUpIcon } from '@heroicons/react/outline';

export const TopCountries = () => {
    const [loading, setLoading] = useState(false);
    const [selectedYear, setSelectedYear] = useState(2020);
    const [data, setData] = useState([]);

    const sortCountries = (arr) => {
        const newArr = [...arr];
        return newArr.sort((a, b) => b.value - a.value);
    };

    const getAllCountriesByYear = async (year) => {
        setLoading(true);
        const res = await axios.get(`${endPoints.getByYearAllCountries}/${year}`);
        const data = res.data.Data;

        const formatedData = Object.keys(data).map((item) => ({ name: item, value: data[item].internet_users_number }));
        const sortedData = sortCountries(formatedData).splice(0, 10);
        setData(sortedData);

        setLoading(false);
    };

    const handleChange = () => {
        getAllCountriesByYear(selectedYear);
    };
    // console.log(data);

    useEffect(() => {
        getAllCountriesByYear(2020);
    }, []);

    useEffect(() => {
        if (selectedYear) {
            handleChange();
        }
    }, [selectedYear]);
    return (
        <Layout>
            <Card className="my-10 drop-shadow-md" decoration="bottom" decorationColor="indigo">
                <Flex className="space-x-8">
                    <Title>
                        <Icon icon={TrendingUpIcon} variant="solid" color="purple" className="mr-3" />
                        Top 10 countries
                    </Title>
                    <Select
                        onValueChange={setSelectedYear}
                        value={selectedYear}
                        placeholder="Year Selection"
                        className="max-w-xs"
                        // onChange={handleChange}
                    >
                        {reverseArray(years).map((category) => (
                            <SelectItem key={category} value={category}>
                                {category}
                            </SelectItem>
                        ))}
                    </Select>
                </Flex>
                <Flex className="mt-8">
                    <Text>
                        <Bold>Country</Bold>
                    </Text>
                    <Text>
                        <Bold>Users</Bold>
                    </Text>
                </Flex>
                <BarList data={data} color="purple" className="mt-4" showAnimation={true} valueFormatter={numberFormatter} />
            </Card>
        </Layout>
    );
};