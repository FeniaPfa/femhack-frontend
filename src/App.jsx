import { Card } from '@tremor/react';
import { WorldMap } from './components/WorldMap';
import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { UsersByCountry } from './components/UsersByCountry';

function App() {
    return (
        <>
            <h1 className="text-purple-500">Hola fem hack</h1>
            <Card>
                <UsersPerYearChart />
            </Card>
            <UsersByCountry />
            <TopCountries />
            <WorldMap />
        </>
    );
}

export default App;
