
import { Play } from "lucide-react";

export default function ArtistCard({ name, image, songs }) {
  return (
    <div className="group relative w-48 bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      {/* Artist Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Overlay Play Button */}
      <button className="absolute bottom-3 right-3 bg-green-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
        <Play className="w-5 h-5 text-black" />
      </button>

      {/* Artist Details */}
      <div className="p-3">
        <h3 className="text-white font-semibold truncate">{name}</h3>
        <p className="text-gray-400 text-sm">{songs} Songs</p>
      </div>
    </div>
  );
}
