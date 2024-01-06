"use client";
import React from 'react';
import ConnectButton from './ConnectButton';
import Link from 'next/link';

export default function Navbav() {
    return (
        <nav className="bg-base-300 py-4 px-6 rounded-xl">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-3xl"><Link href="/">🦹‍♂️🗯️</Link></div>

                {/* Navigation */}
                <ul className="flex space-x-4">
                    <li><Link href="/utils">Utils</Link></li>
                    <li>Contracts</li>
                    <li><Link href="/private">Private</Link></li>
                </ul>
 
                {/* Connect Wallet Button */}
                <ConnectButton />
            </div>
        </nav>
    );
};