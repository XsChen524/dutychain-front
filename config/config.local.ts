import { defineConfig } from "@umijs/max";

export default defineConfig({
	define: {
		"process.env": {
			NODE_ENV: "dev",
			UMI_ENV: "dev",
		},
		GLOBAL_HOST: "http://localhost:7001",
	},
});
