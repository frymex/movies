import { Code, Container } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import JSONPretty from "react-json-prettify";

function Docs({ response }: any) {
	return (
		<Container paddingTop={10}>
			<Code p={3} borderRadius="lg" w="full">
				<b>GET</b> https://moviesapi.space/@functions/api/
			</Code>
			<Code p={3} mt={2} borderRadius="lg" w="full">
				<b>JSON</b>
				<br />
				<JSONPretty
					theme={{
						background: "rgba(226, 232, 240, 0.0)",
						brace: "#E2E8F0",
						keyQuotes: "#E2E8F0",
						valueQuotes: "#E2E8F0",
						colon: "#E2E8F0",
						comma: "#E2E8F0",
						key: "#E2E8F0",
						value: {
							string: "#E2E8F0",
							null: "#E2E8F0",
							number: "#E2E8F0",
							boolean: "#E2E8F0",
						},
						bracket: "#E2E8F0",
					}}
					json={response}
				/>
			</Code>
		</Container>
	);
}

export default Docs;

export const getStaticProps: GetStaticProps = async () => {
	const { data: res } = await axios.get(
		"https://moviesapi.space/@functions/api/"
	);

	return {
		props: {
			response: res,
		},
	};
};
