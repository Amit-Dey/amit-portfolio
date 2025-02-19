"use client";

import CountUp from 'react-countup';
import { text } from 'stream/consumers';

const stats = [
    {
        num: 2,
        text: 'Years of experience'
    },
    {
        num: 12,
        text: 'Projects completed'
    },
    {
        num: 10,
        text: 'Technologies mastered'
    },
    {
        num: 500,
        text: 'Code commits'
    }
]


const Stats = () => {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-24'>
            <div className="container mx-auto">
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center
                        xl:justify-start">
                            <CountUp
                                end={stat.num}
                                duration={5}
                                delay={0.5}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" :
                                "max-w-[150px]"}`}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats