import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { UsersByCountry } from './components/UsersByCountry';
import { WorldMap } from './components/WorldMap';
import { Hero } from './components/Hero';
import { Layout } from './components/Layout';
import { Fact } from './components/Fact';

function App() {
    return (
        <div className="main h-full">
            <Layout>
                <Hero />
                <UsersPerYearChart />
                <Fact fact={1} />
                <UsersByCountry />
                <Fact fact={2} />
                <TopCountries />
                <Fact fact={3} />
                <WorldMap />
            </Layout>
        </div>
    );
}

export default App;
