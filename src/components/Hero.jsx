import heroimg from '../assets/header.svg';
import { Layout } from './Layout';

export const Hero = () => {
    return (
        <Layout>
            <div className="hero flex justify-between items-center">
                <h1>Texto asdasdasdasdsadasd</h1>
                <img src={heroimg} className="w-3/6" />
            </div>
        </Layout>
    );
};
