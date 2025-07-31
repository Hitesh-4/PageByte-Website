import React from "react";
import { motion } from "framer-motion";
import image from "../assets/book1.png";
import FloatingParticle from "./FloatingParticle";
import { StarIcon } from "@heroicons/react/24/outline";

function Banner() {
  return (
    <div className=" min-h-screen bg-gray-100 relative overflow-hidden ">
      <div className=" container mx-auto px-4 h-screen flex items-center ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:mt-4">
          
          {/* TEXT CONTENT  */}
          <div className=" lg:col-span-1 flex flex-col justify-center  space-y-6">
            <motion.p className="flex gap-2 text-lg text-black ">
              <StarIcon className="   text-amber-400 drop-shadow-glow z-10 md:block sm:w-0 hidden  lg:w-6 lg:h-6" />
              Start your reading journey today
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className=" text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Where every page is a new Adventure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className=" text-lg text-black"
            >
              From classics to contemporary, our bookstore offers a wide
              selection of books to suit every taste and interest. Start
              exploring our shelves today and uncover your next literary gem.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("hero")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className=" bg-gradient-to-r bg-gray-900/90 w-fit px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer"
            >
              Start Exploring
              <FloatingParticle />
            </motion.button>
          </div>

          {/* IMG CONTAINER  */}
          <div className=" md:col-span-1 lg:col-span-2 h-64 sm:h-80 md:h-[600px] lg:h-[700px] relative flex items-center justify-center">
            <motion.div
              className=" relative w-full h-full"
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className=" absolute inset-0 rounded-3xl backdrop-blur-xl overflow-hidden">
                <img
                  src={image}
                  alt="Book"
                  className=" w-full h-full object-contain p-8 text-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
