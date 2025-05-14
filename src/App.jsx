import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMusic = async () => {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=10`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <SearchBar query={query} setQuery={setQuery} searchMusic={searchMusic} />
        <Results results={results} />
      </div>
    </div>
  );
};

export default App;