<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Spotify Clone</title>
        <link rel="stylesheet" href="./src/output.css" />
    </head>
    <body class="text-white bg-black">

        <!-- NAVBAR -->
        <div class="navbar sticky top-0 bg-black text-white w-full h-[10vh] flex justify-between items-center px-4">
    <!-- LEFT SECTION -->
    <div class="left flex items-center gap-4">
        <!-- Logo -->
        <div class="icon bg-darkgray h-10 w-10 rounded-full p-1 flex items-center justify-center">
            <img src="./images/svg/icon.svg" alt="Logo" class="h-full" />
        </div>

        <!-- Home Button -->
        <div class="home bg-darkgray h-10 w-10 rounded-full p-1 hover:cursor-pointer hover:scale-110 flex items-center justify-center transition">
            <img src="./images/svg/home.svg" alt="Home" class="h-full" />
        </div>

        <!-- Searchbar -->
        <div class="searchbar flex items-center bg-darkgray rounded-full px-2 py-1 transition-all duration-500 ease-in hover:bg-lightblack gap-2">
            <img src="./images/svg/search.svg" alt="Search Icon" class="h-6 w-6 hover:cursor-pointer hover:scale-110 transition"/>
            <input type="text" placeholder="What do you want to play?!"
                class="bg-transparent text-white px-4 py-2 w-[300px] font-semibold border-none focus:outline-none placeholder:text-sm" />
            <span class="w-px h-6 bg-gray-500"></span>
            <img src="./images/svg/briefcase.svg" alt="Briefcase Icon" class="h-6 w-6 hover:cursor-pointer hover:scale-110 transition" />
        </div>
    </div>

    <!-- RIGHT SECTION -->
    <div class="right flex items-center gap-4 text-gray-300">
        <!-- Options -->
        <div class="options flex gap-4">
            <button class="hover:scale-105 transition">Premium</button>
            <button class="hover:scale-105 transition">Support</button>
            <button class="hover:scale-105 transition">Download</button>
        </div>

        <!-- Divider -->
        <span class="w-px h-6 bg-gray-500"></span>

        <!-- Install App -->
        <div class="install flex items-center gap-2 hover:scale-105 cursor-pointer transition">
            <img src="./images/svg/download.svg" alt="Download" class="h-6 w-6" />
            <button>Install App</button>
        </div>

        <!-- Sign Up & Login -->
        <button class="signup hover:scale-105 transition">Sign Up</button>
        <button class="login bg-white text-black rounded-full px-5 py-2 font-bold hover:scale-110 transition-all duration-500 ease-in">
            Login
        </button>
    </div>
