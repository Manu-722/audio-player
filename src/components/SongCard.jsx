const SongCard = ({ song }) => {
  return (
    <div className="card">
      <img src={song.artworkUrl100} alt="Album Art" />
      <h3>{song.trackName}</h3>
      <p>{song.artistName}</p>
    </div>
  );
};

export default SongCard;