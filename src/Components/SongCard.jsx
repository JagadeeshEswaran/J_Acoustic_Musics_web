/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SongCard = ({ song, id }) => {
	return (
		<>
			<main className="flex flex-col justify-center items-center w-[200px] p-4 bg-blue-400 bg-opacity-80 backdrop-blur-sm animate-pulse rounded-lg cursor-pointer">
				<div className="relative w-full h-56 group">{song}</div>
			</main>
		</>
	);
};

export default SongCard;
