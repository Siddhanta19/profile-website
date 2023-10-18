import { Box, Container, Image } from "@mantine/core";
import NextImage from "next/image";
import React from "react";
import SujoySarkar from "../../_assets/SujoySarkar.png";

export default function AboutUs() {
	return (
		<>
			<Container size={"md"}>
				<Image
					component={NextImage}
					src={SujoySarkar}
					alt="Photo of Sujay Sarkar"
				/>
				<h1>The Story of Sujay Sarkar</h1>
			</Container>
		</>
	);
}
