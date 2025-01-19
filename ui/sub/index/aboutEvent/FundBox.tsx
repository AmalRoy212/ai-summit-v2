import React from 'react';

interface FundBoxProps {
    amount: string;
    description: string;
    source: string;
    year: string;
}

const FundBox: React.FC<FundBoxProps> = ({ amount, description, source, year }) => {
    return (
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-6xl">{amount}</p>
            <p>{description}</p>
            <p className="text-sm opacity-75">{source}, {year}</p>
        </div>
    );
};

export default FundBox;
