"use client";
import { Anchor, Group, ActionIcon, rem, Image } from "@mantine/core";
import {
	IconBrandTwitter,
	IconBrandYoutube,
	IconBrandInstagram,
} from "@tabler/icons-react";
import Logo from "../../_assets/Logo.jpg";
import classes from "./Footer.module.css";
import Link from "next/link";
import NextImage from "next/image";

const links = [
	{ link: "/", label: "Home" },
	{ link: "/our-work", label: "Our Work" },
	{ link: "/about-us", label: "About Us" },
	{ link: "/contact-us", label: "Contact Us" },
];

export function Footer() {
	const items = links.map((link) => (
		<Link key={link.label} href={link.link} className={classes.link}>
			{link.label}
		</Link>
	));

	return (
		<div className={classes.footer}>
			<div className={classes.inner}>
				<Link className={classes.highlightColor} href={"/"}>
					<Image component={NextImage} w="auto" height={40} src={Logo} alt="" />
				</Link>

				<Group className={classes.links}>{items}</Group>

				<Group gap="xs" justify="flex-end" wrap="nowrap">
					<ActionIcon size="lg" variant="default" radius="xl">
						<IconBrandTwitter
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size="lg" variant="default" radius="xl">
						<IconBrandYoutube
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size="lg" variant="default" radius="xl">
						<IconBrandInstagram
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>
			</div>
		</div>
	);
}
