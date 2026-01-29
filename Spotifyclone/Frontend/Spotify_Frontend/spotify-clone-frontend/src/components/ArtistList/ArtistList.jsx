import "./ArtistList.css";

function ArtistList({ artists, followedArtists, onToggleFollow }) {
  return (
    <div className="artist-list">
      {artists.map((artist) => {
        const isFollowed = followedArtists.includes(artist.id);

        return (
          <div key={artist.id} className="artist-card">
            <div className="artist-avatar">👤</div>
            <p className="artist-name">{artist.name}</p>

            <button
              className={isFollowed ? "unfollow-btn" : "follow-btn"}
              onClick={() => onToggleFollow(artist.id)}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ArtistList;
