import React from "react";
import { useParams, Link } from "react-router-dom";
import { topics } from "./programmingData";
import { FaArrowLeft } from "react-icons/fa";

export default function ProgrammingDetail() {
    const { id } = useParams();
    const topic = topics.find((t) => t.id === id);

    if (!topic) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl dark:text-white">
                Topic not found 😕
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <Link
                    to={`/programming/${topic.languageId}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6 font-medium"
                >
                    <FaArrowLeft /> Back to Topics
                </Link>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                        {topic.title}
                    </h1>

                    <div className="prose dark:prose-invert max-w-none">
                        {/* Simple rendering of content - in a real app, use a Markdown renderer */}
                        <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-sans">
                            {topic.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
