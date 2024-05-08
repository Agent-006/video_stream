import { useRef } from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import videojs from "video.js";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "http://localhost:8000/uploads/courses/5502ab39-1052-4ae3-9862-00c27e23d929/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You cna handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
