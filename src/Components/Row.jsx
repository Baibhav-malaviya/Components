import PropTypes from "prop-types";
function Row({
	children,
	width = "w-full",
	bgColor = "bg-orange-600",
	color = "text-black",
	className = "",
	...props
}) {
	return (
		<div
			className={`h-auto px-3 py-2  flex items-center justify-between ${className} ${bgColor} ${color} ${width}`}
			{...props}
		>
			{children}
		</div>
	);
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
};

export default Row;
