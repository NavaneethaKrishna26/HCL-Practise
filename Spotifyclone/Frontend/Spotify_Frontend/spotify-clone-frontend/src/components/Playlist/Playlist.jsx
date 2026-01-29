import { useState } from "react";
import "./Playlist.css";

function Playlist({ playlists, onCreate, onRename, onRemoveSong }) {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleCreate = () => {
    if (!newPlaylistName.trim()) return;
    onCreate(newPlaylistName);
    setNewPlaylistName("");
  };

  return (
    <div className="playlist-container">
      <h3>Your Playlists</h3>

      <div className="create-playlist">
        <input
          type="text"
          placeholder="New playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      {playlists.map((playlist) => (
        <div key={playlist.id} className="playlist-item-full">
          {/* Playlist Header */}
          <div className="playlist-header">
            {editingId === playlist.id ? (
              <>
                <input
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
                <button
                  onClick={() => {
                    onRename(playlist.id, updatedName);
                    setEditingId(null);
                    setUpdatedName("");
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <strong>{playlist.name}</strong>
                <button onClick={() => setEditingId(playlist.id)}>
                  Rename
                </button>
              </>
            )}
          </div>

          {/* Playlist Songs */}
          {playlist.songs.length === 0 ? (
            <p className="empty-text">No songs yet</p>
          ) : (
            playlist.songs.map((song) => (
              <div key={song.id} className="playlist-song">
                <span>{song.title}</span>
                <button
                  onClick={() =>
                    onRemoveSong(playlist.id, song.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default Playlist;
