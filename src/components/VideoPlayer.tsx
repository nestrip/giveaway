import { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.src = "https://r2.keircn.com/nggyu.mp4";

    video.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
      URL.revokeObjectURL(video.src);
    });

    return () => {
      URL.revokeObjectURL(video.src);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-white text-xl">Loading video...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video
        controls
        autoPlay
        preload="auto"
        className="w-full h-full max-w-4xl"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23fff' font-size='48'%3ELoading Video...%3C/text%3E%3C/svg%3E"
      >
        <source src="https://r2.keircn.com/11i28mz8(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
