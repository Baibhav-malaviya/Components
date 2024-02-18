# Column Component

The Column component is a reusable UI component for creating column elements with customizable styles and behaviors.

## Props

- `children`: (Required) The content to be rendered within the column.
- `onClick`: (Optional) A function to handle click events on the column.
- `hoverClasses`: (Optional) Custom classes to apply when the column is hovered over.
- `width`: (Optional) The width of the column. Defaults to "w-auto".
- `height`: (Optional) The height of the column. Defaults to "h-auto".
- `bgColor`: (Optional) The background color of the column. Defaults to "bg-orange-600".
- `color`: (Optional) The text color of the column. Defaults to "text-black".
- `tailwindClasses`: (Optional) Additional Tailwind CSS classes to apply to the column.
- `hover`: (Optional) A boolean value indicating whether the hover effect should be enabled. Defaults to true.

## Usage

Import the `Column` component into your React application:

```javascript
import Column from "path/to/Column";

const MyComponent = () => {
	const handleClick = () => {
		console.log("Column clicked");
	};

	return (
		<Column
			onClick={handleClick}
			hoverClasses="hover:bg-gray-200"
			width="w-1/2"
			height="h-full"
			bgColor="bg-blue-400"
			color="text-white"
		>
			{/* Add your child content here */}
		</Column>
	);
};
```
