import { defineConfig } from "@umijs/max";
import type { Locale } from "antd/es/locale";
import enUS from "antd/locale/en_US";

export default defineConfig({
	npmClient: "npm",
	antd: {
		configProvider: {
			locale: enUS,
		},
	},
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
			path: "/",
			redirect: "/home",
		},
		{
			name: "Home",
			path: "/home",
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
			name: "Vendor",
			path: "/vendor",
			component: "./Vendor",
		},
	],
});
