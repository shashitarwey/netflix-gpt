const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-x p-3 px-12 rounded-sm hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-x p-3 px-12 bg-opacity-50 rounded-sm mx-2">
        More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
