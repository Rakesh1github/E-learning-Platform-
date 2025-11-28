import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { FaPlay, FaSpinner, FaCode } from "react-icons/fa";

export default function CodeCompiler() {
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState("// Write your code here\nconsole.log('Hello, World!');");
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const languages = [
        { name: "JavaScript", value: "javascript", version: "18.15.0", snippet: "// Write your code here\nconsole.log('Hello, World!');" },
        { name: "Python", value: "python", version: "3.10.0", snippet: "# Write your code here\nprint('Hello, World!')" },
        { name: "C++", value: "cpp", version: "10.2.0", snippet: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}' },
        { name: "Java", value: "java", version: "15.0.2", snippet: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' },
    ];

    const handleLanguageChange = (e) => {
        const selectedLang = languages.find((l) => l.value === e.target.value);
        setLanguage(selectedLang.value);
        setCode(selectedLang.snippet);
        setOutput("");
    };

    const runCode = async () => {
        setIsLoading(true);
        setOutput("");

        // Find version for Piston API
        const langConfig = languages.find(l => l.value === language);

        try {
            const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
                language: language,
                version: langConfig.version,
                files: [
                    {
                        content: code,
                    },
                ],
            });

            const { run } = response.data;
            setOutput(run.output || "No output");
        } catch (error) {
            console.error("Compilation error:", error);
            setOutput("Error: Failed to execute code. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent transition-colors duration-300 py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-600 rounded-lg text-white shadow-lg">
                            <FaCode className="text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                                Online Compiler
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Write, compile, and run code in multiple languages.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                        >
                            {languages.map((lang) => (
                                <option key={lang.value} value={lang.value}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={runCode}
                            disabled={isLoading}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-white shadow-md transition-all ${isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-700 hover:-translate-y-1"
                                }`}
                        >
                            {isLoading ? <FaSpinner className="animate-spin" /> : <FaPlay />}
                            {isLoading ? "Running..." : "Run Code"}
                        </button>
                    </div>
                </div>

                {/* Editor & Output Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[70vh]">
                    {/* Editor */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700 flex flex-col">
                        <div className="bg-gray-100 dark:bg-slate-900 px-4 py-2 border-b border-gray-200 dark:border-slate-700 font-mono text-sm text-gray-600 dark:text-gray-400">
                            Editor - {language}
                        </div>
                        <div className="flex-1">
                            <Editor
                                height="100%"
                                language={language === "cpp" ? "cpp" : language}
                                value={code}
                                theme="vs-dark"
                                onChange={(value) => setCode(value)}
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                    scrollBeyondLastLine: false,
                                    automaticLayout: true,
                                }}
                            />
                        </div>
                    </div>

                    {/* Output */}
                    <div className="bg-gray-900 text-white rounded-xl shadow-xl overflow-hidden flex flex-col border border-gray-700">
                        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 font-mono text-sm text-gray-400 flex justify-between items-center">
                            <span>Output Terminal</span>
                            <span className="text-xs px-2 py-1 bg-gray-700 rounded">Read-only</span>
                        </div>
                        <div className="flex-1 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap">
                            {output ? (
                                output
                            ) : (
                                <span className="text-gray-500 italic">
                                    Run your code to see the output here...
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
