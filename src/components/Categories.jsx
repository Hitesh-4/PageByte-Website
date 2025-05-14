import React from "react";
import first from "./img/Fiction.jpg";
import second from "./img/Non-Fiction.jpg";
import four from "./img/Fantasy.png";
import third from "./img/Mystery.jpg";
import five from "./img/ Science-Fiction.jpeg";
import six from "./img/Biography.jpeg";
import seven from "./img/History.jpeg";
import eight from "./img/Romance.jpeg";
import { div } from "framer-motion/client";

const categories = [
  { name: "Fiction", image: first },
  { name: "Non-Fiction", image: second },
  { name: "Mystery", image: third },
  { name: "Fantasy", image: four },
  { name: "Science-Fiction", image: five },
  { name: "Biography", image: six },
  { name: "History", image: seven },
  { name: "Romance", image: eight },
];

const Category = ({ onSelectCategory = () => {} }) => {
  return (
    <div className="min-h-screen pt-16 md:pt-12 bg-gray-100  p-4 sm:p-6 md:p-8">
      {/* <div className=" border border-black m-7 p-2 rounded-lg">  */}
      <h1 className="text-4xl font-bold text-center mb-6">Categories</h1>
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className="group relative bg-gray-800/30 rounded-2xl md:rounded-2xl backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 shadow-lg hover:shadow-xl md:shadow-2xl hover:shadow-gray-900/90 "
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent">
                <span className="text-black text-5xl mt-4 font-bold transition-all duration-300 ">
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Category;
