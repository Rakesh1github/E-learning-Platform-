import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError("Invalid email or password. Please try again.");
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 z-10"></div>
                <img
                    src="/src/assets/ai_login_bg.png" // We will need to move the generated image here or use a placeholder if not moved yet. 
                    // Since I cannot move files to src/assets directly without knowing if it exists, I will use a placeholder URL for now or assume the user will move it. 
                    // Actually, I should use a high-quality external URL or the generated one if I can copy it. 
                    // For now, let's use a reliable Unsplash placeholder that matches the theme to ensure it looks good immediately.
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="AI Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col justify-center px-12 text-white">
                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Welcome to the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future of Learning</span>
                    </h1>
                    <p className="text-lg opacity-80 max-w-md">
                        Join SkillsAura to access verified notes, collaborate with peers, and master new technologies.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-slate-700">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back! 👋</h2>
                        <p className="text-gray-500 dark:text-gray-400">Please sign in to your account</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 rounded-xl text-sm text-center animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <FaEnvelope />
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
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
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-600 dark:text-gray-400 cursor-pointer">
                                <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-500 font-semibold">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
                        >
                            {loading ? "Signing in..." : <>Sign In <FaArrowRight /></>}
                        </button>
                    </form>

                    <div className="my-8 flex items-center">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                        <span className="mx-4 text-gray-400 text-sm">Or continue with</span>
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-3 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-600 transition flex justify-center items-center gap-3"
                    >
                        <FaGoogle className="text-red-500" /> Sign in with Google
                    </button>

                    <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-600 hover:text-blue-500 font-bold hover:underline">
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
