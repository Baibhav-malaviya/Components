# Row Component Props

The Row component accepts the following props:

- `children`: (Required) The content to be rendered within the row.
- `onClick`: (Optional) A function to handle click events on the row.
- `hoverClasses`: (Optional) Custom classes to apply when the row is hovered over.
- `width`: (Optional) The width of the row. Defaults to "w-full".
- `bgColor`: (Optional) The background color of the row. Defaults to "bg-orange-600".
- `color`: (Optional) The text color of the row. Defaults to "text-black".
- `tailwindClasses`: (Optional) Additional Tailwind CSS classes to apply to the row.
- `hover`: (Optional) A boolean value indicating whether the hover effect should be enabled. Defaults to true.

## Example Usage

```javascript
import Row from "path/to/Row";

<Row
	onClick={() => console.log("Row clicked")}
	hoverClasses="hover:bg-gray-200"
	width="w-3/4"
	bgColor="bg-blue-400"
	color="text-white"
>
	{/* Row content */}
</Row>;
```
