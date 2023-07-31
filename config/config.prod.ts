import { defineConfig } from "@umijs/max";

export default defineConfig({
	define: {
		"process.env": {
			NODE_ENV: "prod",
			UMI_ENV: "prod",
		},
		GLOBAL_HOST: "http://38.147.173.101:7022/",
	},
});
