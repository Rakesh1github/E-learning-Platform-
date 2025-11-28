import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./dsaData";

export default function DSAHome() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up leading-tight">
                    Master Data Structures & Algorithms 🚀
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-100">
                    Structured learning paths, curated problems, and detailed solutions to crack your dream tech job.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    Explore Topics 📚
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <Link
                            to={`/dsa/${cat.id}`}
                            key={cat.id}
                            className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {cat.desc}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
