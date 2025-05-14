import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import PlayerControls from "./components/PlayerControls";
import "./index.css";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [showPreviews, setShowPreviews] = useState(true);

  const handleSearch = async (term) => {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${term}&entity=song&limit=12`
    );
    const data = await response.json();
    setSongs(data.results);
    setShowPreviews(false);
  };

  const previewSongs = [
    {
      trackName: "Blinding Lights",
      artistName: "The Weeknd",
      artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/4e/9a/e6/4e9ae63f-b42b-5d3b-9d6f-e3cd69b9a9b7/20UMGIM04140.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/bf/3c/0c/bf3c0cb4-3806-b177-9cb0-2637bda015ad/mzaf_12407213020673473714.plus.aac.p.m4a"
    },
    {
      trackName: "Levitating",
      artistName: "Dua Lipa",
      artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ef/07/ae/ef07ae13-160e-f1cf-1a9d-2053d17f3c38/20UMGIM33798.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/bd/d3/82/bdd382b8-e6e4-c4f7-e4d2-16881a06248c/mzaf_13210322653986120533.plus.aac.p.m4a"
    },
    {
      trackName: "Save Your Tears",
      artistName: "The Weeknd",
      artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/16/ae/f2/16aef2d0-8e68-fb2e-14c1-50dc11a621a0/20UMGIM27244.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/3c/e4/fc/3ce4fc77-b7cd-4a2e-06aa-41ccce7e6a38/mzaf_10037741526615040482.plus.aac.p.m4a"
    },
    {
      trackName: "Stay",
      artistName: "The Kid LAROI & Justin Bieber",
      artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/22/fb/f2/22fbf281-b944-9a34-c75f-684bcf2787fd/21UMGIM63536.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/25/94/c9/2594c92b-4f0b-3056-6fc0-5f6e0b0fd55c/mzaf_11108206054382875858.plus.aac.p.m4a"
    }
  ];

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {showPreviews && (
        <SongList songs={previewSongs} onSelect={setCurrentSong} />
      )}
      {!showPreviews && (
        <>
          <h2 className="section-title">Search Results</h2>
          <SongList songs={songs} onSelect={setCurrentSong} />
        </>
      )}
      {currentSong && <PlayerControls song={currentSong} />}
    </div>
  );
};

export default App;
