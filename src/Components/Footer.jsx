"use client";
import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaLinkedinIn,
    FaRegEnvelope,
    FaLocationArrow,
} from "react-icons/fa";
import { IoMdArrowDropright, IoMdCall } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="text-gray-300 pt-10 bg-gray-700">
            {/* Top Section */}
            <div className="w-8/12 mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8">
                {/* Logo + Social */}
                <div>
                    <h1 className="font-semibold text-3xl">e<span className="text-green-600">Commb</span></h1>
                    <div className="flex space-x-4 mt-4">
                        <FaFacebookF className="text-xl md:text-2xl hover:text-green-500 cursor-pointer" />
                        <FaTwitter className="text-xl md:text-2xl hover:text-green-500 cursor-pointer" />
                        <FaGooglePlusG className="text-xl md:text-2xl hover:text-green-500 cursor-pointer" />
                        <FaLinkedinIn className="text-xl md:text-2xl hover:text-green-500 cursor-pointer" />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <p className="font-semibold roboto p-10">
                        A modern and stylish ladies’ fashion website showcasing trendy clothing, accessories, and footwear. Features high-quality images, clear product details, and an elegant, user-friendly design for effortless browsing and shopping.
                    </p>
                </div>
            </div>

            <hr className="w-8/12 mx-auto bg-gray-500" />

            {/* Middle Section */}
            <div className="mt-6 w-8/12 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact */}
                <div>
                    <h3 className="text-white text-2xl font-semibold mb-2 tracking-wider">
                        CONTACT US
                    </h3>
                    <ul className="space-y-3">
                        <div className="flex justify-start items-start gap-3.5">
                            <FaRegEnvelope className="mt-2 text-green-500" size={22} />
                            <div>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-lg hover:text-green-500 transition"
                                    >
                                        support@eCommb.com
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-lg hover:text-green-500 transition"
                                    >
                                        helpme@eCommb.com
                                    </Link>
                                </li>
                            </div>
                        </div>

                        <div className="flex justify-start items-start gap-3.5">
                            <FaLocationArrow className="mt-2 text-green-500" size={22} />
                            <span className="text-white text-lg">
                                385, Road 6, Mirpur DOHS,
                                <br /> Dhaka 1216, Bangladesh
                            </span>
                        </div>

                        <div className="flex justify-start items-start gap-3.5">
                            <IoMdCall className="mt-2 text-green-500" size={22} />
                            <div>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-lg hover:underline"
                                    >
                                        Office: (+880) 0823 560 433
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-white text-lg hover:underline"
                                    >
                                        Cell: (+880) 0723 161 343
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* Supported Links */}
                <div>
                    <h3 className="text-white text-2xl font-semibold mb-2 tracking-wider">
                        SUPPORTED LINKS
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                href="#"
                                className="text-white text-lg hover:text-green-500 transition flex gap-4 items-center"
                            >
                                <IoMdArrowDropright className="text-green-500" size={20} />
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-white text-lg hover:text-green-500 transition flex gap-4 items-center"
                            >
                                <IoMdArrowDropright className="text-green-500" size={20} />
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-white text-lg hover:text-green-500 transition flex gap-4 items-center"
                            >
                                <IoMdArrowDropright className="text-green-500" size={20} />
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-white text-lg hover:text-green-500 transition flex gap-4 items-center"
                            >
                                <IoMdArrowDropright className="text-green-500" size={20} />
                                E-commers Plartforms
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white text-2xl font-semibold mb-2 tracking-wider">
                        SUBSCRIBE US
                    </h3>
                    <p className="text-white mb-4">
                        Signup for regular newsletter and stay up to date with our latest
                        news.
                    </p>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full bg-base-content text-white border-gray-700"
                        />
                        <button className="mt-2 py-2 px-4 rounded-md font-semibold text-green-500 border border-green-500 cursor-pointer transition duration-300 hover:text-green-600 hover:border-green-500 hover:shadow-md hover:shadow-gray-600/50">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <hr className="bg-gray-500 mt-4" />
            <div className="max-w-7xl mx-auto mt-6 py-4 text-center text-sm text-gray-500">
                © 2020{" "}
                <span className="text-white font-semibold">e-Commb</span>. All
                Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
