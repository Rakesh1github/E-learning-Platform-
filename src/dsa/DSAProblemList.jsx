import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { categories, problems } from "./dsaData";

export default function DSAProblemList() {
    const { category } = useParams();
    const [filter, setFilter] = useState("All");

    const catInfo = categories.find((c) => c.id === category);
    const categoryProblems = problems.filter((p) => p.category === category);

    const filteredProblems =
        filter === "All"
            ? categoryProblems
            : categoryProblems.filter((p) => p.difficulty === filter);

    if (!catInfo) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl dark:text-white">
                Category not found 😕
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="text-6xl mb-4">{catInfo.icon}</div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                        {catInfo.title} Problems
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">{catInfo.desc}</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["All", "Easy", "Medium", "Hard"].map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setFilter(lvl)}
                            className={`px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${filter === lvl
                                    ? "bg-blue-600 text-white shadow-lg scale-105"
                                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>

                {/* Problem List */}
                <div className="grid gap-4 sm:gap-6">
                    {filteredProblems.length > 0 ? (
                        filteredProblems.map((prob) => (
                            <div
                                key={prob.id}
                                className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                        {prob.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${prob.difficulty === "Easy"
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : prob.difficulty === "Medium"
                                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                                }`}
                                        >
                                            {prob.difficulty}
                                        </span>
                                        {prob.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={`/dsa/problem/${prob.id}`}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md whitespace-nowrap"
                                >
                                    Solve Now 🚀
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
                            No problems found for this difficulty.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
