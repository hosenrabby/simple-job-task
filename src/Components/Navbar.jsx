"use client";
import React, { useContext, useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
    //   const { user, signout } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSignout = () => {
        signout();
        router.push("/login");
    };

    const isActive = (path) =>
        pathname === path ? "text-green-500 font-semibold" : "";

    const links = (
        <>
            <li className="text-gray-900 font-semibold hover:text-gray-800 hover:scale-105 transition">
                <Link href="/" className={isActive("/")}>
                    HOME
                </Link>
            </li>
            <li className="text-gray-900 font-semibold hover:text-gray-800 hover:scale-105 transition">
                <Link href="/donation-requests" className={isActive("#")} >
                    All Products
                </Link>
            </li>
            <li className="text-gray-900 font-semibold hover:text-gray-800 hover:scale-105 transition">
                <Link href="/blogs" className={isActive("/blogs")}>
                    BLOGS
                </Link>
            </li>
        </>
    );

    return (
        <div
            className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled
                    ? "bg-white shadow-md"
                    : pathname === "/"
                        ? "bg-base-content/0"
                        : "bg-white"
                }`}
        >
            <div className="navbar md:w-10/12 mx-auto px-4 py-6">
                {/* Left Section */}
                <div className="navbar-start w-4/12">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-base-content"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <div>
                        <Link href="/">
                            <h2 className="text-3xl font-semibold">e<span className="text-green-400">Commb</span></h2>
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="navbar-end space-x-4 w-8/12">
                    <div className="navbar-end pe-4 hidden lg:flex border-r border-gray-700">
                        <ul className="menu-horizontal space-x-4">{links}</ul>
                    </div>

                    {/* {!user ? ( */}
                    <div className="flex justify-between items-center gap-3">
                        <div className="border-r border-gray-700">
                            <Link href="/login">
                                <button className="text-gray-900 font-semibold hover:scale-105 hover:text-green-600 transition pr-4 flex items-center gap-2 cursor-pointer">
                                    <CiUser /> Login
                                </button>
                            </Link>
                        </div>
                        <div className="space-x-2">
                            <Link href="/sign-up">
                                <button className="py-2 px-4 rounded-md font-semibold text-gray-600 border border-gray-600 cursor-pointer transition duration-300 hover:text-green-600 hover:border-green-600 hover:shadow-md hover:shadow-gray-600/50">
                                    SignUp
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* ) : ( */}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://photosrush.net/wp-content/uploads/instagram-profile-picture-girl-back-side_52.webp" alt="" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link href="#">Profile</Link>
                            </li>
                            <li>
                                <button>Logout</button>
                            </li>
                        </ul>
                    </div>
                    {/* )} */}
                    {/* <p>{user && user.name}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
