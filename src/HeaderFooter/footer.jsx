import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🟢 Define handleSubmit function properly
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Simulate API call or subscription
    setTimeout(() => {
      setLoading(false);
      setMessage("Thank you for subscribing!");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-white mb-3">Phaton</h2>
            <p className="text-sm text-gray-400 mb-1">Subscribe to Updates</p>
            <p className="text-xs text-gray-400">
              Stay informed about our latest digital products and offers.
            </p>
          </div>

          <div className="w-full md:w-2/3 max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Here"
                required
                className="flex-1 px-3 py-2 text-sm bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 cursor-pointer bg-blue-700 hover:bg-gray-600 text-white text-sm rounded-md transition disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Join"}
              </button>
            </form>

            {message && (
              <p className="text-xs mt-2 text-gray-400">{message}</p>
            )}

            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you accept our Privacy Policy and Terms.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-10"></div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            {
              title: "Quick Links",
              links: [
                { to: "/about", text: "About Us" },
                { to: "/faq", text: "FAQs" },
                { to: "/contact", text: "Contact Support" },
                { to: "/privacy", text: "Privacy Policy" },
                { to: "/terms", text: "Terms of Service" },
              ],
            },
            {
              title: "Follow Us",
              links: [
                { to: "/", text: "Facebook Page" },
                { to: "/", text: "Tweet Feed" },
                { to: "/", text: "Instagram Gallery" },
                { to: "/", text: "Linkedin Profile" },
                { to: "/", text: "Youtube Channel" },
              ],
            },
            {
              title: "Resources",
              links: [
                { to: "/", text: "Blog Posts" },
                { to: "/", text: "Case Studies" },
                { to: "/", text: "Webinars" },
                { to: "/", text: "Ebooks" },
                { to: "/", text: "Guides" },
              ],
            },
            {
              title: "Support",
              links: [
                { to: "/", text: "Help Center" },
                { to: "/", text: "Live Chat" },
                { to: "/", text: "Feedback" },
                { to: "/", text: "Community Forum" },
                { to: "/", text: "Stay Connected" },
              ],
            },
            {
              title: "Contact Us",
              links: [
                { to: "/", text: "Email Newsletter" },
                { to: "/", text: "Latest Updates" },
                { to: "/", text: "Special Offers" },
                { to: "/", text: "Product News" },
                { to: "/", text: "Exclusive Content" },
              ],
            },
            {
              title: "Legal",
              links: [
                { to: "/", text: "Terms of Use" },
                { to: "/", text: "Cookie Policy" },
                { to: "/", text: "User Agreement" },
                { to: "/", text: "Data Protection" },
                { to: "/", text: "Credits" },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link to={link.to} className="hover:text-blue-400">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-right text-xs text-gray-500">
          © {new Date().getFullYear()} Phaton. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
