import { Card } from '@tremor/react';
import { UsersPerYearChart } from './components/UsersPerYearChart';

function App() {
    return (
        <>
            <h1 className="text-purple-500">Hola fem hack</h1>
            <Card>
                <UsersPerYearChart />
            </Card>
        </>
    );
}

export default App;
