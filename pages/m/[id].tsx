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

function Cache({ movie }: { movie: Movie }) {
	const toast = useToast();
	return (
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
