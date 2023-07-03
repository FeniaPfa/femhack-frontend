import heroimg from '../assets/header.svg';
import { Layout } from './Layout';

export const Hero = () => {
    return (
        <Layout>
            <div className="hero flex justify-between items-center gap-2">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold">
                        Every day the use of the <span className="font-extrabold text-indigo-600">Internet</span> in people's
                        daily lives surpasses a new milestone in history.{' '}
                    </h1>
                    <p>
                        The Internet has brought hyper-connectivity to the world allowing anyone in the world to contact anyone
                        else in the world.
                    </p>
                </div>
                <img src={heroimg} className="w-7/12" />
            </div>
        </Layout>
    );
};
