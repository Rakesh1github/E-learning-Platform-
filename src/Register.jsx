import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            navigate("/");
        } catch (err) {
            setError("Registration failed. Please check your details.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (err) {
            setError("Google sign-in failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-slate-900 transition-colors duration-300">

            {/* Left Side - AI Image */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="AI Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col justify-center px-12 text-white">
                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Join the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revolution</span>
                    </h1>
                    <p className="text-lg opacity-80 max-w-md">
                        Create an account to start your journey. Share notes, solve problems, and grow with the community.
                    </p>
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-slate-700">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account 🚀</h2>
                        <p className="text-gray-500 dark:text-gray-400">Join SkillsAura today</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 rounded-xl text-sm text-center animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-5">

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <FaUser />
                                </div>
                                <input
                                    type="text"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition dark:text-white"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <FaEnvelope />
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition dark:text-white"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <FaLock />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition dark:text-white"
                                    placeholder="Create a strong password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex justify-center items-center gap-2 mt-2"
                        >
                            {loading ? "Creating Account..." : <>Sign Up <FaArrowRight /></>}
                        </button>
                    </form>

                    <div className="my-8 flex items-center">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                        <span className="mx-4 text-gray-400 text-sm">Or register with</span>
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-3 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-600 transition flex justify-center items-center gap-3"
                    >
                        <FaGoogle className="text-red-500" /> Sign up with Google
                    </button>

                    <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-600 hover:text-purple-500 font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
