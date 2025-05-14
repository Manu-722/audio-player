const SongCard = ({ song }) => {
  return (
    <div className="card">
      <img src={song.artworkUrl100} alt={song.trackName} />
      <h3>{song.trackName}</h3>
      <p>{song.artistName}</p>
      <audio controls>
        <source src={song.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SongCard;