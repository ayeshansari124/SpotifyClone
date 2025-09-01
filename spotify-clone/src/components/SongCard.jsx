
import { Play } from "lucide-react";

const SongCard = ({ title, artist, image }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl hover:bg-gray-700 transition cursor-pointer group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-40 object-cover"
        />
        {/* Play button on hover */}
        <button className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
          <Play className="w-5 h-5 text-white" />
        </button>
      </div>
      <h3 className="mt-3 text-white font-semibold truncate">{title}</h3>
      <p className="text-gray-400 text-sm truncate">{artist}</p>
    </div>
  );
};

export default SongCard;
