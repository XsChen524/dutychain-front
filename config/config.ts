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
		logo: "logo.png",
		title: "DutyChain",
	},
	history: {
		type: "browser",
	},
	routes: [
		{
			name: "Home",
			path: "/",
			component: "./Home",
		},
		/*
			{
				name: "权限演示",
				path: "/access",
				component: "./Access",
			},
			{
				name: " CRUD 示例",
				path: "/table",
				component: "./Table",
			},
		*/
		{
			name: "Login",
			path: "/auth/login",
			component: "./Auth",
			access: "isLoggedOut",
		},
		{
			name: "Vendor",
			path: "/vendor",
			component: "./Vendor",
		},
		{
			name: "Document",
			path: "/document",
			component: "./Document",
		},
		{
			name: "Profile",
			path: "/profile",
			component: "./Profile",
			access: "isLoggedIn",
		},
	],
});
