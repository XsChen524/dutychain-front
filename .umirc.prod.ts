import { defineConfig } from "@umijs/max";

export default defineConfig({
	define: {
		"process.env": {
			NODE_ENV: "prod",
			UMI_ENV: "prod",
		},
		GLOBAL_HOST: "https://middle.tracechain.top",
	},
});
