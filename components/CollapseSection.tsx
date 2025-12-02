'use client'
import { useState } from "react";

interface CollapseSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    size?: string
}

export const CollapseSection: React.FC<CollapseSectionProps> = ({ title, size, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-xl shadow-md overflow-hidden">
            <button
                className={`w-full flex justify-between items-center ${size === "small" ? "p-1 px-4" : "p-2"}  bg-white hover:bg-gray-50 transition duration-150 ease-in-out`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className={`${size === "small" ? "text-base" : "text-xl"} font-bold text-indigo-700`}>{title}</h2>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : 'text-gray-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden 
          ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-2 bg-white border-t border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};