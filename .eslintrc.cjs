module.exports = {
	extends: [require.resolve("@umijs/max/eslint")],
	plugins: ["sort-imports-es6-autofix"],
	rules: {
		semi: ["error", "always"],
		indent: ["error", "tab"],
		"no-unused-vars": "warn",
		"sort-imports-es6-autofix/sort-imports-es6": [
			"warn",
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
			},
		],
	},
};
