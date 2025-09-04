import AlbumCard from "../cards/AlbumCard";

const albums = [
  { image: "./images/popular_albums_and_singles/aashiqui2.jpg", title: "Aashiqui 2", artist: "Mithoon, Ankit Tiwari, Jeet Ganguuli" },
  { image: "./images/popular_albums_and_singles/ye_jawaani_hai_deewani.jpg", title: "Yeh Jawaani Hai Deewani", artist: "Pritam" },
  { image: "./images/popular_albums_and_singles/sanam_teri_kasam.jpg", title: "Sanam Teri Kasam", artist: "Himesh Reshammiya, Sameer Anjaan" },
  { image: "./images/popular_albums_and_singles/finding_her.jpg", title: "Finding Her", artist: "Kushagra, Bharath, Saaheal" },
  { image: "./images/popular_albums_and_singles/young_goat.jpg", title: "Young G.O.A.T", artist: "Cheema Y, Gur Seedhu" },
  { image: "./images/popular_albums_and_singles/making_memories.jpg", title: "Making Memories", artist: "Karan Aujla, Ikky" },
];

export default function PopularAlbums() {
  return (
    <div className="m-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl cursor-pointer hover:underline">
          Popular Albums & Singles
        </h2>
        <button className="text-sm hover:underline cursor-pointer">Show All</button>
      </div>
      <div className="flex gap-4 p-4 m-2 overflow-x-auto scrollbar-hide">
        {albums.map((album, index) => (
          <AlbumCard key={index} {...album} />
        ))}
      </div>
    </div>
  );
}
