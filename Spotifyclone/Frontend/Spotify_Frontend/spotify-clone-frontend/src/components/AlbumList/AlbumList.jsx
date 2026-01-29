import "./AlbumList.css";

function AlbumList({ albums }) {
  return (
    <div className="album-list">
      {albums.map((album) => (
        <div key={album.id} className="album-card">
          <div className="album-cover">🎵</div>
          <p className="album-title">{album.name}</p>
          <p className="album-artist">{album.artist}</p>
        </div>
      ))}
    </div>
  );
}

export default AlbumList;
