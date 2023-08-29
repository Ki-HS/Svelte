module.exports = {
	useTabs: true,
	singleQuote: false,
	trailingComma: "none",
	semi: false,
	printWidth: 100,
	bracketSameLine: true,
	htmlWhitespaceSensitivity: "ignore",
	plugins: ["./node_modules/prettier-plugin-svelte"],
	pluginSearchDirs: false,
	overrides: [
		{
			files: "**/*.svelte",
			options: {
				parser: "svelte",
				svelteSortOrder: "scripts-markup-styles",
				svelteStrictMode: false,
				svelteBracketNewLine: false,
				svelteAllowShorthand: true,
				svelteIndentScriptAndStyle: true,
			},
		},
	],
};
