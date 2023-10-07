"use client";
import {
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	rem,
} from "@mantine/core";
import NextImage from "next/image";
// import { IconCheck } from "@tabler/icons-react";
import SleepingBeauty from "../_assets/SleepingBeauty.jpg";
import Uncle from "../_assets/Uncle.jpg";

import classes from "./css/Hero.module.css";
import Link from "next/link";

export function Hero() {
	return (
		<Container size="md">
			<div className={classes.inner}>
				<div className={classes.content}>
					<Title className={classes.title}>
						The <span className={classes.highlight}>True</span> Story <br /> of
						Sleeping Beauty
					</Title>
					<Text c="red" mt="md">
						"We got the fable of sleeping beauty wrong, the prince didn't kiss
						her to wake her up, no one who's slept for a hundred years is likely
						to wake up. It was the other way around, he kisses her to wake
						himself up from the nightmare that has brought him there." -{" "}
						<span className={classes.highlight}>
							{" "}
							<Link
								className={classes.link}
								href={"https://youtu.be/yRMFP6D0LVk?si=k2PfRdyY_Ew2vuXR"}>
								Click Here
							</Link>{" "}
						</span>
					</Text>
					<List
						mt={30}
						spacing="sm"
						size="sm"
						icon={
							<ThemeIcon size={20} radius="sm">
								{/* <IconCheck
									style={{ width: rem(12), height: rem(12) }}
									stroke={1.5}
								/> */}
							</ThemeIcon>
						}>
						<List.Item>
							<b>From Max Payne 2</b> – Part 3, <br /> Waking Up from the
							American Dream Prologue Manga Cutscene
						</List.Item>
						<List.Item>
							<b>Synopsis</b> – Years after the Death of His Loved Ones, Max
							Payne - The New York's Finest Cop, finds himself involved with a
							series of plot twist
						</List.Item>
						<List.Item>
							<b>Trivia</b> – Max Payne 2 is a Film Noir Detective Game with
							manga styled cutscenes making it one of the most unique game of
							2000s. The acting, the story, the most fantastic graphics and
							gameplay. It has everything
						</List.Item>
					</List>

					{/* <Group mt={30}>
						<Button radius="xl" size="md" className={classes.control}>
							Get started
						</Button>
						<Button
							variant="default"
							radius="xl"
							size="md"
							className={classes.control}>
							Source code
						</Button>
					</Group> */}
				</div>
				{/* image */}
				<Image
					component={NextImage}
					src={SleepingBeauty}
					className={classes.image}
					alt=""
				/>
			</div>

			{/* 2nd hero section */}
			<div className={classes.inner}>
				<div className={classes.content}>
					<Title className={classes.title}>
						The <span className={classes.highlight}>True</span> Story <br /> of
						My Life
					</Title>
					<Text mt="md">
						It Starts and then, It Ends! Back Then, All I started with... was, A
						Broken Cycle and a strong desire. The Desire to live life with full
						freedom. I had no idea how I could but I knew it was possible. So, I
						tried lots of things but in the end, I decided to get in the direct
						selling industry. Soon, I did get a bicycle and even better than
						that - A Car. I was pretty weak in Geography at School. That's why I
						never knew where was Malaysia or Japan. But now I know it very well!
						This is Japan, that is malaysia and that one is Dubai. Now, Every
						Beginning has an end! It has been 18 years since a got into the
						direct selling business with a company. The time has come for me to
						restart everything from scratch! and this is the beginning of my
						Restart. Many People continue to criticize my decision, but I will
						continue regardless... For I'm Sujoy Sarkar!{" "}
						{/* <span className={classes.highlight}>

							 <Link
								className={classes.link}
								href={"https://youtu.be/yRMFP6D0LVk?si=k2PfRdyY_Ew2vuXR"}>
								Click Here to Watch
							</Link>{" "}
						</span> */}
					</Text>
					<List
						mt={30}
						spacing="sm"
						size="sm"
						icon={
							<ThemeIcon size={20} radius="sm">
								{/* <IconCheck
									style={{ width: rem(12), height: rem(12) }}
									stroke={1.5}
								/> */}
							</ThemeIcon>
						}>
						{/* <List.Item>
							<b>From Max Payne 2</b> – Part 3, <br /> Waking Up from the
							American Dream Prologue Manga Cutscene
						</List.Item>
						<List.Item>
							<b>Synopsis</b> – Years after the Death of His Loved Ones, Max
							Payne - The New York's Finest Cop, finds himself involved with a
							series of plot twist
						</List.Item>
						<List.Item>
							<b>Trivia</b> – Max Payne 2 is a Film Noir Detective Game with
							manga styled cutscenes making it one of the most unique game of
							2000s. The acting, the story, the most fantastic graphics and
							gameplay. It has everything
						</List.Item> */}
					</List>

					{/* <Group mt={30}>
						<Button radius="xl" size="md" className={classes.control}>
							Get started
						</Button>
						<Button
							variant="default"
							radius="xl"
							size="md"
							className={classes.control}>
							Source code
						</Button>
					</Group> */}
				</div>
				{/* image */}
				<Image
					component={NextImage}
					src={Uncle}
					className={classes.image}
					alt=""
				/>
			</div>
		</Container>
	);
}
