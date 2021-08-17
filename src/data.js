import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "sozu",
      artist: "mommy, Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-300x300.jpg",
      id: uuidv4(),
      active: true,
      //when a song is played, it is set to active
      color: ["#74A7E4", "#F1E3CD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19062",
    },
    {
      name: "What If I Told You",
      artist: "Juan Rios",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FDA694", "#795189"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21647",
    },
    {
      name: "Memories pt.2",
      artist: "Ruck P",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ['#FC966D',"#694648" ],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21660",
    },
    {
      name: "Fallin'",
      artist: "Ruck P, JAZ Lund",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ['#FC966D',"#694648" ],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20561",
    },
  ];
}

export default chillHop;
