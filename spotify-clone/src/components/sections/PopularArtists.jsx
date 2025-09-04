import ArtistCard from "../cards/ArtistCard";

const artists = [
  { image: "./images/popular_artists/anirudh_ravichander.jpg", name: "Anirudh Ravichander" },
  { image: "./images/popular_artists/ar_rahman.jpg", name: "A.R. Rahman" },
  { image: "./images/popular_artists/arijit_singh.jpg", name: "Arijit Singh" },
  { image: "./images/popular_artists/atif_aslam.jpg", name: "Atif Aslam" },
  { image: "./images/popular_artists/pritam.jpg", name: "Pritam" },
  { image: "./images/popular_artists/sachin_jigar.jpg", name: "Sachin-Jigar" },
];

export default function PopularArtists() {
  return (
    <div className="m-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl cursor-pointer hover:underline">
          Popular Artists
        </h2>
        <button className="text-sm hover:underline cursor-pointer">Show All</button>
      </div>
      <div className="flex gap-4 p-4 m-2 overflow-x-auto scrollbar-hide">
        {artists.map((artist, index) => (
          <ArtistCard key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}
