import SongCard from "../cards/SongCard";

const songs = [
  { image: "./images/trending_songs/sahiba.jpg", title: "Sahiba", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/atpeace.jpg", title: "At Peace", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/dhun.jpg", title: "Dhun", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/gulabiaankhein.jpg", title: "Gulaabi Ankhein", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/ishqbawla.jpg", title: "Ishq Bawla", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/qaydese.jpg", title: "Qayde Se", artist: "Aditya Rikhari" },
];

export default function TrendingSongs() {
  return (
    <div className="m-5">
      <div className="flex justify-between items-center text-gray-200">
        <h2 className="font-bold text-2xl cursor-pointer hover:underline">Trending Songs</h2>
        <button className="text-sm hover:underline cursor-pointer">Show All</button>
      </div>
      <div className="flex gap-4 p-4 m-2 overflow-x-auto scrollbar-hide">
        {songs.map((song, index) => (
          <SongCard key={index} {...song} />
        ))}
      </div>
    </div>
  );
}
