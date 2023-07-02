import { Card } from '@tremor/react';
import { UsersPerYearChart } from './components/UsersPerYearChart';
import { WorldMap } from './components/WorldMap';

function App() {
    return (
        <>
            <h1 className="text-purple-500">Hola fem hack</h1>
            <Card>
                <UsersPerYearChart />
                <WorldMap />
            </Card>
        </>
    );
}

export default App;
