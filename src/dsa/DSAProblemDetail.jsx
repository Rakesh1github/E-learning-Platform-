import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { problems } from "./dsaData";
import { FaChevronDown, FaChevronUp, FaArrowLeft } from "react-icons/fa";

export default function DSAProblemDetail() {
    const { id } = useParams();
    const problem = problems.find((p) => p.id === id);
    const [showSolution, setShowSolution] = useState(false);

    if (!problem) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl dark:text-white">
                Problem not found 😕
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <Link
                    to={`/dsa/${problem.category}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6 font-medium"
                >
                    <FaArrowLeft /> Back to {problem.category}
                </Link>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white leading-tight">
                            {problem.title}
                        </h1>
                        <span
                            className={`px-4 py-1 rounded-full font-semibold ${problem.difficulty === "Easy"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : problem.difficulty === "Medium"
                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                }`}
                        >
                            {problem.difficulty}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="prose dark:prose-invert max-w-none mb-8">
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            {problem.description}
                        </p>
                    </div>

                    {/* Examples */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            Examples
                        </h2>
                        <div className="space-y-4">
                            {problem.examples.map((ex, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-100 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500"
                                >
                                    <p className="font-mono text-sm text-gray-800 dark:text-gray-300">
                                        <strong className="text-gray-900 dark:text-white">Input:</strong> {ex.input}
                                    </p>
                                    <p className="font-mono text-sm text-gray-800 dark:text-gray-300 mt-1">
                                        <strong className="text-gray-900 dark:text-white">Output:</strong> {ex.output}
                                    </p>
                                    {ex.explanation && (
                                        <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            <strong>Explanation:</strong> {ex.explanation}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Constraints */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            Constraints
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 font-mono text-sm">
                            {problem.constraints.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Section */}
                    <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-8">
                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
                        >
                            {showSolution ? "Hide Solution" : "Show Solution"}{" "}
                            {showSolution ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {showSolution && (
                            <div className="mt-6 animate-fade-in-up">
                                <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto font-mono text-sm shadow-inner">
                                    <pre>{problem.solution}</pre>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
