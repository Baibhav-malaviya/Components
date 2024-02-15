import PropTypes from "prop-types";

function Row({
	children,
	width = "w-full",
	bgColor = "bg-orange-600",
	color = "text-black",
	tailwindClasses = "",
	hover = true,
	onClick,
	hoverClasses = "hover:scale-105 hover:opacity-80 hover:shadow-md",
	...props
}) {
	return (
		<div
			className={`h-auto px-3 py-2  flex flex-wrap transit gap-2 items-center justify-between ${tailwindClasses} ${bgColor} ${color} ${width} ${
				hover ? hoverClasses : ""
			}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</div>
	);
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	hoverClasses: PropTypes.string,
	width: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	tailwindClasses: PropTypes.string,
	hover: PropTypes.bool,
};

export default Row;
