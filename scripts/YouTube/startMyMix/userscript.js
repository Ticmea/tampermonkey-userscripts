// ==UserScript==
// @name              YouTube Start "My Mix"
// @name:de-DE        YouTube "Mein Mix" starten
// @namespace         mailto:ticmea.yt+userscripts@gmail.com
// @version           1.0.0
// @description       Adds entries to the Greasemonkey/Tampermonkey menu to start YouTubes "My Mix" feature, either from the current URL or from a 0 second video
// @description:de-DE Fügt Einträge um YouTubes "Mein Mix" Feature (entweder von der aktuellen URL oder von einem 0-Sekunden Video aus) zu starten, zum Greasemonkey/Tampermonkey Menü hinzu
// @author            Ticmea
// @match             *://www.youtube.com/*
// @icon              data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4wIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAxNjAgMTEwIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1NDEsIDIwMjItMTItMDEpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgICAgaWQ9ImRlZnMxODgiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxODYiCiAgICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICAgIGJvcmRlcmNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMSIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiM1MDUwNTAiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjMuNjYzNjM2NCIKICAgICBpbmtzY2FwZTpjeD0iNzAuNDIxODM2IgogICAgIGlua3NjYXBlOmN5PSI4Mi43MDQ3MTQiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDgiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPjxnCiAgICAgaWQ9ImcxODMiPjxnCiAgICAgICBpZD0iZzE4MSI+PHBhdGgKICAgICAgICAgZmlsbD0iI0ZGMDAwMCIKICAgICAgICAgZD0iTTE1NC4zLDE3LjVjLTEuOC02LjctNy4xLTEyLTEzLjgtMTMuOGMtMTIuMS0zLjMtNjAuOC0zLjMtNjAuOC0zLjNTMzEsMC41LDE4LjksMy44IGMtNi43LDEuOC0xMiw3LjEtMTMuOCwxMy44QzEuOSwyOS43LDEuOSw1NSwxLjksNTVzMCwyNS4zLDMuMywzNy41YzEuOCw2LjcsNy4xLDEyLDEzLjgsMTMuOGMxMi4xLDMuMyw2MC44LDMuMyw2MC44LDMuMyBzNDguNywwLDYwLjgtMy4zYzYuNy0xLjgsMTItNy4xLDEzLjgtMTMuOGMzLjMtMTIuMSwzLjMtMzcuNSwzLjMtMzcuNVMxNTcuNiwyOS43LDE1NC4zLDE3LjV6IgogICAgICAgICBpZD0icGF0aDE3NyIgLz48L2c+PC9nPjxnCiAgICAgYXJpYS1sYWJlbD0i4pmrIgogICAgIGlkPSJ0ZXh0NTIyIgogICAgIHN0eWxlPSJmb250LXNpemU6OTZweDtsaW5lLWhlaWdodDowO2ZvbnQtZmFtaWx5OidMaWJlcmF0aW9uIE1vbm8nOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xpYmVyYXRpb24gTW9ubyc7ZmlsbDojZmZmZmZmO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnNxdWFyZSI+PHBhdGgKICAgICAgIGQ9Im0gNjYuNTc5ODYxLDI4LjAyMzQzNyAzNy4zMTI0OTksLTExLjYyNSB2IDUxLjkzNzUgcSAwLDUuODEyNSAtMS41LDguNzY1NjI1IC0xLjQ1MzEyLDIuOTUzMTI1IC01LjAxNTYyNCw0Ljg3NSAtMy41MTU2MjUsMS45MjE4NzUgLTcuOTY4NzUsMS45MjE4NzUgLTUuMTA5Mzc1LDAgLTguMTU2MjUsLTIuOTA2MjUgLTMuMDQ2ODc1LC0yLjk1MzEyNSAtMy4wNDY4NzUsLTcuNTkzNzUgMCwtNC42ODc1IDMuNjA5Mzc1LC04LjA2MjUgMy42MDkzNzUsLTMuNDIxODc1IDkuMzI4MTI1LC0zLjQyMTg3NSAxLjg3NSwwIDMuMjgxMjUsMC4zMjgxMjUgMS40NTMxMjUsMC4zMjgxMjUgNC42ODc1LDEuNjg3NSB2IC0zMy45Mzc1IGwgLTI3Ljg5MDYyNSw4LjY3MTg3NSB2IDM5LjE4NzUgcSAwLDUuNjcxODc1IC0xLjUsOC44NTkzNzUgLTEuNSwzLjE0MDYyNSAtNS4xNTYyNSw1LjAxNTYyNSAtMy42NTYyNSwxLjg3NSAtNy45Njg3NSwxLjg3NSAtNS4xMDkzNzUsMCAtOC4xMDkzNzUsLTIuOTA2MjUgLTIuOTUzMTI1LC0yLjg1OTM3NSAtMi45NTMxMjUsLTcuNSAwLC00LjkyMTg3NSAzLjU2MjUsLTguMjUgMy41NjI1LC0zLjM3NSA5LjMyODEyNSwtMy4zNzUgMy42NTYyNSwwIDguMTU2MjUsMi4xNTYyNSB6IgogICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OkFyaWFsOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246QXJpYWwiCiAgICAgICBpZD0icGF0aDI5MSIgLz48L2c+PC9zdmc+
// @grant             GM_registerMenuCommand
// @license           EUPL-1.2
// @supportURL        https://codeberg.org/Ticmea/tampermonkey-userscripts
// ==/UserScript==
// ===============================================================NOTE ON LICENSE================================================================
// The @license field is set to EUPL-1.2 because that is the recommended standard idenfier for version 1.2 of the European Union Public License.
// At the time of writing 1.2 is the latest version of that license. (see: https://spdx.org/licenses/EUPL-1.2.html)
// The user may however also choose to use a potentially later version of the EUPL should they so wish, this is expressly permitted.
// ===============================================================/NOTE ON LICENSE===============================================================

