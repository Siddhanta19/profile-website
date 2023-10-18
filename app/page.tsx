"use client";
import { Container, Text } from "@mantine/core";
import { Hero } from "./_components/home/hero";
import { CardsCarousel } from "./_components/home/CarouselCards";

export default function HomePage() {
	return (
		<Container size="xl">
			{/* <HeroBullets /> */}
			<CardsCarousel />
			<Hero />
		</Container>
	);
}
