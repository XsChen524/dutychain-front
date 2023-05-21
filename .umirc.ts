import { defineConfig } from "@umijs/max";

export default defineConfig({
	npmClient: "npm",
	antd: {},
	access: {},
	model: {},
	initialState: {},
	request: {},
	layout: {
		title: "@umijs/max",
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
			name: "首页",
			path: "/home",
			component: "./Home",
		},
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
	],
});
