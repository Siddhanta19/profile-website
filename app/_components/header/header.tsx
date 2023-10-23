"use client";
import { useEffect, useRef, useState } from "react";
import {
	Container,
	Group,
	Burger,
	Text,
	Box,
	Modal,
	Stack,
	ScrollArea,
	Divider,
	useComputedColorScheme,
	useMantineColorScheme,
	Button,
	ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantine/ds';
import { Image } from "@mantine/core";
import NextImage from "next/image";
import Logo from "../../_assets/Logo.jpg";
import classes from "./Header.module.css";
import cx from "clsx";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { IconSun, IconMoon } from "@tabler/icons-react";

const links = [
	{ link: "/", label: "Home" },
	{ link: "/our-work", label: "Our Work" },
	{ link: "/about-us", label: "About Us" },
	{ link: "/contact-us", label: "Contact Us" },
];

export function Header() {
	const [opened, { toggle, close }] = useDisclosure(false);
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("dark", {
		getInitialValueInEffect: true,
	});
	const pathname = usePathname();

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className={classes.link}
			data-active={pathname === link.link || undefined}>
			{link.label}
		</Link>
	));

	// closing the modal when a page is visited
	useEffect(() => {
		// run this whenever pathname changes and close the modal
		close();
	}, [pathname, close]);

	return (
		<Box>
			<header className={classes.header}>
				<Container size="xl" className={classes.inner}>
					<Group>
						<Link className={classes.highlightColor} href={"/"}>
							<Image
								component={NextImage}
								w="auto"
								height={40}
								src={Logo}
								alt=""
							/>
						</Link>
						<Text
							// variant="gradient"
							size="xl"
							fw={700}
							// gradient={{ from: "blue", to: "cyan", deg: 90 }}
							className={classes.logoText}>
							Generated Logo
						</Text>
					</Group>
					{/* <Logo size={28} /> */}
					<Group gap={5} visibleFrom="xs">
						{items}
						<ActionIcon
							onClick={() =>
								setColorScheme(
									computedColorScheme === "light" ? "dark" : "light"
								)
							}
							variant="default"
							size="xl"
							aria-label="Toggle color scheme">
							<IconSun
								className={cx(classes.icon, classes.light)}
								stroke={1.5}
							/>
							<IconMoon
								className={cx(classes.icon, classes.dark)}
								stroke={1.5}
							/>
						</ActionIcon>
					</Group>

					<Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
				</Container>
			</header>

			{/* Mobile Navigation View */}
			<Modal
				opened={opened}
				onClose={close}
				padding={"xs"}
				title="Menu"
				centered
				zIndex={10000}>
				{/* Modal content */}
				<Divider my="xs" />
				<Stack gap={5}>
					{items}
					<ActionIcon
						m={"auto"}
						onClick={() =>
							setColorScheme(computedColorScheme === "light" ? "dark" : "light")
						}
						variant="default"
						size="xl"
						aria-label="Toggle color scheme">
						<IconSun className={cx(classes.icon, classes.light)} />
						<IconMoon className={cx(classes.icon, classes.dark)} />
					</ActionIcon>
				</Stack>
			</Modal>
		</Box>
	);
}
