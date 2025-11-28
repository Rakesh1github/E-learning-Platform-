import React from "react";
import { Link } from "react-router-dom";
import { languages } from "./programmingData";

export default function ProgrammingHome() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up leading-tight">
                    Learn Programming Languages 💻
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-100">
                    Master the syntax, concepts, and best practices of popular programming languages.
                </p>
            </div>

            {/* Languages Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    Choose a Language
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {languages.map((lang) => (
                        <Link
                            to={`/programming/${lang.id}`}
                            key={lang.id}
                            className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {lang.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                {lang.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {lang.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
