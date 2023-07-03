import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { UsersByCountry } from './components/UsersByCountry';
import { WorldMap } from './components/WorldMap';

function App() {
    return (
        <>
            <h1 className="text-purple-500">Hola fem hack</h1>

            <UsersPerYearChart />

            <UsersByCountry />
            <TopCountries />
            <WorldMap />
        </>
    );
}

export default App;
