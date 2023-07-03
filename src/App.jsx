import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { WorldMap } from './components/WorldMap';
import { Hero } from './components/Hero';

function App() {
    return (
        <div className="main h-full">
            <Hero />
            <UsersPerYearChart />

            <TopCountries />
            <WorldMap />
        </div>
    );
}

export default App;
