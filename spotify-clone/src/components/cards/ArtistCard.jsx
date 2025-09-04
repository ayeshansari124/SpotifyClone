export default function ArtistCard({ image, name }) {
  return (
    <div className="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-[#242424] relative transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="rounded-full w-full aspect-square object-cover"
      />
      <button className="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
        <img src="./images/svg/play.svg" alt="Play" />
      </button>
      <span className="font-bold text-lg mt-2 break-words w-full leading-snug">
        {name}
      </span>
      <span className="text-sm text-gray-200 break-words w-full leading-tight">
        Artist
      </span>
    </div>
  );
}
