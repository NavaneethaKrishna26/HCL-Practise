import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Player from "../Player/Player";
import SongList from "../SongList/SongList";
import AlbumList from "../AlbumList/AlbumList";
import ArtistList from "../ArtistList/ArtistList";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

function Home() {
  // 🎵 Currently playing song
  const [currentSong, setCurrentSong] = useState(null);

  // 🔍 Search input text
  const [searchText, setSearchText] = useState("");

  // 📌 Active tab (songs / albums / artists)
  const [activeTab, setActiveTab] = useState("songs");

  // ⭐ Followed artist IDs
  const [followedArtists, setFollowedArtists] = useState([]);

  // 🎶 Dummy songs data
  const songs = [
    {
      id: 1,
      title: "Dreams",
      artist: "Alex",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Hope",
      artist: "John",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  // 💿 Dummy albums data
  const albums = [
    { id: 1, name: "Peace", artist: "Alex" },
    { id: 2, name: "Journey", artist: "John" },
  ];

  // 🎤 Dummy artists data
  const artists = [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
  ];

  // 🔁 Follow / Unfollow artist logic
  const toggleFollowArtist = (artistId) => {
    if (followedArtists.includes(artistId)) {
      // Unfollow artist
      setFollowedArtists(
        followedArtists.filter((id) => id !== artistId)
      );
    } else {
      // Follow artist
      setFollowedArtists([...followedArtists, artistId]);
    }
  };

  // 🔍 Filter data based on search text
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="content">
        {/* Search Bar */}
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
        />

        {/* Tabs */}
        <div className="tabs">
          <button onClick={() => setActiveTab("songs")}>Songs</button>
          <button onClick={() => setActiveTab("albums")}>Albums</button>
          <button onClick={() => setActiveTab("artists")}>Artists</button>
        </div>

        {/* Songs */}
        {activeTab === "songs" && (
          <SongList
            songs={filteredSongs}
            onSongSelect={setCurrentSong}
          />
        )}

        {/* Albums */}
        {activeTab === "albums" && (
          <AlbumList albums={filteredAlbums} />
        )}

        {/* Artists */}
        {activeTab === "artists" && (
          <ArtistList
            artists={filteredArtists}
            followedArtists={followedArtists}
            onToggleFollow={toggleFollowArtist}
          />
        )}
      </div>

      {/* Bottom Music Player */}
      <Player currentSong={currentSong} />
    </div>
  );
}

export default Home;
