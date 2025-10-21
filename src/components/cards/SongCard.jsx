export default function SongCard({ image, title, artist }) {
  return (
    <div className="card group rounded-lg p-1 sm:p-2 flex-shrink-0 w-[140px] sm:w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-[#242424] relative transition-all duration-300 text-gray-200">
      <img
        src={image}
        alt={title}
        className="h-[140px] sm:h-[180px] w-[140px] sm:w-[180px] rounded-lg object-cover"
      />
      <button className="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-10 w-10 sm:h-12 sm:w-12 bg-green-600 rounded-full absolute top-[80px] sm:top-[110px] right-0 m-3 sm:m-5 p-2 sm:p-3">
        <img src="./images/svg/play.svg" alt="Play" />
      </button>
      <span className="font-bold text-sm sm:text-lg mt-2 break-words w-full leading-snug">
        {title}
      </span>
      <span className="text-xs sm:text-sm text-gray-200 break-words w-full leading-tight">
        {artist}
      </span>
    </div>
  );
}
