import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="max-w-wrapper h-16 flex items-center justify-between">
                <div className="">
                    <Link href={'/'}>
                        <h2 className="text-xl font-extrabold">krrishkad</h2>
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar