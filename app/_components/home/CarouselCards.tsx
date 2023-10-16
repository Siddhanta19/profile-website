import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
	Paper,
	Text,
	Title,
	Button,
	useMantineTheme,
	rem,
	Box,
	Image,
} from "@mantine/core";
import classes from "./CarouselCards.module.css";
import "@mantine/carousel/styles.css";

import Uncle from "../../_assets/Uncle.jpg";
import Logo from "../../_assets/Logo.jpg";
import SleepingBeauty from "../../_assets/SleepingBeauty.jpg";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import NextImage, { StaticImageData } from "next/image";

interface CardProps {
	image: StaticImageData;
	title: JSX.Element;
	btnText: string;
	id: string;
}

function Card({ image, title, btnText, id }: CardProps) {
	return (
		<Paper shadow="md" radius="md" className={classes.card}>
			{/* <Text className={classes.category} size="xs">
					{category}
				</Text> */}
			<Box className={classes.descContainer}>
				{title}

				<Button variant="white" color="dark">
					{btnText}
				</Button>
			</Box>
			<Image
				component={NextImage}
				radius={"md"}
				fit="fill"
				height={376}
				src={image}
				alt={id}
				className={classes.image}
			/>
		</Paper>
	);
}

const data = [
	{
		image: Uncle,
		title: (
			<Title order={3} className={classes.title}>
				for he who dares must <br /> dare it all
			</Title>
		),
		btnText: "Who is Sujay Sarkar?",
		id: "uncle",
	},
	{
		image: Logo,
		title: (
			<Title order={3} className={classes.title}>
				Waifus are Not Real
			</Title>
		),
		btnText: "Am I pretty?",
		id: "waifu",
		// category: "beach",
	},
	{
		image: SleepingBeauty,
		title: (
			<Title order={3} className={classes.title}>
				We all got the fable of sleeping beauty wrong
			</Title>
		),
		btnText: "Story of Sleeping Beauty?",
		id: "sleeping beauty",
		// category: "tourism",
	},
	{
		image: Logo,
		title: (
			<Title order={3} className={classes.title}>
				This is the last slide
			</Title>
		),
		btnText: "Why is this the last slide?",
		id: "test",
		// category: "nature",
	},
];

export function CardsCarousel() {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = data.map((item) => (
		<Carousel.Slide key={item.id}>
			<Card {...item} />
		</Carousel.Slide>
	));
	const autoplay = useRef(Autoplay({ delay: 4000 }));

	return (
		<Carousel
			// classNames={{ slide: classes.slide }}
			mb={rem(96)}
			withControls={mobile ? false : true}
			slideSize={{ base: "100%", sm: "100%" }}
			slideGap={{ base: rem(12), sm: "xl" }}
			align="start"
			// slidesToScroll={mobile ? 1 : 2}
			plugins={[autoplay.current]}
			onMouseLeave={autoplay.current.reset}
			onMouseEnter={autoplay.current.stop}>
			{slides}
		</Carousel>
	);
}
