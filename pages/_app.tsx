import Header from "@/app/components/Header";
import theme from "@/app/theme";
import "@/styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<Box pb={5}>
                            <Component {...pageProps} />
                        </Box>
		</ChakraProvider>
	);
}
