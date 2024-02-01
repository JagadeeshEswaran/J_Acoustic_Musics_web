/* eslint-disable no-unused-vars */
import React from "react";
import Error from "../Error";
import Loader from "../Loader";
import SongCard from "../SongCard";
import { genres } from "../../assets/constants";

const Discover = () => {
	console.log(genres);
	let genreTitle = "Rock";

	return (
		<>
			<main className="flex flex-col">
				{/* Wrapper for Section Head */}
				<section className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
					<h2 className="font-bold text-2xl text-blue-700 text-left">
						Discover {genreTitle}
					</h2>

					<select
						onChange={() => {}}
						value=""
						className="bg-blue text-gray-500 p-3 text-sm rounded-sm sm:mt-0 mt-5">
						{genres.map((item, idx) => (
							<option key={idx} value={item.value}>
								{item.title}
							</option>
						))}
					</select>
				</section>

				{/* Wrapper for Songs Cards */}
				<section className="flex flex-wrap sm:justify-start justify-center w-full items-center gap-8 px-6">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
						<SongCard key={idx} song={item} id={idx} />
					))}
				</section>
			</main>
		</>
	);
};

export default Discover;
