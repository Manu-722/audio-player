import SongCard from "./SongCard";

const Results = ({ results }) => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {results.map((song) => (
        <SongCard key={song.trackId} song={song} />
      ))}
    </div>
  );
};

export default Results;