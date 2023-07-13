import enUS from "antd/locale/en_US";
import { defineConfig } from "@umijs/max";

export default defineConfig({
	npmClient: "npm",
	favicons: ["/favicon.ico"],
	antd: {
		configProvider: {
			locale: enUS,
		},
	},
	dva: {},
	access: {},
	model: {},
	initialState: {},
	request: {
		dataField: "",
	},
	layout: {
		logo: "/logo.png",
		title: "DutyChain",
	},
	history: {
		type: "browser",
	},
	routes: [
		{
			name: "Home",
			path: "/",
			component: "./Home/HomePage.tsx",
		},
		{
			name: "Document",
			path: "/document",
			component: "./Document/DocumentPage.tsx",
			routes: [
				{
					name: "Create a document",
					path: "/document/creation",
					component: "./Document/DocumentCreatePage.tsx",
					hideInMenu: true,
					routes: [
						{
							name: "Result",
							path: "/document/creation/:id/result",
							component: "./Document/ResultPage.tsx",
							hideInMenu: true,
						},
					],
				},
			],
		},
		{
			name: "Administration",
			path: "/admin",
			component: "./Administration/AdminPage.tsx",
			access: "isAdmin",
		},
		{
			name: "Profile",
			path: "/profile",
			component: "./Profile/ProfilePage.tsx",
			access: "isLoggedIn",
		},

		{
			name: "Authentication",
			path: "/auth/login",
			component: "./Auth/LoginPage.tsx",
			access: "isLoggedOut",
			routes: [
				{
					name: "Result",
					path: "/auth/login/result",
					component: "./Auth/LoginResult.tsx",
					hideInMenu: true,
				},
			],
		},
	],
});
