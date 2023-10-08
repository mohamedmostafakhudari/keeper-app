import React from "react";
import Container from "./Container";

const Footer = () => {
	return (
		<footer className="text-gray-400">
			<Container>
				<p className="py-4 text-center">
					&copy; Mohamed Mostafa {new Date().getFullYear()}
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