// NOTE: I encountered the idea behind how this script works in a stackexchange post: https://webapps.stackexchange.com/questions/116322/is-there-a-url-that-will-start-playing-my-mix
// and so I decided to make a little script around it to hopefully enable users to (more easily) start this feature on demand rather than whenever YouTube decides to show them the playlist.

(function () {
	'use strict';

	const ytVideoBasePath = "/watch";
	const zeroSecondsURLString = "https://www.youtube.com/watch?v=Mvvsa5HAJiI";
	const listId = "list";
	const myMixListId = "RDMM";
	const startRadio = "start_radio";
	const myMixStartRadio = "1";

	const transformURL = (targetURL) => {
		let url = new URL(targetURL.href);
		if (url.searchParams.has(listId)) url.searchParams.delete(listId);
		if (url.searchParams.has(startRadio)) url.searchParams.delete(startRadio);
		url.searchParams.append(listId, myMixListId);
		url.searchParams.append(startRadio, myMixStartRadio);
		return url;
	};

	const menu_command_start_my_mix = GM_registerMenuCommand("Start \"My Mix\"", function (event) {
		window.location.href = transformURL(new URL(zeroSecondsURLString)).href;
	}, {
		title: "Starts YouTubes \"My Mix\" feature by changing the URL to a 0 second video.",
	});

	const menu_command_start_my_mix_from_video = GM_registerMenuCommand("Start \"My Mix\" from this video", function (event) {
		let url = new URL(window.location.href);
		if (url.pathname.startsWith(ytVideoBasePath)) {
			url = transformURL(url);
		} else {
			url = transformURL(new URL(zeroSecondsURLString));
		}
		window.location.href = url.href;
	}, {
		title: "Starts YouTubes \"My Mix\" feature from this video (if one is currently selected, otherwise start at 0 second video).",
	});
})();
