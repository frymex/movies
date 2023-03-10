import { Movies } from "@/app/types";
import { ChevronLeftIcon, ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Center,
	Container,
	Heading,
	IconButton,
	Image,
	Select,
	Stack,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";

import Head from "next/head";

import React from "react";


export default function Home({ movies }: { movies: Movies[] }) {
	const [value, setValue] = React.useState<string>(movies[0].position);
	const [movie, setMovie] = React.useState<Movies | null>(null);
	const [position, setPosition] = React.useState<string>("");
	React.useEffect(() => {
		setPosition(window.location.href);
	}, []);

	


	const toast = useToast();

	return (
		<>
			<Head>

				<title> CinemaSearch | Найди фильм на русском в кинотеатрах Израиля </title> 

				<meta property="og:locale" content="ru_RU" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="CinemaSearch | Найди фильм на русском в кинотеатрах Израиля" />
				<meta property="og:description" content="Фильмы на русском языке в кинотеатрах Израиля" />
				<meta property="og:url" content={position} />
				<meta property="og:site_name" content="CinemaSearch" />

				<meta name="title" content="CinemaSearch | Найди фильм на русском в кинотеатрах Израиля" />
				<meta name="description" content="Фильмы на русском языке в кинотеатрах Израиля" />
				<meta name="keywords" content="Кино+На+Русском+В+Хайфе, Доктор+Стрендж+МУЛЬТИВСЕЛЕННОЙ, Кино+В+Израиле, Search+Movies, Поиск+Фильмов, Кино+В+Израиле, Кино на русском в хайфе, кино на русском в тель авиве, фильмы в хайфе, ДОКТОР СТРЕНДЖ В МУЛЬТИВСЕЛЕННОЙ ХАЙФА" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				
			</Head>

			{(movie === null && (
				<Container paddingTop={20}>
					<Center>
						<Heading size="xl">Выбери кинотеатр</Heading>
					</Center>
					<Center pt={10}>
						<Select
							value={value}
							onChange={e => setValue(e.currentTarget.value)}
						>
							{movies.map((movie, key) => (
								<option key={key} value={movie.position}>
									{movie.position}
								</option>
							))}
						</Select>
					</Center>
					<Center pt={2} w="full">
						<Button
							w="full"
							variant={"outline"}
							colorScheme="blue"
							onClick={() => {
								let movie: Movies | null = null;
								for (const item of movies) {
									if (item.position === value) {
										movie = item;
									}
								}

								if (movie !== null) {
									setMovie(movie);
								}
							}}
						>
							Продолжить &#8594;
						</Button>
					</Center>
				</Container>
			)) || (
				<Box position={"relative"}>
					<Box p={5} pl={[2, 5]} position={"absolute"}>
						<IconButton
							icon={<ChevronLeftIcon />}
							aria-label="back"
							onClick={() => setMovie(null)}
						></IconButton>
					</Box>

					<Stack w="full" paddingTop={[20, 10]} direction="column" spacing={5}>
						{movie?.movies.map((movie, key) => (
							<Center w="full" key={key}>
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
													window.location.href + "share/" + movie.cache_id
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
											Кинотеатр: {value}
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
						))}
					</Stack>
				</Box>
			)}
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: res } = await axios.get(
		"https://moviesapi.space/@functions/api/"
	);

	return {
		props: {
			movies: res,
		},
	};
};
