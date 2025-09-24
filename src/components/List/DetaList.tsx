import React from 'react';

interface DetailItem {
    label: React.ReactNode;
    value: React.ReactNode;
    border?: boolean;
}

interface DetailListProps {
    items: DetailItem[];
}

const DetaList: React.FC<DetailListProps> = ({ items }) => {
    return (
            <ul className="flex flex-col">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center justify-between py-3 ${
                            item.border !== false ? 'border-b border-dashed border-[#303030]' : ''
                        }`}
                    >
                        <div className="text-neutral-300 text-sm font-medium leading-[140%]">
                            {item.label}
                        </div>
                        <div className="text-neutral-300 text-md font-bold leading-[140%]">
                            {item.value}
                        </div>
                    </li>
                ))}
            </ul>
    );
};

export default DetaList;
