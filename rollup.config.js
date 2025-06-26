import { dts } from "rollup-plugin-dts";

const config = [
	{
		input: "./input/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugin: [dts()]
	}
];

export default config;

