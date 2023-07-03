import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { UsersByCountry } from './components/UsersByCountry';
import { WorldMap } from './components/WorldMap';
import { Hero } from './components/Hero';
import { Layout } from './components/Layout';

function App() {
    return (
        <div className="main h-full">
            <Layout>
                <Hero />
                <UsersPerYearChart />

                <UsersByCountry />
                <TopCountries />
                <WorldMap />
            </Layout>
        </div>
    );
}

export default App;
