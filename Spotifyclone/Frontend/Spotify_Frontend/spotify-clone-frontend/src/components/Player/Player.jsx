import "./Player.css";

function Player({ currentSong }) {
  if (!currentSong) {
    return (
      <div className="player">
        <p>Select a song to play</p>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="song-info">
        <p>{currentSong.title}</p>
        <small>{currentSong.artist}</small>
      </div>

      <audio controls src={currentSong.url} autoPlay>
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default Player;
