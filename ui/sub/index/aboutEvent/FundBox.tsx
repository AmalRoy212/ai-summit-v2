import React from 'react';

interface FundBoxProps {
    amount: string;
    description: string;
    source: string;
    year: string;
}

const FundBox: React.FC<FundBoxProps> = ({ amount, description, source, year }) => {
    return (
        <div className=" text-white p-6 rounded-lg shadow-lg">
            <p className="bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl p-2 rounded-xl">{amount}</p>
            <p className='px-2 '>{description}</p>
            <p className="text-sm opacity-75 px-2">{source}, {year}</p>
        </div>
    );
};

export default FundBox;
