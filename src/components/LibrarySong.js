import React from 'react'

export default function LibrarySong({song,setCurrentSong,songs,id,audioRef,isPlaying,setSongs,currentSong}) {
  const songSelectHandler= async ()=>{
   await setCurrentSong(song)
   //add active state
   const newSongs = songs.map((s)=>{
     if(s.id === id){
       return{
         ...s,
         active:true,
       }
     }else{
       return{
         ...s,
         active:false,
       }
     }
   })
   setSongs(newSongs)
   //check if the song is playing
   if(isPlaying) audioRef.current.play();
   
  }
  return (
    <div onClick={songSelectHandler} 
     className={`library-song ${song.active ? 'selected' : ""}`}
     style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} 
     >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
      <h3>{song.name}</h3>
      <h5>{song.artist}</h5>
      </div>
    </div>
  )
}

