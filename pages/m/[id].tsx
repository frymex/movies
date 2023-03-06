import { Movie } from "@/app/types";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Center,
	Heading,
	IconButton,
	Image,
	Stack,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

import Head from "next/head";
import React from "react";

function Cache({ movie }: { movie: Movie }) {
	const toast = useToast();
	
	const site_title = `${movie.movie_title}`
	const site_description = `Смотерть фильм ${movie.movie_title} в ${movie.date}`
	const [param, setParam] = React.useState<string>("");

	React.useEffect(() => {
		setParam(window.location.href);
	}, [])

	const site_url = param + movie.cache_id

	
	const site_image = movie.picture_url

	return (
		<>
		<Head>

			<title>{site_title}</title>
			<meta name="title" content={site_title} />
			<meta name="description" content={site_description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={site_url} />
			<meta property="og:title" content={site_title} />
			<meta property="og:description" content={site_description} />
			<meta property="og:image" content={site_image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={site_url} />
			<meta property="twitter:title" content={site_title} />
			<meta property="twitter:description" content={site_description} />
			<meta property="twitter:image" content={site_image}></meta>
				
		</Head>

		<Stack w="full" paddingTop={10} direction="column" spacing={5}>
			<Center w="full">
				<Box
					position={"relative"}
					w="18em"
					overflow={"hidden"}
					borderRadius="lg"
					bgColor="#595757"
					textAlign={"center"}
					alignItems="center"
				>
					<Stack
						position={"absolute"}
						w="full"
						direction={"row"}
						justifyContent="space-between"
					>
						<Box />
						<IconButton
							opacity={"0.6"}
							colorScheme={"blue"}
							icon={<LinkIcon />}
							aria-label="back"
							onClick={() => {
								navigator.clipboard.writeText(
									window.location.href + movie.cache_id
								);
								toast({
									status: "success",
									title: "Успех!",
									description: "Ссылка на фильм была скопирована.",
									isClosable: true,
									duration: 3000,
								});
							}}
							_hover={{ opacity: "1" }}
						></IconButton>
					</Stack>
					<Image
						minHeight={"400px"}
						alt={movie.movie_title}
						src={movie.picture_url}
					/>

					<Box p="1rem">
						<Heading fontWeight={700} size="md">
							{movie.movie_title}
						</Heading>
						<Heading mt={"1rem"} size="sm">
							Кинотеатр: {movie.position}
						</Heading>
						<Heading mt={0} size="sm">
							Дата: {movie.date}
						</Heading>
						<Button
							mt="1rem"
							onClick={() =>
								window.open(
									movie.buy_url,
									"mv_0",
									"left=100,top=100,width=800,height=800"
								)
							}
							colorScheme="blue"
							leftIcon={<ExternalLinkIcon />}
						>
							Купить
						</Button>
					</Box>
				</Box>
			</Center>
		</Stack>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: res } = await axios.get(
		"https://moviesapi.space/@functions/api/"
	);

	let paths = [];

	for (const item of res) {
		for (const movie of item.movies) {
			paths.push({
				params: {
					id: movie.cache_id,
				},
			});
		}
	}

	return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const { data: res } = await axios.get(
		`https://moviesapi.space/@functions/api/cache?cache_id=${params.id.replace(
			"_",
			"-"
		)}`
	);

	return {
		props: {
			movie: res,
		},
	};
};

export default Cache;
