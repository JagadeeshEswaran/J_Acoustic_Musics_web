/* eslint-disable no-unused-vars */
import React from "react";
import SideBar from "../SideBar/SideBar";
import Discover from "../Discover/Discover";
import TopBar from "../SideBar/TopBar";

const AppMain = () => {
	return (
		// <main className="grid grid-cols-3 gap-2">
		<main className="flex gap-2 ">
			<section className="h-screen w-1/5 border-dotted border-2 border-sky-500 rounded-md hover:border-solid hover:border-5">
				<SideBar />
			</section>

			<section className="h-screen w-full border-dotted border-2 border-sky-500 rounded-md hover:border-solid hover:border-5">
				<Discover />
			</section>

			<section className="h-screen w-1/3 border-dotted border-2 border-sky-500 rounded-md hover:border-solid hover:border-5">
				<TopBar />
			</section>
		</main>
	);
};

export default AppMain;
