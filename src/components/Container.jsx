import React from "react";
import clsx from "clsx";

const Container = ({ className, children }) => {
	return (
		<div className={clsx("container mx-auto px-6", className)}>{children}</div>
	);
};

export default Container;
