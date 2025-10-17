// components/FilterGroup.tsx
"use client";
import { memo, } from "react";
import { MetadataProps } from "./CardFilterProduct";
type Props = {
    data: MetadataProps[];
    setSelected: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
    selected: Record<string, string[]>
};

const FilterGroup = ({ data, setSelected, selected }: Props) => {
    const handleSelect = (key: string, value: string) => {
        setSelected((prev) => {
            const currentValues = prev[key] ?? [];
            const exists = currentValues.includes(value);

            const newValues = exists
                ? currentValues.filter((v) => v !== value) // bỏ nếu đã chọn
                : [...currentValues, value]; // thêm nếu chưa có

            const newData = { ...prev, [key]: newValues };
            return newData;
        });
    };

    return (
        <div className="space-y-1 max-h-80 overflow-y-scroll">
            {data.map((item) => (
                <div key={item.metaKey}>
                    <h3 className="font-medium capitalize">{item.metaName}</h3>
                    <div className="flex flex-wrap gap-3 mx-2">
                        {item.metaValues.map((value) => {
                            if (!value) return null;

                            const isActive = selected[item.metaKey]?.includes(value);

                            return (
                                <button
                                    key={value}
                                    onClick={() => handleSelect(item.metaKey, value)}
                                    className={`px-4 py-1 cursor-pointer rounded border capitalize ${isActive
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                        }`}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default memo(FilterGroup) 