import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import PlayerControls from "./components/PlayerControls";
import "./index.css";

const previewSongs = [
  {
    trackName: "Blinding Lights",
    artistName: "The Weeknd",
    artworkUrl100:
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/4e/9a/e6/4e9ae63f-b42b-5d3b-9d6f-e3cd69b9a9b7/20UMGIM04140.rgb.jpg/100x100bb.jpg",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/bf/3c/0c/bf3c0cb4-3806-b177-9cb0-2637bda015ad/mzaf_12407213020673473714.plus.aac.p.m4a",
  },
];

const App = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const searchMusic = async () => {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      query
    )}&media=music&limit=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSongs(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToFavorites = (song) => {
    setFavorites([...favorites, song]);
  };

  return (
    <div>
      <Navbar />
      <SearchBar query={query} setQuery={setQuery} searchMusic={searchMusic} />

      <h2>Trending Songs</h2>
      <SongList songs={previewSongs} onSelect={setCurrentSong} addToFavorites={addToFavorites} />

      <h2>Search Results</h2>
      <SongList songs={songs} onSelect={setCurrentSong} addToFavorites={addToFavorites} />

      {currentSong && <PlayerControls song={currentSong} />}
    </div>
  );
};

export default App;