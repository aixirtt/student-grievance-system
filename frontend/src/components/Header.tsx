import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">Student Grievance System</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/grievances">Grievances</Link>
                    </li>
                    <li>
                        <Link href="/grievances/new">Submit Grievance</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;