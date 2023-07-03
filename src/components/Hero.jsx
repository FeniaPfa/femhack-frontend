import heroimg from '../assets/header.svg';
import {Fade} from 'react-awesome-reveal'
 
export const Hero = () => {
    return (
        <Fade>
        <div className="hero flex flex-col justify-between items-center gap-2 lg:flex-row py-6 md:py-20">
            <div className="flex flex-col gap-6 lg:items-start lg:w-5/12">
                <h1 className="text-5xl font-bold">
                    Every day the use of the <span className="font-extrabold text-indigo-600">Internet</span> in people&apos;s
                    daily lives surpasses a new milestone in history.{' '}
                </h1>
                <p className="text-xl">
                    The Internet has brought hyper-connectivity to the world allowing anyone in the world to contact anyone else
                    in the world!
                </p>
                <button className="bg-indigo-600 text-white px-6 py-2 font-bold rounded-lg hover:bg-purple-600">
                    <a href="#charts">Check the data!</a>
                </button>
            </div>
            <img src={heroimg} alt="Internet and people" className="md:w-7/12 w-full" />
        </div>
        </Fade>
    );
};
