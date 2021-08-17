import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs,setCurrentSong,audioRef,isPlaying,setSongs,libraryStatus,currentSong}) {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className = "library-songs">
          {songs.map(song => <LibrarySong
           songs={songs} 
           setCurrentSong={setCurrentSong} 
           currentSong={currentSong}
           song = {song}
           id={song.id}
           key={song.id}
           audioRef={audioRef}
           isPlaying={isPlaying}
           setSongs={setSongs}
            />)}
      </div>
      </div>
    )
}
