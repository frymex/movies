import { Center, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

function Header() {
	return (
		<Stack
			bgColor="rgb(45,45,45)"
			pr="0.75rem"
			pl="0.75rem"
			pt="0.5rem"
			pb="0.5rem"
			direction={"row"}
			justifyContent="space-between"
			spacing={1}
		>
			<Center h="full">
				<Link
					color="#fff"
					pt="0.3125rem"
					pb="0.3125rem"
					fontSize={"xl"}
					fontWeight="700"
					_hover={{
						textDecoration: "none",
					}}
					as={NextLink}
					href="/"
				>
					czqv
				</Link>
			</Center>
			<Stack direction={"row"} spacing={0}>
				<Center h="full">
					<Link
						p=".5rem 1rem"
						pt="0.3125rem"
						pb="0.3125rem"
						fontSize={"1rem"}
						fontWeight="700"
						color="blue.500"
						_hover={{
							textDecoration: "none",
							color: "blue.600",
						}}
						href="https://github.com/frymex"
						isExternal
					>
						Github
					</Link>
				</Center>
				<Center h="full">
					<Link
						p=".5rem 1rem"
						pt="0.3125rem"
						pb="0.3125rem"
						fontSize={"1rem"}
						fontWeight="700"
						color="blue.500"
						_hover={{
							textDecoration: "none",
							color: "blue.600",
						}}
						as={NextLink}
						href="/docs"
					>
						API Docs
					</Link>
				</Center>
			</Stack>
		</Stack>
	);
}

export default Header;
