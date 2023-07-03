import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { UsersByCountry } from './components/UsersByCountry';
import { WorldMap } from './components/WorldMap';
import { Hero } from './components/Hero';

function App() {
    return (
        <div className="main h-full">
            <Hero />
            <UsersPerYearChart />

            <UsersByCountry />
            <TopCountries />
            <WorldMap />
        </div>
    );
}

export default App;
