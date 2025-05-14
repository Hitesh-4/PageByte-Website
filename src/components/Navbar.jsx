import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import FloatingParticle from "./FloatingParticle";

const Navbar = ({handelSearch}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    handelSearch(searchTerm);
  };

  //   DYNAMIC EFFECT HOVER
  useEffect(() => {
    const handelMouseMove = (e) => {
      const cards = document.querySelectorAll(".dynamic-gradient");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handelMouseMove);
    return () => window.removeEventListener("mousemove", handelMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-2xl bg-gray-100   shadow-[0_0_60px_15px_rgba(96,163,250,0.3)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex min-h[4rem] md:min-h[5rem] items-center justify-between flex-wrap gap-y-3 gap-x-4 py-2">
          {/* Logo */}
          <div
            className="dynamic-gradient relative overflow-hidden rounded-2xl p-1 hover:scale-105 transition-transform duration-300 order-1 md:order-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              "--mouse-x": "0px",
              "--mouse-y": "0px",
              background: isHovered
                ? `radial-gradient( circle at var(--mouse-x) var(--mouse-y), rgb(54, 116, 181), transparent 40%)`
                : "transparent",
            }}
          >
            <div className=" rounded-xl p-2">
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent animate-text-shine">
                <a
                  href="/"
                  className="ml-1 md:ml-2 "
                >
                  PageByte
                </a>
              </h1>
              
            </div>
            
          </div>

          {/* SEARCH BAR */}
          <div className="w-full md:flex-1 md:max-w-2xl order-3 md:order-2 lg:ml-6 md:mx-4">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative group">

                <div className="relative dynamic-gradient">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
                    <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-300 drop-shadow-glow z-10" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Discover your next read..."
                    className="block w-full rounded-2xl border border-gray-900/50 bg-gray-900/90 py-2 md:py-3 pl-10 md:pl-12 pr-4 md:pr-6 text-sm md:text-base text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/30 backdrop-blur-xl shadow-xl transition-all duration-300 "
                  />
                  <FloatingParticle />
                </div>
              </div>
            </form>
          </div>

          {/* AVATAR SECTION  */}
          <div className="flex items-center space-x-4 order-2 md:order-3 ml-auto md:ml-0">
            <button className="relative p-1 group hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-900/90 border-2 border-cyan-300/20  backdrop-blur-sm overflow-hidden ">
                <span className="text-lg md:text-xl animate-holo">
                  &#128220;
                </span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 h-1 w-1 md:h-3 md:w-3 bg-blue-600 rounded-full shadow-glow-pulse" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
