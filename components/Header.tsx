'use client';

import React, { useState, useEffect, useCallback } from 'react';
import DesktopNav, { navItems } from './DesktopNav';
import Link from 'next/link';
import { Heart, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

// NOTE: You must re-add SnowfallEffect if you want it, it was removed from the snippet you provided.
// import SnowfallEffect from './sections/SnowfallEffect'; 



const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Initialize active with a safe default, will be updated client-side
    const [active, setActive] = useState('/#');
    // NEW STATE: Tracks if the component has mounted on the client
    const [isMounted, setIsMounted] = useState(false);

    const handleLinkClick = (href: string) => {
        setActive(href);
        setIsMenuOpen(false);
    };

    /**
     * Helper to safely get the current hash path, only runs client-side.
     * This is only used internally by getActiveIndex, but its result 
     * is now only relevant post-mount.
     */
    const getClientHashPath = useCallback(() => {
        if (typeof window !== 'undefined') {
            // Normalize hash: #section -> /#section
            const hash = window.location.hash;
            if (hash) {
                // Return /#couple, /#story, etc.
                return `/${hash}`;
            }
            // Return /# for no hash
            return '/#';
        }
        return '/#'; // Fallback for SSR (though we'll ignore this in getActiveIndex's SSR path)
    }, []);


    const getActiveIndex = useCallback(() => {
        // If not mounted, we can't reliably know the URL hash, so we stick to the default '/#' (index 0).
        if (!isMounted) {
            return 0;
        }

        const currentPath = getClientHashPath();

        let index = navItems.findIndex(item => item.href === currentPath);

        if (index === -1) {
            index = navItems.findIndex(item => item.href === active);
        }

        return index >= 0 ? index : 0;
    }, [active, isMounted, getClientHashPath]); // Added isMounted and getClientHashPath dependencies

    useEffect(() => {
        // 1. Set isMounted to true immediately after the component mounts
        setIsMounted(true);

        // 2. Safely initialize 'active' state based on the actual URL hash
        const initialActive = getClientHashPath();
        setActive(initialActive);

        // 3. Set up hash change listener
        const handleHashChange = () => {
            const newActive = getClientHashPath();
            setActive(newActive);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [getClientHashPath]);


    const handleNavigation = (direction: 'prev' | 'next') => {
        // This function is only called on button clicks, so 'window' access is safe inside
        const currentIndex = getActiveIndex();
        const totalItems = navItems.length;
        let newIndex = currentIndex;

        if (direction === 'next') {
            newIndex = Math.min(currentIndex + 1, totalItems - 1);
        } else if (direction === 'prev') {
            newIndex = Math.max(currentIndex - 1, 0);
        }

        if (newIndex !== currentIndex) {
            const newHref = navItems[newIndex].href;
            setActive(newHref);
            window.location.href = newHref;
        }
    };


    const currentIndex = getActiveIndex();
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === navItems.length - 1;


    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[999] bg-white shadow-lg">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        <div className="flex-shrink-0">
                            <Link
                                onClick={() => handleLinkClick("/#")}
                                href="/" className="flex items-center text-[30px] font-bold text-[#e32b42]">
                                <span className="text-[#03c0cc]">V</span>
                                <Heart className="w-5 h-5 mx-1.5" style={{ color: '#e32b42' }} />
                                H
                            </Link>
                        </div>

                        <nav className="hidden md:block">
                            <DesktopNav />
                        </nav>

                        <div className="md:hidden">
                            <button
                                type="button"
                                className="p-2 text-gray-500 hover:text-[#e32b42] focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (<X className="h-7 w-7" aria-hidden="true" />) : (<Menu className="h-7 w-7" aria-hidden="true" />)}
                            </button>
                        </div>
                    </div>
                </div>

                <nav
                    className={`md:hidden absolute top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <ul className="flex flex-col p-4 space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name} className="w-full">
                                <Link
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${item.href === active
                                        ? 'text-[#e32b42] font-bold bg-pink-50'
                                        : 'text-gray-900 hover:bg-gray-100 hover:text-[#e32b42]'
                                        }`}
                                    onClick={() => handleLinkClick(item.href)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-30 md:hidden z-[-1]"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}
            </header>

            <div className="fixed bottom-5 right-5 z-[100] flex space-x-5">
                <button
                    onClick={() => handleNavigation('prev')}
                    // disabled is correctly set based on isFirst
                    disabled={isFirst}
                    className={`
                        cursor-pointer
                        flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4
                        ${isFirst
                            ? 'bg-red-300 text-white cursor-not-allowed opacity-70'
                            : 'bg-[#e32b42] text-white hover:bg-red-700 focus:ring-red-400'
                        }
                    `}
                    aria-label="Previous Section"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => handleNavigation('next')}
                    disabled={isLast}
                    className={`
                        cursor-pointer
                        flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4
                        ${isLast
                            ? 'bg-red-300 text-white cursor-not-allowed opacity-70'
                            : 'bg-[#e32b42] text-white hover:bg-red-700 focus:ring-red-400'
                        }
                    `}
                    aria-label="Next Section"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </>
    );
};

export default Header;