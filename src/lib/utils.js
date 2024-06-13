// get random colours for recipeCard
const COLORS = {
	green: {
		bg: "bg-[#ECF7D4]",
		badge: "bg-[#D6F497]",
	},
	orange: {
		bg: "bg-[#F9EFE1]",
		badge: "bg-[#F7E0B8]",
	},
	red: {
		bg: "bg-[#FBE5E7]",
		badge: "bg-[#FDC6C7]",
	},
};

export const getRandomColor = () => {
    // green        orange         red
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
    // 0      1      2
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
    // 0:green       1:orange         2:red
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};
