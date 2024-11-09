const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-xl text-white p-3 px-12 bg-opacity-50 rounded-sm">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-xl text-white p-3 px-12 bg-opacity-50 rounded-sm mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
