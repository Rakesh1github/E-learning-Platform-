import React from "react";
import { useParams, Link } from "react-router-dom";
import { languages, topics } from "./programmingData";
import { FaArrowLeft } from "react-icons/fa";

export default function ProgrammingLanguage() {
    const { language } = useParams();
    const langInfo = languages.find((l) => l.id === language);
    const langTopics = topics.filter((t) => t.languageId === language);

    if (!langInfo) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl dark:text-white">
                Language not found 😕
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <Link
                    to="/programming"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6 font-medium"
                >
                    <FaArrowLeft /> Back to Languages
                </Link>

                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="text-6xl mb-4">{langInfo.icon}</div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                        {langInfo.name} Tutorials
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">{langInfo.description}</p>
                </div>

                {/* Topics List */}
                <div className="grid gap-4 sm:gap-6">
                    {langTopics.length > 0 ? (
                        langTopics.map((topic) => (
                            <Link
                                to={`/programming/topic/${topic.id}`}
                                key={topic.id}
                                className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-slate-700 flex justify-between items-center group"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {topic.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {topic.description}
                                    </p>
                                </div>
                                <span className="text-2xl text-gray-300 group-hover:text-blue-500 transition-colors">
                                    →
                                </span>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
                            No topics available for this language yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
