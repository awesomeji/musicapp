import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({
  audioRef,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setSongs,
}) {
 
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((s) => {
      if (s.id === nextPrev.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }
 
  // state
  const playSongHandler = () => {
    //okay now I wanna make this function that if you click play icon
    // plaSongHandler bring audio tag and play it
    // however ,since this is not vanilla JS so  you can't use eventlistener such as getElementByTagName(audio),
    // how are you going to bring audio tag without event handler?
    // The way is using ref
    // you gave audioRef as ref attribute to audio tag which means you grab auido tag now and use it
    // like you grab it as event handler

    

    console.log(audioRef.current);

    if (isPlaying) {
      audioRef.current.pause();
      //play(),pause() are audio tag methods
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.currentTime });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]); // 나머지를 이용한 간단한 수학임 직관적으로 생각해보셈
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
      console.log(`next index ${currentIndex + 1}`);
      console.log(`songs length ${songs.length}`);
    } else if (direction === "skip-back") {
      await setCurrentSong(songs[(currentIndex - 1 + songs.length) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1 + songs.length) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
  };
  //add the styles
  const trackAnim ={
    transform :`translateX(${songInfo.animationPercentage}%)`
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{songInfo.currentTime ? getTime(songInfo.currentTime) : '0:00'}</p>
        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className='track'>
        <input
          min={0}
          max={songInfo.duration || 0}
          //duration is changable so gave it defalut value 0
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}
