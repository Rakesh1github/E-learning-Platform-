import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaRocket, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-24 px-6 text-center">
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up">
                        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300">SkillsAura</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in-up delay-100 font-light">
                        Bridging the gap between students, knowledge, and success.
                    </p>
                    <div className="flex justify-center gap-4 animate-fade-in-up delay-200">
                        <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                            Join Community
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition transform hover:-translate-y-1">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard icon={<FaUserGraduate />} count="5,000+" label="Active Students" />
                    <StatCard icon={<FaBookOpen />} count="1,200+" label="Notes Uploaded" />
                    <StatCard icon={<FaChalkboardTeacher />} count="50+" label="Expert Teachers" />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

                {/* Our Story (Split Layout) */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Our Story & Mission
                        </h2>
                        <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            SkillsAura started with a simple idea: <span className="font-semibold text-indigo-600 dark:text-indigo-400">Education should be accessible and collaborative.</span>
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            We noticed that BCA and MCA students often struggle to find reliable study materials. Notes were scattered, unverified, or outdated. We built this platform to change that—creating a centralized hub where knowledge flows freely between seniors, juniors, and teachers.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-3 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Students collaborating"
                            className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-500"
                        />
                    </div>
                </section>

                {/* Why Choose Us (Grid) */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We are more than just a notes library. We are a complete ecosystem for your academic growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FaRocket className="text-pink-500" />}
                            title="Fast & Reliable"
                            desc="Lightning fast uploads and downloads. Our servers are optimized for speed."
                        />
                        <FeatureCard
                            icon={<FaHandshake className="text-indigo-500" />}
                            title="Community Driven"
                            desc="Built by students, for students. Share your knowledge and help others grow."
                        />
                        <FeatureCard
                            icon={<FaLightbulb className="text-yellow-500" />}
                            title="Placement Focus"
                            desc="Specialized resources for DSA, Aptitude, and Interview preparation."
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-purple-900 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full filter blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your Grades?</h2>
                        <p className="text-indigo-200 mb-8 max-w-2xl mx-auto text-lg">
                            Join thousands of students who are already learning smarter, not harder.
                        </p>
                        <button className="bg-white text-slate-900 font-bold py-4 px-10 rounded-full hover:bg-indigo-50 transition transform hover:scale-105 shadow-xl">
                            Get Started Now
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}

// Helper Components
function StatCard({ icon, count, label }) {
    return (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-b-4 border-indigo-500 flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300">
            <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4">{icon}</div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{count}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">{label}</div>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-gray-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
