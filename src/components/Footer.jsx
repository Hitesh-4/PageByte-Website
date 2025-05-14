import React from "react";
import FloatingParticle from "./FloatingParticle";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Github, Instagram, MessageSquare, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800">
      <FloatingParticle />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px8 py-12 md:py-16">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className=" space-y-6 text-center sm:text-left">
            <div className=" flex justify-center sm:justify-start items-center space-x-2">
              <a href="/"
              className=" text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              PageByte
              </a>
            </div>
            <p className=" text-gray-400 text-sm">
              Your gateway to infinite worlds. Discover, read, and escape into
              stories that matter.
            </p>
          </div>

          <div className=" space-y-4 text-center sm:text-left">
            <h3 className=" text-lg font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Explore
            </h3>
            <ul className=" space-y-3">
              {["Trending", "New release", "Genres", "Authors"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className=" text-gray-400 hover:pl-2  transition-all duration-300 hover:text-cyan-300 text-sm  flex items-center justify-center sm:justify-start group "
                  >
                    <span className="  transition-opacity" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" space-y-4 text-center sm:text-left">
            <h3 className=" text-lg font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Power By
            </h3>
            <div className=" flex flex-wrap gap-3 justify-center sm:justify-start">
              {["React", "Tailwind", "Vite", "GoogleAPI"].map((tech) => (
                <span
                  className=" p-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyan-300 transition-all"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className=" space-y-4 text-center sm:text-left">
            <h3 className=" text-lg font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className=" flex justify-center sm:justify-start space-x-4">
              {[
                ["Github", "hover:text-gray-500", Github],
                ["Twitter", "hover:text-sky-400", Twitter],
                ["Discord", "hover:text-indigo-500", MessageSquare],
                ["Instagram", "hover:text-pink-500", Instagram],
              ].map(([platform, className, Icon]) => (
                <a
                  href="https://github.com/Hitesh-4"
                  key={platform}
                  className={`text-gray-400 ${className} transition-colors hover:scale-110`}
                >
                  <span className=" sr-only">{platform}</span>
                  <Icon
                    className=" h-6 w-6 md:h-8 md:w-8 "
                    stroke="currentColor"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className=" border-t border-gray-800 mt-12 pt-8 text-center">
          <p className=" text-gray-500 text-sm mt-2">
            &copy; {new Date().getFullYear()} PageByte. All rights reserved.
          </p>

          <div className=" mt-2 flex flex-wrap justify-center space-x-4 text-gray-500 text-sm">
            <a href="#" className=" hover:text-cyan-300 transition-colors">Contact</a>
            <a href="#" className=" hover:text-cyan-300 transition-colors">Terms</a>
            <a href="#" className=" hover:text-cyan-300 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;