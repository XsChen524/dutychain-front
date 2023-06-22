import { defineConfig } from "@umijs/max";
import enUS from "antd/locale/en_US";

export default defineConfig({
	npmClient: "npm",
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
		dataField: "data",
	},
	layout: {
		title: "DutyChain",
	},
	history: {
		type: "hash",
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
	],
});
