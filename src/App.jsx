import { Card } from '@tremor/react';
import { UsersPerYearChart } from './components/UsersPerYearChart';
import { TopCountries } from './components/TopCountries';
import { Hero } from './components/Hero';

function App() {
    return (
        <div className="main">
            <Hero />
            <Card>
                <UsersPerYearChart />
            </Card>
            <TopCountries />
        </div>
    );
}

export default App;
