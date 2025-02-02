const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="md:m-0 my-4">
        <button className="bg-white text-black text-x px-6 py-2 md:py-3 md:px-12 rounded-sm hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className=" hidden md:inline-block bg-gray-500 text-x p-3 px-12 bg-opacity-50 rounded-sm mx-2">
        More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
