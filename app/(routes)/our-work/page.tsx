// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";

import {
	Box,
	Card,
	Container,
	Loader,
	Stack,
	useMantineTheme,
} from "@mantine/core";
import classes from "../../_components/our-work/OurWork.module.css";
import { useMediaQuery } from "@mantine/hooks";

/* import { Container } from "@mantine/core";
import { FacebookProvider, Page } from "react-facebook";
import { Loader } from "@mantine/core";

export default function OurWorkPage() {
	return (
		<>
			<Container>
				<h1>work page</h1>
				<Loader color="blue" size="xl" />
				<FacebookProvider appId={process.env.NEXT_PUBLIC_APP_ID || ""}>
					<Page
						href="https://www.facebook.com/profile.php?id=61551846466907"
						tabs="timeline"
						lazy={false}
					/>
				</FacebookProvider>
			</Container>
		</>
	);
} */

export default function OurWork() {
	const theme = useMantineTheme();
	// get the boolean value for sm breakpoint
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	// Declare a new state variable 'loading' and set its initial value to true
	const [loading, setLoading] = useState(true);

	// useEffect hook runs once after the component mounts (similar to componentDidMount in a class component)
	useEffect(() => {
		// Check if the SDK has already been loaded
		if (window.FB) {
			// When you navigate away from a page and then come back, the Facebook SDK might not re-render the plugin automatically.
			window.FB.XFBML.parse(); // Manually trigger a re-parse of social plugins

			setLoading(false);
		} else {
			// fbAsyncInit is a global function that Facebook SDK will call once it's loaded
			window.fbAsyncInit = function () {
				// Initialize the Facebook SDK
				window.FB.init({
					appId: process.env.NEXT_PUBLIC_APP_ID, // Your Facebook App ID
					xfbml: true, // Parse social plugins on this webpage
					version: "v18.0", // Use version 18.0 of the SDK
				});

				// Subscribe to 'xfbml.render' event which is fired when a plugin has been rendered
				window.FB.Event.subscribe("xfbml.render", function () {
					// Set loading state to false when the event is fired
					setLoading(false);
				});
			};

			// Load the Facebook SDK asynchronously
			(function (d, s, id) {
				let js,
					fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {
					return;
				} // If the script is already there, return
				js = d.createElement(s);
				js.id = id; // Create a new script element
				js.src = "https://connect.facebook.net/en_US/sdk.js"; // Set its src to the Facebook SDK
				fjs.parentNode.insertBefore(js, fjs); // Insert the script element before the first script element
			})(document, "script", "facebook-jssdk");
		}
	}, []); // Empty dependency array means this effect will only run once

	return (
		<Container>
			<Stack className={classes.root}>
				<h1>You can take a look at our facebook page for updates!</h1>
				{loading && <Loader color="blue" size="xl" />}{" "}
				{/* Show loading text while loading */}
				<Box
					className="fb-page"
					data-href="https://www.facebook.com/profile.php?id=61551846466907"
					data-tabs="timeline"
					data-width={mobile ? "360" : "500"}
					data-height="1024"
					data-small-header="false"
					data-adapt-container-width="true"
					data-hide-cover="false"
					data-show-facepile="true"></Box>
				{/* <blockquote
					cite="https://www.facebook.com/facebook"
					className="fb-xfbml-parse-ignore">
					<a href="https://www.facebook.com/facebook">Facebook</a>
				</blockquote> */}
			</Stack>

			{/* Facebook Page plugin */}
		</Container>
	);
}
