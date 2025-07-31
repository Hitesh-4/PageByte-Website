import { StarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const Hero = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPages = 6;
  const totalPages = 6;

  useEffect(() => {
    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
                    searchQuery
                )}&maxResults=35&key=AIzaSyAtZxon2bKZvQUnvW-n1KSxScTAa9cLO3I`
            );
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();

            const mappedBooks = data.items?.map(item => ({
                id: item.id,
                title: item.volumeInfo.title || 'Untitled',
                authors: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
                categories: item.volumeInfo.categories?.join(', ') || 'General',
                rating: item.volumeInfo.averageRating || 0,
                pageCount: item.volumeInfo.pageCount || 'N/A',
                printType: item.volumeInfo.printType || 'Unknown',
                ratingsCount: item.volumeInfo.ratingsCount || 0,
                imageUrl: item.volumeInfo.imageLinks?.thumbnail || '',
                description: item.volumeInfo.description || '',
                infoLink: item.volumeInfo.infoLink || '#',
            })) || [];

        let limitedBooks = mappedBooks.slice(0, 35);
        if (limitedBooks.length < 35) {
          const missingCount = 35 - limitedBooks.length;
          const dummyBooks = Array.from({ length: missingCount }, (_, i) => ({
            dummy: true,
            id: `dummy-${i}`,
          }));
          limitedBooks = [...limitedBooks, ...dummyBooks];
        }
        setBooks(limitedBooks)
      } catch (error) {
        console.error("Error Fetching Books:", error);
        const dummyBooks = Array.from({ length: 35 }, (_, i) => ({
          dummy: true,
          id: `dummy-${i}`,
        }));
        setBooks(dummyBooks);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  const paginatedBooks = books.slice(
    (currentPage - 1) * itemPerPages,
    currentPage * itemPerPages
  );

  const getPleceholder = (title) => {
    const initials = title
      .split(" ")
      .slice(0, 3)
      .map((word) => word[0]?.toUpperCase() || "")
      .join("");
    return `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
    <rect width="100%" height="100%" fill="#2D3748"/>
    <text x="50%" y="50%" fill="#4A5568" font-family="monospace" font-size="80" 
          text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`
    )}`;
  };

  const generatePageNumber = () => [1, 2, 3, 4, 5, 6];

  if (loading) {
    return (
      <div className=" animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className=" h-64 md:h-96 bg-gray-800/50 rounded-xl md:rounded-2xl backdrop-blur-lg"
          />
        ))}
      </div>
    );
  }

  const allDummy = books.every((book) => book.dummy);
  if (allDummy) {
    return (
      <div className=" min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center">
        <p className=" text-cyan-300 text-lg md:text-xl text-center">
          No books found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen pt-10 md:pt-12 bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className=" max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Books</h1>
        <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {paginatedBooks.map((book, index) => {
            if (book.dummy) {
              return (
                <div
                  key={book.id || index}
                  className=" group relative bg-gray-800/30 rounded-xl md:rounded-2xl backdrop-blur-xl border border-dashed border-gray-700/50 flex items-center justify-center h-64 md:h-96"
                >
                  <p className=" text-gray-400 text-sm md:text-base">No Book</p>
                </div>
              );
            }
            return (
              <div
                id="hero"
                key={book.id} 
                className=" relative bg-gray-500 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/10 hover:border-black transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 shadow-lg hover:shadow-xl md:shadow-2xl hover:shadow-black"
              >
                <a
                  href={book.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" absolute inset-0 z-10 cursor-pointer"
                  aria-label={`view ${book.title}`}
                ></a>
                <div className=" p-4 md:p-6">
                  <div className=" relative aspect-[4/5] w-full rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10">
                    <img
                      src={book.imageUrl || getPleceholder(book.title)}
                      alt={book.title}
                      className=" w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                      onError={(e) =>
                        (e.target.src = getPleceholder(book.title))
                      }
                    />
                    <div className=" absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
                      <span className=" text-xs md:text-sm font-medium to-cyan-300">
                        {book.printType}
                      </span>
                    </div>
                  </div>

                  <div className=" mt-4 md:mt-6">
                    <h3 className=" text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {book.title}
                    </h3>
                    <p className=" text-gray-400 mt-1 md:mt-2 text-sm md:text-base">
                      {book.authors}
                    </p>

                    <div className=" flex items-center mt-2 md:mt-3">
                      <div className=" flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 md:h-5 md:w-5 ${
                              i < Math.floor(book.rating)
                                ? "fill-current"
                                : "fill-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className=" ml-2 text-cyan-300 text-sm md:text-base">
                        {book.rating}
                      </span>
                    </div>

                    <div className=" grid grid-cols-2 gap-2 md:gap-4 md:mt-4 text-xs md:text-sm">
                      <div className=" flex items-center space-x-1 md:space-x-2">
                        <span className=" to-gray-400">Pages:</span>
                        <span className=" text-cyan-300">{book.pageCount}</span>
                      </div>
                      <div className=" flex items-center space-x-1 md:space-x-2">
                        <span className=" to-gray-400">Format:</span>
                        <span className=" text-purple-300">
                          {book.printType}
                        </span>
                      </div>
                      <div className=" flex items-center space-x-1 md:space-x-2">
                        <span className=" to-gray-400">Ratings:</span>
                        <span className=" text-blue-300">
                          {book.ratingsCount}
                        </span>
                      </div>
                    </div>

                    <div className=" mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
                      {book.categories
                        .split(",")
                        .slice(0, 3)
                        .map((category, index) => (
                          <span
                            key={index}
                            className=" px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-700/50 text-xs text-cyan-300 backdrop-blur-sm"
                          >
                            {category.trim()}
                            {index === 2 &&
                              book.categories.split(",").length > 3 && (
                                <span className=" ml-1 text-gray-400">
                                  +{book.categories.split(",").length - 3}
                                </span>
                              )}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className=" absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-50/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none " />
              </div>
            );
          })}
        </div>

        <div className=" mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-2 md:gap-3 cursor-pointer">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className=" cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg bg-gray-900/80 border border-gray-700/50 text-cyan-300 text-xs md:text-sm hover:bg-gray-900/60 transition-colors disabled:opacity-50"
          >
            Previous
          </button>

          {generatePageNumber().map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={` cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg text-xs md:text-sm ${
                page === currentPage
                  ? "bg-cyan-400/30 text-cyan-300"
                  : "bg-gray-900/80 text-cyan-300 hover:bg-gray-900/60"}`}>
                    {page}
            </button>
          ))}

            <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className=" px-3 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg bg-gray-900/80 border border-gray-700/50 text-cyan-300 text-xs md:text-sm hover:bg-gray-900/60 transition-colors disabled:opacity-50 cursor-pointer"
          >
            Next 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
