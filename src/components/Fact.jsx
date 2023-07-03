import { PaperAirplaneIcon, GlobeAltIcon, LightningBoltIcon } from '@heroicons/react/outline';
import { Callout } from '@tremor/react';

export const Fact = ({ fact }) => {
    if (fact === 1) {
        return (
            <Callout
                className="lg:w-5/6"
                title="There Were 3 Zettabytes of Internet Traffic in 2020."
                icon={PaperAirplaneIcon}
                color="indigo">
                <span className="block">
                    What is a zettabyte? One zettabyte is 3 trillion gigabytes. To put that into perspective, that means that
                    every person on the planet uses 1 GB of Internet traffic daily or 32GB per month.
                </span>
                <span>
                    If you totalled all this traffic up, it would mean 325 million households watched Netflix non-stop. 😶
                </span>
            </Callout>
        );
    }
    if (fact === 2) {
        return (
            <Callout
                className="lg:w-5/6"
                title="The current estimate of internet users is roughly 3.26 billion worldwide, or less than half of Earth's population."
                icon={GlobeAltIcon}
                color="indigo">
                Asia accounts for 1.7 billion of the internet&apos;s 3.26 billion users.
            </Callout>
        );
    }
    if (fact === 3) {
        return (
            <Callout
                className="lg:w-5/6"
                title="If the internet were measured in horsepower, it takes 50 million horsepower to run the internet today."
                icon={LightningBoltIcon}
                color="indigo">
                Let us bring some science into the equation; it takes around 2 billion electrons to produce a single email. Now
                imagine millions of emails being sent in a single day. That&apos;s definitely a lot of electrons to be playing
                around with.
            </Callout>
        );
    }
};
