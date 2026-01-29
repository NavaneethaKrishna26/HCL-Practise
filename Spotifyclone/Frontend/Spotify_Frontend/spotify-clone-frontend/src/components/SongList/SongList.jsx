import "./SongList.css";

function SongList({ songs = [], onSongSelect, playlists = [], onAddToPlaylist }) {
  return (
    <div className="song-list">
      <h3>Songs</h3>

      {songs.map((song) => (
        <div key={song.id} className="song-item">

          {/* Click to play song */}
          <button
            className="song-info"
            onClick={() => onSongSelect(song)}
          >
            <p className="song-title">{song.title}</p>
            <p className="song-artist">{song.artist}</p>
          </button>

          {/* Add to playlist */}
          {playlists.length > 0 && (
            <select
              defaultValue=""
              onChange={(e) => {
                onAddToPlaylist(song, e.target.value);
                e.target.value = "";
              }}
            >
              <option value="" disabled>
                Add to playlist
              </option>
              {playlists.map((playlist) => (
                <option key={playlist.id} value={playlist.id}>
                  {playlist.name}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      {songs.length === 0 && (
        <p className="empty-message">No songs found</p>
      )}
    </div>
  );
}

export default SongList;
