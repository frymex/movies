import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	fonts: {
		heading: `'Comfortaa', cursive`,
		body: `'Comfortaa', cursive`,
	},
	styles: {
		global: {
			body: {
				color: "rgb(214, 214, 214)",
				backgroundColor: "#303030",
			},
		},
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		cssVarPrefix: "kirillsaint",
	},
});
