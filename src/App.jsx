import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Category from "./components/Categories";

function App() {

  const [searchQuery, setSearchQuery] = useState('best sellers');

  return (
    <>
      <div className="min-h-screen bg-gray-900/20">
        <Navbar handelSearch={(term) => setSearchQuery(term)}/>
        <Banner />
        <Category />
        <Hero searchQuery={searchQuery}/>
      </div>
      <Footer />
    </>
  );
}

export default App
