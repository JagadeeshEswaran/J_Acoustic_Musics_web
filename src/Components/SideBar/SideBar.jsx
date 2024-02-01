/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/TabIcon.svg";

const SideBar = () => {
	return (
		<>
			<main className="flex gap-2 justify-start items-center px-5">
				<img src={Logo} alt="" className="size-3 h-12 w-12" />
				<h3 className="size-5 font-bold">Acoustic</h3>
			</main>
		</>
	);
};

export default SideBar;