</div>
    </div>
        </div>

        <!-- MAIN -->
        <main class="flex">
            <!-- LEFT SIDEBAR -->
            <aside
                class="w-[30vw] h-[87vh] m-2 bg-lightblack rounded-lg sticky">
                <div
                    class="flex justify-between items-center h-[10vh] p-4 font-bold">
                    <span>Your Library</span>
                    <img src="./images/svg/add.svg" alt="add"
                        class="h-[30px] w-[30px] rounded-full m-1 p-1 hover:scale-110 hover:bg-darkgray cursor-pointer" />
                </div>

                <div class="flex flex-col bg-darkgray m-5 rounded-lg p-2">
                    <div class="m-3">
                        <span class="font-bold">Create Your First
                            Playlist</span>
                        <span>It’s easy, we’ll help you</span>
                    </div>
                    <button
                        class="w-[150px] bg-white text-black rounded-full py-2 m-1 font-bold hover:scale-110 transition-all duration-500 ease-in">Create
                        Playlist</button>
                </div>

                <div class="flex flex-col bg-darkgray m-5 rounded-lg p-2">
                    <div class="m-3">
                        <span class="font-bold">Let’s find some podcasts to
                            follow</span>
                        <span>We’ll keep you updated on new episodes</span>
                    </div>
                    <button
                        class="w-[150px] bg-white text-black rounded-full py-2 m-1 font-bold hover:scale-110 transition-all duration-500 ease-in">Browse
                        Podcasts</button>
                </div>

                <div class="flex flex-wrap gap-4 p-3 m-5 text-sm text-gray-400">
                    <span class="cursor-pointer">Legal</span>
                    <span class="cursor-pointer">Safety & Privacy Centre</span>
                    <span class="cursor-pointer">Privacy Policies</span>
                    <span class="cursor-pointer">Cookies</span>
                    <span class="cursor-pointer">About Ads</span>
                    <span class="cursor-pointer">Accessibility</span>
                </div>

                <div
                    class="flex items-center m-5 w-[120px] p-1 rounded-full border-2 border-darkgray font-bold hover:scale-110 hover:border-white transition-all duration-500 ease-in cursor-pointer">
                    <img src="./images/svg/globe.svg" alt="globe"
                        class="h-[30px] w-[30px] m-1 p-1" />
                    <button>English</button>
                </div>
            </aside>

            <!-- RIGHT SECTION -->
            <section
                class="w-[70vw] h-[87vh] m-2 bg-lightblack rounded-lg overflow-y-auto scrollbar-hide">
                <div class="m-5">
                    <div class="flex justify-between items-center">
                        <h2
                            class="font-bold text-2xl cursor-pointer hover:underline">Trending
                            Songs</h2>
                        <button
                            class="text-sm hover:underline cursor-pointer">Show
                            All</button>
                    </div>
                    <div
                        class="flex gap-4 p-4 m-2 overflow-x-auto scrollbar-hide">
                        <!-- SONG CARDS GO HERE -->
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/trending_songs/sahiba.jpg"
                                alt="sahiba"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Sahiba
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Aditya Rikhari
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/trending_songs/atpeace.jpg"
                                alt="sahiba"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                At Peace
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Aditya Rikhari
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/trending_songs/dhun.jpg"
                                alt="sahiba"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Dhun
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Aditya Rikhari
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/trending_songs/gulabiaankhein.jpg"
                                alt="sahiba"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Gulaabi Ankhein
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Aditya Rikhari
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/trending_songs/ishqbawla.jpg"
                                alt="sahiba"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Ishq Bawla
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Aditya Rikhari
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/trending_songs/qaydese.jpg"
                                alt="sahiba"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Qayde Se
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Aditya Rikhari
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-5">
                <div class="flex justify-between items-center">
                    <h2
                        class="font-bold text-2xl cursor-pointer hover:underline">Popular
                        Artists</h2>
                    <button class="text-sm hover:underline cursor-pointer">Show
                        All</button>
                </div>
                <div class="flex gap-4 p-4 m-2 overflow-x-auto scrollbar-hide">
                    <!-- ARTIST CARDS GO HERE -->
                    <div
                        class="content rounded-lg p-4 m-2 flex gap-4 overflow-x-auto scrollbar-hide">
                        <!-- Artist Card -->
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_artists/anirudh_ravichander.jpg"
                                alt="sahiba"
                                class="rounded-full w-full aspect-square object-cover" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Anirudh Ravichander
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Artist
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_artists/ar_rahman.jpg"
                                alt="sahiba"
                                class="rounded-full w-full aspect-square object-cover" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                A.R.Rahman
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Artist
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_artists/arijit_singh.jpg"
                                alt="sahiba"
                                class="rounded-full w-full aspect-square object-cover" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Arijit Singh
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Artist
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_artists/atif_aslam.jpg"
                                alt="sahiba"
                                class="rounded-full w-full aspect-square object-cover" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Atif Aslam
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Artist
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_artists/pritam.jpg"
                                alt="sahiba"
                                class="rounded-full w-full aspect-square object-cover" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Pritam
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Artist
                            </span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_artists/sachin_jigar.jpg"
                                alt="sahiba"
                                class="rounded-full w-full aspect-square object-cover" />
                            <!-- Play Button: Hidden by default, visible on hover -->
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[100px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>

                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">
                                Sachin-Jigar
                            </span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">
                                Artist
                            </span>
                        </div>
                    </div>
                </div>
                <div class="popular-albums-and-singles rounded-t-lg m-5">
                    <div class="heading flex justify-between items-center">
                        <button
                            class="font-bold text-2xl hover:cursor-pointer hover:underline">Popular
                            Albums And Singles</button>
                        <button
                            class="text-sm hover:cursor-pointer hover:underline">Show
                            All</button>
                    </div>
                    <div
                        class="content rounded-lg p-4 m-2 flex gap-4 overflow-x-auto scrollbar-hide">
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_albums_and_singles/aashiqui2.jpg"
                                alt="aashiqui2"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>
                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">Aashiqui
                                2</span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">Mithoon,
                                Ankit Tiwari, Jeet Ganguuli</span>
                        </div>
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_albums_and_singles/ye_jawaani_hai_deewani.jpg"
                                alt="yeh ye_jawaani_hai_deewani"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>
                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">Yeh
                                Jawaani Hai Deewani</span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">Pritam</span>
                        </div>
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_albums_and_singles/sanam_teri_kasam.jpg"
                                alt="sanam_teri_kasam"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>
                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">Sanam
                                Teri Kasam</span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">Himesh
                                Reshammiya,Sameer Anjaan</span>
                        </div>
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_albums_and_singles/finding_her.jpg"
                                alt="finding_her"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>
                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">Finding
                                her</span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">Kushagra,Bharath,Saaheal</span>
                        </div>

                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_albums_and_singles/young_goat.jpg"
                                alt="young_goat"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>
                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">Young
                                G.O.A.T</span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">Cheema
                                Y, Gur Seedhu</span>
                        </div>
                        <div
                            class="card group rounded-lg p-2 flex-shrink-0 w-[170px] flex flex-col items-start hover:cursor-pointer hover:bg-darkgray relative transition-all duration-300">
                            <img
                                src="./images/popular_albums_and_singles/making_memories.jpg"
                                alt="making_memories"
                                class="h-[180px] w-[180px] rounded-lg" />
                            <button
                                class="circle opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center h-12 w-12 bg-green-600 rounded-full absolute top-[110px] right-0 m-5 p-3">
                                <img src="./images/svg/play.svg" alt="Play" />
                            </button>
                            <span
                                class="font-bold text-lg mt-2 break-words w-full leading-snug">Making
                                Memories</span>
                            <span
                                class="text-sm text-gray-200 break-words w-full leading-tight">Karan
                                Aujla, Ikky</span>
                        </div>
                    </div>
                </div>
                <hr>
                <footer class="flex m-5 p-5 h-[15vw] justify-around">
                    <div class="one flex flex-col">
                        <span class="font-bold">Company</span>
                        <span
                            class="hover:cursor-pointer hover:underline">About</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Jobs</span>
                        <span class="hover:cursor-pointer hover:underline">For
                            The Record</span>
                    </div>
                    <div class="two flex flex-col">
                        <span class="font-bold">Communities</span>
                        <span class="hover:cursor-pointer hover:underline">For
                            Artists</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Developers</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Advertising</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Investors</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Vendors</span>
                    </div>
                    <div class="three flex flex-col">
                        <span class="font-bold">Useful Links</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Support</span>
                        <span class="hover:cursor-pointer hover:underline">Free
                            Mobile App</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Popular
                            By Country</span>
                    </div>
                    <div class="four flex flex-col">
                        <span class="font-bold">Spotify Plans</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Premium
                            Individual</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Premium
                            Duo</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Premium
                            Family</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Premium
                            Student</span>
                        <span
                            class="hover:cursor-pointer hover:underline">Spotify
                            Free</span>
                    </div>
                    <div class="five flex">
                        <div
                            class="home hover:cursor-pointer hover:scale-110 bg-darkgray h-[40px] w-[40px] rounded-full m-[5px] p-[5px]">
                            <img src="./images/svg/insta.svg" alt="Instagram"
                                class="invert">
                        </div>
                        <div
                            class="home hover:cursor-pointer hover:scale-110 bg-darkgray h-[40px] w-[40px] rounded-full m-[5px] p-[5px]">
                            <img src="./images/svg/twitter.svg" alt="Twitter"
                                class="invert">
                        </div>
                        <div
                            class="home hover:cursor-pointer hover:scale-110 bg-darkgray h-[40px] w-[40px] rounded-full m-[5px] p-[5px]">
                            <img src="./images/svg/facebook.svg" alt="facebook"
                                class="invert">
                        </div>
                    </div>
                </footer>
                <hr>
                <footer class="m-5 p-5">
                    <span>&copy; 2025 Spotify AB</span>
                </footer>
