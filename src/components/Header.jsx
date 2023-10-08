import React from "react";
import Container from "./Container";
import { Highlight } from "@mui/icons-material";

const Header = () => {
	return (
		<header className="bg-yellow-500 text-white shadow-md shadow-black/20">
			<Container>
				<h1 className="py-6 text-4xl font-bold">
					<Highlight />
					Keeper App
				</h1>
			</Container>
		</header>
	);
};

export default Header;
